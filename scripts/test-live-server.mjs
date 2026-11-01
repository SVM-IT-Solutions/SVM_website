// scripts/test-live-server.mjs
import { spawn, execSync } from "child_process";
import fs from "fs";
import path from "path";

const PORT = 3008;
const BASE_URL = `http://127.0.0.1:${PORT}`;

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function killPort(port) {
  try {
    execSync(
      `powershell -Command "Get-NetTCPConnection -LocalPort ${port} -ErrorAction SilentlyContinue | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue }"`,
      { stdio: "ignore" }
    );
  } catch (e) {}
}

async function waitForServer(url, timeoutMs = 45000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(`${url}/api/admin/chats`, {
        signal: AbortSignal.timeout(2000),
      });
      if (res.status === 200) {
        return true;
      }
    } catch (e) {
      // Server not ready yet
    }
    await sleep(1500);
  }
  return false;
}

async function runLiveTests() {
  killPort(PORT);
  await sleep(1000);

  console.log("Starting Next.js dev server on port", PORT, "...");
  const devServer = spawn("cmd.exe", ["/c", "npx", "next", "dev", "-p", String(PORT)], {
    stdio: "pipe",
    env: { ...process.env, PORT: String(PORT) },
  });

  devServer.stdout.on("data", (d) => {
    const text = d.toString();
    if (text.includes("Ready") || text.includes("started") || text.includes("compiled")) {
      console.log("[DevServer]", text.trim());
    }
  });

  devServer.stderr.on("data", (d) => {
    const text = d.toString();
    if (!text.includes("DeprecationWarning")) {
      console.log("[DevServer Log]", text.trim());
    }
  });

  try {
    console.log("Waiting for server to become responsive...");
    const isReady = await waitForServer(BASE_URL);
    if (!isReady) {
      throw new Error("Next.js dev server failed to start within timeout.");
    }
    console.log("Server is ready! Running test suite...\n");

    let passed = 0;
    let failed = 0;

    // --- TEST 1: Talk to team -> WhatsApp Action ---
    console.log("==========================================");
    console.log("TEST 1: Talk to team (WhatsApp Auto-Connect)");
    console.log("==========================================");
    try {
      const res = await fetch(`${BASE_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: "test_session_whatsapp",
          message: "Talk to team",
          history: [],
        }),
      });
      const data = await res.json();
      console.log("Status:", res.status);
      console.log("Reply:", data.reply);
      console.log("Action:", data.action);
      if (res.ok && data.action === "open_whatsapp") {
        console.log(">>> TEST 1 PASSED ✅\n");
        passed++;
      } else {
        console.log(">>> TEST 1 FAILED ❌\n", data);
        failed++;
      }
    } catch (err) {
      console.error(">>> TEST 1 FAILED with exception ❌", err);
      failed++;
    }

    // --- TEST 2: Chat Logging to File (data/chats.json) ---
    console.log("==========================================");
    console.log("TEST 2: Chat Logging to File & Admin API");
    console.log("==========================================");
    try {
      const chatFile = path.join(process.cwd(), "data", "chats.json");
      const adminRes = await fetch(`${BASE_URL}/api/admin/chats`);
      const adminData = await adminRes.json();
      console.log("Admin API Status:", adminRes.status);
      console.log("Recorded Sessions Count:", adminData.totalSessions);

      if (adminRes.ok && adminData.chats && fs.existsSync(chatFile)) {
        console.log(">>> TEST 2 PASSED ✅ Chats saved to file and available to Admin!\n");
        passed++;
      } else {
        console.log(">>> TEST 2 FAILED ❌\n", adminData);
        failed++;
      }
    } catch (err) {
      console.error(">>> TEST 2 FAILED with exception ❌", err);
      failed++;
    }

    console.log("==========================================");
    console.log(`FINAL RESULTS: ${passed} PASSED, ${failed} FAILED`);
    console.log("==========================================");
  } finally {
    console.log("Cleaning up dev server process...");
    killPort(PORT);
  }
}

runLiveTests();
