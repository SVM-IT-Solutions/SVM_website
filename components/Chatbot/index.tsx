"use client";

import React, { useState, useEffect, useRef, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  Loader2,
  Bot,
  ExternalLink,
  Sparkles,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";

interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: string;
  leadSaved?: boolean;
  showWhatsAppBtn?: boolean;
}

const QUICK_REPLIES = [
  "SEO Services",
  "Web Development",
  "Get a Quote",
  "Talk to team",
];

const GREETING_TEXT = "Welcome to SVM IT Solution! How can I assist you today?";

const INITIAL_MESSAGE: ChatMessage = {
  id: "welcome-msg",
  role: "model",
  text: GREETING_TEXT,
  timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
};

const WHATSAPP_URL = "https://wa.me/916388744723";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [showNotificationBadge, setShowNotificationBadge] = useState(true);
  const [sessionId, setSessionId] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasSpokenWelcomeRef = useRef(false);

  // Preload audio
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const audio = new Audio("/welcome-voice.mp3");
        audio.preload = "auto";
        audio.load();
        audioRef.current = audio;
      } catch (e) {
        console.warn("Audio init error:", e);
      }
    }
  }, []);

  // Initialize persistent session ID
  useEffect(() => {
    let sid = "";
    try {
      sid = sessionStorage.getItem("svm_chat_session_id") || "";
      if (!sid) {
        sid = "sess_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7);
        sessionStorage.setItem("svm_chat_session_id", sid);
      }
    } catch {
      sid = "sess_" + Date.now();
    }
    setSessionId(sid);
  }, []);

  // Natural Human Voice Playback (Instant upon chat opening)
  const playAutomaticVoice = () => {
    if (typeof window === "undefined" || hasSpokenWelcomeRef.current) return;

    try {
      if (!audioRef.current) {
        audioRef.current = new Audio("/welcome-voice.mp3");
      }
      const audio = audioRef.current;
      audio.currentTime = 0;
      audio.volume = 1.0;

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            hasSpokenWelcomeRef.current = true;
          })
          .catch((err) => {
            console.log("Autoplay waiting for first gesture:", err);
            // In Chrome, if page opens in background without touch,
            // play immediately on user's very first touch/gesture:
            const onFirstGesture = () => {
              if (hasSpokenWelcomeRef.current) return;
              try {
                audio.currentTime = 0;
                audio
                  .play()
                  .then(() => {
                    hasSpokenWelcomeRef.current = true;
                  })
                  .catch(() => { });
              } catch { }
            };

            window.addEventListener("pointerdown", onFirstGesture, { once: true, capture: true });
            window.addEventListener("touchstart", onFirstGesture, { once: true, capture: true });
            window.addEventListener("click", onFirstGesture, { once: true, capture: true });
            window.addEventListener("keydown", onFirstGesture, { once: true, capture: true });
          });
      }
    } catch (e) {
      console.warn("Audio play exception:", e);
    }
  };

  // 10-Second Auto-Open Trigger (automatically opens after 10s and speaks)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setShowNotificationBadge(false);
      playAutomaticVoice();
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);


  // Voice playback instantly whenever opened
  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setShowNotificationBadge(false);
      playAutomaticVoice();
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [isOpen]);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isLoading]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSend = async (messageText?: string) => {
    const textToSend = (messageText ?? input).trim();
    if (!textToSend || isLoading) return;

    const userMessage: ChatMessage = {
      id: "msg-" + Date.now(),
      role: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    const lowerText = textToSend.toLowerCase();
    const isTalkToTeam =
      lowerText === "talk to team" ||
      lowerText.includes("team se baat") ||
      lowerText.includes("connect with team") ||
      lowerText === "i'd like to discuss my project with your team.";

    try {
      const historyPayload = newMessages
        .filter((m) => m.id !== "welcome-msg")
        .map((m) => ({
          role: m.role,
          text: m.text,
        }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionId: sessionId || "sess_default",
          message: textToSend,
          history: historyPayload.slice(0, -1),
          honeypot: honeypot || undefined,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        const errMsg =
          data?.error || "We encountered an issue processing your message. Please try again.";
        setMessages((prev) => [
          ...prev,
          {
            id: "msg-err-" + Date.now(),
            role: "model",
            text: `⚠️ ${errMsg}`,
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ]);
        return;
      }

      const shouldOpenWhatsApp = data?.action === "open_whatsapp" || isTalkToTeam;

      const botReply: ChatMessage = {
        id: "msg-" + Date.now(),
        role: "model",
        text: data?.reply || "Thank you for reaching out! How else can I assist you?",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        leadSaved: Boolean(data?.leadSaved),
        showWhatsAppBtn: shouldOpenWhatsApp,
      };

      setMessages((prev) => [...prev, botReply]);

      if (shouldOpenWhatsApp) {
        setTimeout(() => {
          if (typeof window !== "undefined") {
            window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
          }
        }, 900);
      }
    } catch (err: any) {
      console.error("Chatbot request failed:", err);
      setMessages((prev) => [
        ...prev,
        {
          id: "msg-err-" + Date.now(),
          role: "model",
          text: "Sorry, I am unable to connect at the moment. You can also message us directly on WhatsApp at +91 6388744723.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          showWhatsAppBtn: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSend();
  };

  const handleQuickReply = (chip: string) => {
    let prompt = chip;
    if (chip === "SEO Services") {
      prompt = "I'm interested in your SEO Services. Can you tell me what you provide?";
    } else if (chip === "Web Development") {
      prompt = "I need a website developed. What web development services do you offer?";
    } else if (chip === "Get a Quote") {
      prompt = "I'd like to get a quote for a project.";
    } else if (chip === "Talk to team") {
      prompt = "Talk to team";
    }
    handleSend(prompt);
  };

  const renderMessageContent = (text: string) => {
    return text.split("\n").map((line, idx) => {
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      return (
        <span key={idx} className="block min-h-[1.2em]">
          {parts.map((part, pIdx) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <strong key={pIdx} className="font-semibold">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return part;
          })}
        </span>
      );
    });
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
        {/* Floating Greeting Pill */}
        <AnimatePresence>
          {!isOpen && showNotificationBadge && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="mb-3 hidden sm:flex items-center gap-2 bg-white dark:bg-zinc-800 text-gray-800 dark:text-gray-100 text-xs py-2 px-3.5 rounded-full shadow-lg border border-blue-100 dark:border-zinc-700 cursor-pointer hover:shadow-xl transition-all"
              onClick={() => {
                setIsOpen(true);
                playAutomaticVoice();
              }}
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium">Welcome to SVM! Chat with us</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowNotificationBadge(false);
                }}
                className="ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                aria-label="Dismiss greeting"
              >
                <X className="w-3 h-3" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const willOpen = !isOpen;
            setIsOpen(willOpen);
            if (willOpen) {
              playAutomaticVoice();
            }
          }}
          aria-label={isOpen ? "Close chat" : "Open chat with SVM IT Solution"}
          aria-expanded={isOpen}
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-400/40 transition-all cursor-pointer"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageSquare className="w-6 h-6" />
              {showNotificationBadge && (
                <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white dark:border-zinc-900" />
                </span>
              )}
            </>
          )}
        </motion.button>
      </div>

      {/* Floating Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-modal="false"
            aria-label="SVM IT Solution Assistant Chat"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onMouseEnter={() => {
              if (!hasSpokenWelcomeRef.current) playAutomaticVoice();
            }}
            onClick={() => {
              if (!hasSpokenWelcomeRef.current) playAutomaticVoice();
            }}
            className="fixed bottom-24 right-4 sm:right-6 z-[9999] w-[calc(100vw-2rem)] sm:w-[400px] h-[580px] max-h-[82vh] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-zinc-800 flex flex-col overflow-hidden"
          >
            {/* Clean Header (Without speaker icon) */}
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white px-4 py-3.5 flex items-center justify-between select-none shadow-md">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-white/80 shadow-sm">
                    <img
                      src="/logo.png"
                      alt="SVM IT Solution"
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-blue-700" />
                </div>
                <div>
                  <h2 className="font-semibold text-sm leading-tight text-white flex items-center gap-1.5">
                    SVM IT Solution Assistant
                  </h2>
                  <p className="text-[11px] text-blue-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Online • Typically replies instantly
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-1">
                {/* Direct WhatsApp Callout in header */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-blue-100 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                  title="Direct WhatsApp Chat (+91 6388744723)"
                  aria-label="Direct WhatsApp Chat"
                >
                  <PhoneCall className="w-4 h-4" />
                </a>

                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-blue-100 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none cursor-pointer"
                  aria-label="Close chat window"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Conversation Messages (Clean layout without extra voice buttons) */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-sm bg-gray-50/50 dark:bg-zinc-900/50">
              {messages.map((msg) => {
                const isUser = msg.role === "user";

                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
                  >
                    <div className="flex items-end gap-2 max-w-[85%]">
                      {!isUser && (
                        <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 text-xs mb-1">
                          <Bot className="w-3.5 h-3.5" />
                        </div>
                      )}

                      <div
                        className={`rounded-2xl px-4 py-2.5 text-[13.5px] leading-relaxed shadow-sm ${isUser
                          ? "bg-blue-600 text-white rounded-br-xs"
                          : "bg-white dark:bg-zinc-800 text-gray-800 dark:text-gray-100 border border-gray-100 dark:border-zinc-700/60 rounded-bl-xs"
                          }`}
                      >
                        {msg.leadSaved && (
                          <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium mb-1">
                            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                            <span>Lead Received Successfully</span>
                          </div>
                        )}
                        {renderMessageContent(msg.text)}

                        {/* Interactive WhatsApp button if connecting to team */}
                        {msg.showWhatsAppBtn && (
                          <div className="mt-2.5 pt-2 border-t border-gray-100 dark:border-zinc-700/60">
                            <a
                              href={WHATSAPP_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xs transition-colors"
                            >
                              <PhoneCall className="w-3.5 h-3.5" />
                              Open WhatsApp Chat (+91 6388744723)
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>

                    <span className="text-[10px] text-gray-400 dark:text-gray-500 mt-1 px-1">
                      {msg.timestamp}
                    </span>
                  </div>
                );
              })}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 text-xs mb-1">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700/60 rounded-2xl rounded-bl-xs px-4 py-3 shadow-sm flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" />
                  </div>
                </div>
              )}

              {/* Quick Reply Chips (shown when fewer than 4 messages have been exchanged) */}
              {messages.length <= 3 && !isLoading && (
                <div className="pt-2">
                  <p className="text-[11px] font-medium text-gray-400 dark:text-gray-500 mb-2 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-blue-500" /> Suggested topics:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {QUICK_REPLIES.map((chip) => (
                      <button
                        key={chip}
                        type="button"
                        onClick={() => handleQuickReply(chip)}
                        className="text-xs bg-white dark:bg-zinc-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/50 rounded-full px-3 py-1.5 transition-all shadow-xs hover:border-blue-300 font-medium cursor-pointer"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* WhatsApp Fallback Strip */}
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border-t border-emerald-100 dark:border-emerald-900/40 px-3.5 py-1.5 flex items-center justify-between text-xs text-emerald-800 dark:text-emerald-300">
              <span className="truncate">Prefer talking to a human directly?</span>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-300 hover:underline flex-shrink-0"
              >
                Chat on WhatsApp
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Input Form */}
            <form
              onSubmit={onSubmit}
              className="p-3 bg-white dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800 flex items-center gap-2"
            >
              <input
                type="text"
                name="website_url_hp"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question or share requirements..."
                  maxLength={1000}
                  disabled={isLoading}
                  className="w-full text-sm bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-zinc-500 rounded-full pl-4 pr-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all border border-transparent focus:bg-white dark:focus:bg-zinc-800"
                />
                {input.length > 800 && (
                  <span className="absolute right-3 top-2.5 text-[10px] text-gray-400">
                    {1000 - input.length}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                aria-label="Send message"
                className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm cursor-pointer"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4 ml-0.5" />
                )}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
