import fs from "fs";
import path from "path";

export interface ChatMessageRecord {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: string;
}

export interface ChatSessionRecord {
  sessionId: string;
  createdAt: string;
  updatedAt: string;
  ip?: string;
  leadCaptured?: boolean;
  leadData?: Record<string, any>;
  messages: ChatMessageRecord[];
}

const DATA_DIR = path.join(process.cwd(), "data");
const CHAT_FILE = path.join(DATA_DIR, "chats.json");

// Ensure data folder and file exist
function ensureFileExists() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(CHAT_FILE)) {
    fs.writeFileSync(CHAT_FILE, JSON.stringify([], null, 2), "utf8");
  }
}

export async function getAllChats(): Promise<ChatSessionRecord[]> {
  try {
    ensureFileExists();
    const data = await fs.promises.readFile(CHAT_FILE, "utf8");
    const sessions = JSON.parse(data);
    if (!Array.isArray(sessions)) return [];
    // Sort by latest update first
    return sessions.sort(
      (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
  } catch (error) {
    console.error("Error reading chats file:", error);
    return [];
  }
}

export async function saveChatTurn({
  sessionId,
  userMessage,
  botReply,
  ip,
  leadData,
  leadSaved,
}: {
  sessionId: string;
  userMessage: string;
  botReply: string;
  ip?: string;
  leadData?: Record<string, any>;
  leadSaved?: boolean;
}) {
  try {
    ensureFileExists();
    const rawData = await fs.promises.readFile(CHAT_FILE, "utf8");
    let sessions: ChatSessionRecord[] = [];
    try {
      sessions = JSON.parse(rawData);
    } catch {
      sessions = [];
    }

    const now = new Date().toISOString();
    let session = sessions.find((s) => s.sessionId === sessionId);

    if (!session) {
      session = {
        sessionId,
        createdAt: now,
        updatedAt: now,
        ip: ip || "anonymous",
        leadCaptured: false,
        messages: [],
      };
      sessions.push(session);
    }

    session.updatedAt = now;
    if (ip && session.ip === "anonymous") {
      session.ip = ip;
    }

    // Append user message
    session.messages.push({
      id: "usr-" + Date.now() + "-" + Math.random().toString(36).substring(2, 6),
      role: "user",
      text: userMessage,
      timestamp: now,
    });

    // Append bot reply
    session.messages.push({
      id: "bot-" + Date.now() + "-" + Math.random().toString(36).substring(2, 6),
      role: "model",
      text: botReply,
      timestamp: now,
    });

    // If lead was captured
    if (leadSaved) {
      session.leadCaptured = true;
      session.leadData = leadData || session.leadData;
    }

    await fs.promises.writeFile(CHAT_FILE, JSON.stringify(sessions, null, 2), "utf8");
  } catch (error) {
    console.error("Failed to save chat turn to file:", error);
  }
}

