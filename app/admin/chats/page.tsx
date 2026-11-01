"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  MessageSquare,
  Users,
  CheckCircle2,
  Calendar,
  Search,
  RefreshCw,
  ArrowLeft,
  Bot,
  User,
  ExternalLink,
  ShieldAlert,
} from "lucide-react";
import type { ChatSessionRecord } from "@/lib/chatStorage";

export default function AdminChatsPage() {
  const [sessions, setSessions] = useState<ChatSessionRecord[]>([]);
  const [selectedSession, setSelectedSession] = useState<ChatSessionRecord | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchChats = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/chats");
      const data = await res.json();
      if (res.ok) {
        setSessions(data.chats || []);
        if (data.chats && data.chats.length > 0 && !selectedSession) {
          setSelectedSession(data.chats[0]);
        }
      } else {
        setError(data.error || "Failed to load chats.");
      }
    } catch (err: any) {
      setError(err?.message || "Failed to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  const filteredSessions = sessions.filter((s) => {
    const q = searchQuery.toLowerCase();
    if (!q) return true;
    if (s.sessionId.toLowerCase().includes(q)) return true;
    if (s.leadData && JSON.stringify(s.leadData).toLowerCase().includes(q)) return true;
    return s.messages.some((m) => m.text.toLowerCase().includes(q));
  });

  const totalLeads = sessions.filter((s) => s.leadCaptured).length;
  const totalMessages = sessions.reduce((acc, s) => acc + (s.messages?.length || 0), 0);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm pr-3 border-r border-slate-800"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Website
          </Link>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white shadow-md">
              SVM
            </div>
            <div>
              <h1 className="text-base font-bold text-white leading-tight">
                SVM IT Solution - Visitor Chat History
              </h1>
              <p className="text-xs text-slate-400">
                Live log of all customer conversations and captured leads
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchChats}
            disabled={loading}
            className="flex items-center gap-2 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3.5 py-2 rounded-lg border border-slate-700 transition-all cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
            Refresh Chats
          </button>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-6 py-4 border-b border-slate-800 bg-slate-950/40">
        <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3.5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-bold text-white">{sessions.length}</div>
            <div className="text-xs text-slate-400">Total Visitors Chatted</div>
          </div>
        </div>

        <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3.5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-bold text-emerald-400">{totalLeads}</div>
            <div className="text-xs text-slate-400">Leads Captured</div>
          </div>
        </div>

        <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3.5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-bold text-indigo-300">{totalMessages}</div>
            <div className="text-xs text-slate-400">Total Messages Exchanged</div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Left Column: Chat Sessions List */}
        <aside className="w-full md:w-80 lg:w-96 border-r border-slate-800 bg-slate-950/20 flex flex-col h-[650px] md:h-auto">
          {/* Search Bar */}
          <div className="p-3.5 border-b border-slate-800">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search user, message, service..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Session Cards */}
          <div className="flex-1 overflow-y-auto divide-y divide-slate-800/60">
            {loading && sessions.length === 0 ? (
              <div className="p-8 text-center text-xs text-slate-500">Loading chat history...</div>
            ) : filteredSessions.length === 0 ? (
              <div className="p-8 text-center text-xs text-slate-500">
                {searchQuery ? "No matching chats found." : "No conversations recorded yet."}
              </div>
            ) : (
              filteredSessions.map((session) => {
                const isSelected = selectedSession?.sessionId === session.sessionId;
                const lastMsg = session.messages[session.messages.length - 1]?.text || "No messages";
                const userMsgCount = session.messages.filter((m) => m.role === "user").length;

                return (
                  <div
                    key={session.sessionId}
                    onClick={() => setSelectedSession(session)}
                    className={`p-3.5 cursor-pointer transition-colors ${
                      isSelected
                        ? "bg-blue-600/15 border-l-4 border-l-blue-500"
                        : "hover:bg-slate-800/40"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-semibold text-slate-200 truncate">
                        {session.leadData?.name || `Visitor (${session.sessionId.slice(-6)})`}
                      </span>
                      <span className="text-[10px] text-slate-500 flex-shrink-0">
                        {new Date(session.updatedAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 mb-1.5">
                      {session.leadCaptured && (
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
                          <CheckCircle2 className="w-2.5 h-2.5" /> Lead Saved
                        </span>
                      )}
                      <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded">
                        {userMsgCount} user msgs
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                      {lastMsg}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </aside>

        {/* Right Column: Active Conversation Transcript */}
        <main className="flex-1 flex flex-col bg-slate-900 overflow-hidden">
          {selectedSession ? (
            <>
              {/* Conversation Header */}
              <div className="p-4 border-b border-slate-800 bg-slate-950/40 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-sm font-bold text-white">
                      {selectedSession.leadData?.name
                        ? `${selectedSession.leadData.name}'s Conversation`
                        : `Conversation: ${selectedSession.sessionId}`}
                    </h2>
                    {selectedSession.leadCaptured && (
                      <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-md font-medium">
                        ✓ Lead Confirmed
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
                    <span>IP: {selectedSession.ip || "127.0.0.1"}</span>
                    <span>•</span>
                    <span>
                      Started: {new Date(selectedSession.createdAt).toLocaleString()}
                    </span>
                  </div>
                </div>

                {selectedSession.leadData && (
                  <div className="text-xs bg-slate-800/80 border border-slate-700/80 rounded-lg p-2.5 space-y-0.5">
                    {selectedSession.leadData.email && (
                      <div>
                        <span className="text-slate-400">Email:</span>{" "}
                        <span className="text-white font-medium">
                          {selectedSession.leadData.email}
                        </span>
                      </div>
                    )}
                    {selectedSession.leadData.phone && (
                      <div>
                        <span className="text-slate-400">Phone:</span>{" "}
                        <span className="text-white font-medium">
                          {selectedSession.leadData.phone}
                        </span>
                      </div>
                    )}
                    {selectedSession.leadData.service && (
                      <div>
                        <span className="text-slate-400">Service:</span>{" "}
                        <span className="text-blue-400 font-medium">
                          {selectedSession.leadData.service}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Chat Messages Log */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {selectedSession.messages.map((msg, index) => {
                  const isUser = msg.role === "user";
                  return (
                    <div
                      key={msg.id || index}
                      className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
                    >
                      <div className="flex items-start gap-2.5 max-w-[85%]">
                        {!isUser && (
                          <div className="w-7 h-7 rounded-full bg-blue-600/30 text-blue-400 border border-blue-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Bot className="w-4 h-4" />
                          </div>
                        )}

                        <div
                          className={`rounded-2xl px-4 py-3 text-xs sm:text-[13px] leading-relaxed shadow-sm ${
                            isUser
                              ? "bg-blue-600 text-white rounded-tr-xs"
                              : "bg-slate-800 text-slate-100 border border-slate-700/70 rounded-tl-xs"
                          }`}
                        >
                          <div className="whitespace-pre-wrap">{msg.text}</div>
                        </div>

                        {isUser && (
                          <div className="w-7 h-7 rounded-full bg-slate-700 text-slate-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <User className="w-4 h-4" />
                          </div>
                        )}
                      </div>

                      <span className="text-[10px] text-slate-500 mt-1 px-10">
                        {new Date(msg.timestamp).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                          second: "2-digit",
                        })}
                      </span>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-slate-500">
              <MessageSquare className="w-12 h-12 mb-3 text-slate-600" />
              <h3 className="text-base font-medium text-slate-300 mb-1">Select a Conversation</h3>
              <p className="text-xs text-slate-500 max-w-sm">
                Choose any user chat session from the left column to view the full message transcript.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

