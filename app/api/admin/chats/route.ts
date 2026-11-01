import { NextRequest, NextResponse } from "next/server";
import { getAllChats } from "@/lib/chatStorage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const chats = await getAllChats();
    return NextResponse.json({
      success: true,
      totalSessions: chats.length,
      chats,
    });
  } catch (error: any) {
    console.error("Failed to fetch admin chats:", error);
    return NextResponse.json(
      { error: "Failed to retrieve chat history." },
      { status: 500 }
    );
  }
}

