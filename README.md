# 💳 Review Card - Permanent Google Review QR Redirect System

A simple, production-ready website for managing and redirecting Google Review QR Cards.

---

## 🌟 Main Concept & How It Works

```
┌─────────────────┐       Scans QR        ┌───────────────────────────┐       Instant 307       ┌────────────────────────────┐
│ Physical Card   │  ─────────────────►   │ Your Website Domain       │  ────────────────────►  │ Shop's Google Review Page  │
│ (QR: /001)      │                       │ https://your-app.vercel/001│       Redirect          │ https://g.page/r/shop-a... │
└─────────────────┘                       └───────────────────────────┘                         └────────────────────────────┘
```

1. **Physical Card**: Printed with permanent URL `https://MY-SITE.vercel.app/001`.
2. **Your Website**: Receives visitor at `/001`, looks up destination in `config/destinations.js`.
3. **Instant Redirect**: Sends customer directly to the assigned shop's Google Review form.
4. **Why QR never needs reprinting**: If the shop changes or updates their review link, you ONLY edit `config/destinations.js` and redeploy. The physical printed QR image stays the exact same!

---

## 📁 Folder Structure

```
Review Cards/
├── app/
│   ├── layout.tsx             # Root HTML layout & fonts
│   ├── page.tsx               # Professional landing page
│   ├── globals.css            # Styling & Tailwind CSS setup
│   ├── qr-tools/
│   │   └── page.tsx           # Web-based visual QR Code generator & downloader
│   └── [id]/
│       └── page.tsx           # Dynamic 307 Redirect & "QR Code Not Found" fallback
├── config/
│   └── destinations.js        # 🌟 THE ONLY FILE YOU EDIT TO CHANGE REVIEW LINKS!
├── scripts/
│   └── generate-qr.js         # CLI script to generate QR-001.png ... QR-010.png
├── public/
├── package.json               # Dependencies & scripts
├── tailwind.config.ts         # Tailwind design tokens
├── postcss.config.mjs
├── tsconfig.json
├── next.config.mjs
└── README.md                  # Complete documentation & guide
```

---

## 🚀 Quick Start (Local Setup)

### 1. Install Dependencies
Open terminal in project directory:
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Testing Redirects Locally

- **Test Card 001**: Visit `http://localhost:3000/001` → Redirects to configured destination.
- **Test Card 002**: Visit `http://localhost:3000/002` → Redirects to configured destination.
- **Test Unassigned Card**: Visit `http://localhost:3000/004` → Shows polite "Card Not Activated Yet" page.
- **Test Invalid Card**: Visit `http://localhost:3000/011` → Shows "QR Code Not Found" error page.

---

## 📝 How to Assign or Change a Shop's Google Review Link

Open `config/destinations.js` in your editor:

```javascript
export const destinations = {
  // Replace the link for card 001:
  "001": "https://g.page/r/example-shop-a-review",

  // Replace the link for card 002:
  "002": "https://maps.app.goo.gl/example-shop-b-review",

  // Leave empty for unassigned cards:
  "003": "",
  "004": "",
  ...
};
```

1. Edit the destination URL in `config/destinations.js`.
2. Save the file.
3. Push to GitHub or redeploy on Vercel.
4. **Done!** Card 001 will now redirect to the new Google Review page instantly.

---

## 🖨️ Generating the 10 QR PNG Files for Printing

You have **two easy methods** to generate high-resolution PNG images (`QR-001.png` to `QR-010.png`):

### Option A: Web Generator Tool (Easiest)
1. Run `npm run dev` and open `http://localhost:3000/qr-tools`.
2. Enter your live Vercel website URL (e.g. `https://my-site.vercel.app`).
3. Click **Download All (10 PNGs)** or download individual cards.

### Option B: Command Line Script
Run in terminal:
```bash
node scripts/generate-qr.js https://my-site.vercel.app
```
or
```bash
npm run generate-qrs
```
The PNG files will be saved in the `qr-codes/` directory ready to send to your card printer!

---

## ☁️ Vercel Deployment Instructions

### Method 1: Deploying via GitHub (Recommended)
1. Initialize git & commit your project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Review Card app"
   ```
2. Create a new repository on [GitHub](https://github.com/new) and push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/review-cards.git
   git branch -M main
   git push -u origin main
   ```
3. Go to [Vercel.com](https://vercel.com) and click **"Add New" → "Project"**.
4. Select your `review-cards` repository from GitHub.
5. Click **Deploy** (No environment variables or custom build settings required).
6. Copy your live Vercel URL (e.g. `https://review-cards-xyz.vercel.app`).

### Method 2: Deploying via Vercel CLI
1. Install Vercel CLI: `npm i -g vercel`
2. Run command:
   ```bash
   vercel
   ```
3. Follow prompts to deploy directly from terminal.

---

## 🔮 Future Expansion (Database, Admin Dashboard, Analytics)

When you scale beyond 10 cards and want a database:
1. Connect **Supabase** or **PostgreSQL**.
2. Replace `config/destinations.js` lookup in `app/[id]/page.tsx` with a database query:
   ```typescript
   const card = await db.select().from(cards).where(eq(cards.id, formattedId));
   if (card?.destinationUrl) {
     redirect(card.destinationUrl);
   }
   ```
3. Add Admin Login (`/admin`) to assign cards directly from a web UI without code changes.

---

© Review Card System • Fast, reliable & production-ready.
