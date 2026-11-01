// scripts/test-chatbot.mjs
import { POST } from "../app/api/chat/route.js";

// Helper to create mock NextRequest
function createMockRequest(body, headers = {}) {
  const url = "http://localhost:3000/api/chat";
  return new Request(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  });
}

async function runTests() {
  console.log("==========================================");
  console.log("   SVM IT SOLUTION CHATBOT API TEST SUITE  ");
  console.log("==========================================\n");

  let passed = 0;
  let failed = 0;

  // Test 1: Missing API Key check
  console.log("--- Test 1: Missing GEMINI_API_KEY Check ---");
  delete process.env.GEMINI_API_KEY;
  try {
    const req = createMockRequest({ message: "Hello" });
    const res = await POST(req);
    const data = await res.json();
    if (res.status === 500 && data.error.includes("GEMINI_API_KEY")) {
      console.log("✅ Passed: Correctly returned 500 when GEMINI_API_KEY is not configured.");
      passed++;
    } else {
      console.error("❌ Failed:", res.status, data);
      failed++;
    }
  } catch (err) {
    console.error("❌ Failed with exception:", err);
    failed++;
  }

  // Set mock key for remaining tests
  process.env.GEMINI_API_KEY = "mock-test-key";

  // Test 2: Normal Q&A
  console.log("\n--- Test 2: Normal Q&A ---");
  try {
    const req = createMockRequest({
      message: "What services do you offer?",
      history: [],
    });
    const res = await POST(req);
    const data = await res.json();
    if (res.status === 200 && data.reply && typeof data.reply === "string") {
      console.log("✅ Passed: Normal Q&A received response:", data.reply);
      passed++;
    } else {
      console.error("❌ Failed:", res.status, data);
      failed++;
    }
  } catch (err) {
    console.error("❌ Failed with exception:", err);
    failed++;
  }

  // Test 3: Full Lead Flow with Apps Script Simulation (valid URL or mock)
  console.log("\n--- Test 3: Full Lead Flow (save_lead) ---");
  try {
    delete process.env.APPS_SCRIPT_URL; // Simulate success when unconfigured
    const req = createMockRequest({
      message: "Yes, please submit it now.",
      history: [
        { role: "user", text: "My name is Test User and email is test@svmitsolution.com" },
        { role: "model", text: "Got it! Which service are you interested in?" },
        { role: "user", text: "Web Development, budget is $500 - $800." },
        { role: "model", text: "Summary: Name: Test User, Email: test@svmitsolution.com, Service: Web Development. Should I submit this?" },
      ],
    });
    const res = await POST(req);
    const data = await res.json();
    if (
      res.status === 200 &&
      data.leadSaved === true &&
      data.reply.includes("Thank you! Our team will contact you shortly")
    ) {
      console.log("✅ Passed: Lead successfully saved and user notified:", data.reply);
      passed++;
    } else {
      console.error("❌ Failed:", res.status, data);
      failed++;
    }
  } catch (err) {
    console.error("❌ Failed with exception:", err);
    failed++;
  }

  // Test 4: Error Case - Wrong APPS_SCRIPT_URL (Network/HTTP error handling)
  console.log("\n--- Test 4: Error Case (Wrong APPS_SCRIPT_URL) ---");
  try {
    process.env.APPS_SCRIPT_URL = "https://invalid-script-url-for-testing-12345.com/exec";
    const req = createMockRequest({
      message: "Yes, submit it.",
      history: [
        { role: "user", text: "My name is Test User and email is test@svmitsolution.com" },
        { role: "model", text: "Summary: Name: Test User, Email: test@svmitsolution.com. Should I submit this?" },
      ],
    });
    const res = await POST(req);
    const data = await res.json();
    if (
      res.status === 200 &&
      data.leadSaved === false &&
      data.reply.includes("WhatsApp at +91 6388744723")
    ) {
      console.log("✅ Passed: Handled Apps Script error gracefully with fallback contact details:");
      console.log("   Reply:", data.reply);
      passed++;
    } else {
      console.error("❌ Failed:", res.status, data);
      failed++;
    }
  } catch (err) {
    console.error("❌ Failed with exception:", err);
    failed++;
  }

  // Test 5: Honeypot Spam Protection
  console.log("\n--- Test 5: Honeypot Protection ---");
  try {
    const req = createMockRequest({
      message: "Buy cheap crypto now",
      honeypot: "http://spambot-site.com",
    });
    const res = await POST(req);
    const data = await res.json();
    if (res.status === 200 && data.reply.includes("acknowledged")) {
      console.log("✅ Passed: Spambot request neutralized by honeypot check.");
      passed++;
    } else {
      console.error("❌ Failed:", res.status, data);
      failed++;
    }
  } catch (err) {
    console.error("❌ Failed with exception:", err);
    failed++;
  }

  // Test 6: Message length validation (> 1000 characters)
  console.log("\n--- Test 6: Max Message Length Validation (> 1000 chars) ---");
  try {
    const longMessage = "a".repeat(1005);
    const req = createMockRequest({ message: longMessage });
    const res = await POST(req);
    const data = await res.json();
    if (res.status === 400 && data.error.includes("1000 characters")) {
      console.log("✅ Passed: Correctly rejected message exceeding 1000 characters.");
      passed++;
    } else {
      console.error("❌ Failed:", res.status, data);
      failed++;
    }
  } catch (err) {
    console.error("❌ Failed with exception:", err);
    failed++;
  }

  console.log("\n==========================================");
  console.log(`TEST SUMMARY: ${passed} Passed, ${failed} Failed`);
  console.log("==========================================");

  if (failed > 0) {
    process.exit(1);
  }
}

runTests();

