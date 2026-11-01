# SVM IT Solution - AI Lead-Generation Chatbot

This project includes an intelligent, brand-aligned AI lead-generation chatbot widget for [SVM IT Solution](https://svmitsolution.com), powered by the official `@google/genai` SDK and Gemini Function Calling.

---

## 🚀 Setup Instructions

### 1. Environment Configuration

Create a `.env.local` file in the project root (see `.env.example` for reference):

```bash
# Gemini AI Configuration
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-2.5-flash

# Google Apps Script Web App Configuration (Lead forwarding to Google Sheets & Email)
APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
APPS_SCRIPT_SECRET=your_apps_script_shared_secret
```

> **Security Note:** `.env.local` is listed in `.gitignore` and is never committed. The Gemini API key is strictly accessed on the server inside `/api/chat` and never exposed to the client.

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the floating chatbot widget at the bottom-right of every page.

---

## 🛠️ Architecture & Features

1. **Floating Chatbot Widget (`components/Chatbot/index.tsx`)**:
   - Matches SVM IT Solution brand colors (deep blue gradients), typography, and dark/light modes.
   - Initial greeting message with 4 quick-reply topic chips: *SEO Services*, *Web Development*, *Get a Quote*, *Talk to team*.
   - Responsive design (smooth popup on desktop, adaptive modal on mobile).
   - Typing indicator, auto-scroll, Enter to send, character count counter.
   - Fallback button & direct link to WhatsApp (`+91 6388744723`).
   - Accessible (`aria-labels`, focus management, ESC key to dismiss).
   - Mounted globally in `app/layout.tsx`.

2. **Server-Side API Route (`app/api/chat/route.ts`)**:
   - Built with the official `@google/genai` SDK.
   - **Gemini Function Calling (`save_lead`)**: Automatically triggers lead submission once required details (*Name*, *Email*, *Service*, *Project Details*) are collected and confirmed by the visitor.
   - **Google Apps Script Forwarding**: Sends lead payload with `secret: APPS_SCRIPT_SECRET` and `redirect: "follow"` to automatically append to Google Sheets and dispatch notifications.
   - **Security & Validation**:
     - Email and phone regex format checks.
     - Max message length (1,000 chars) and max history window (20 messages).
     - In-memory rate limiting (15 requests/min per IP).
     - Hidden honeypot field protection against spambots.
   - **Language Support**: Seamlessly communicates in English, Hindi, and Hinglish.

---

## 🧪 Testing

You can run the automated test suite against the live Next.js development server to verify normal Q&A, lead collection flow, and error handling:

```bash
node scripts/test-live-server.mjs
```

### Test Coverage:
1. **Normal Q&A**: Asks about SVM IT Solution services and validates concise, professional replies.
2. **Full Lead Flow**: Sends user details, simulates confirmation, triggers Gemini's `save_lead` function call, and confirms success message (`"Thank you! Our team will contact you shortly."`).
3. **Error Handling**: Verifies graceful user messaging and fallback WhatsApp/Email contact info when destination URLs encounter connection or HTTP errors.

