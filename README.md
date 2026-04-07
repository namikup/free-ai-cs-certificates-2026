# 🎓 Free AI & CS Certificates 2026

A curated, sortable comparison dashboard of the **15 best free AI and Computer Science certificates** you can earn in 2026 — with durations, issuers, levels, topics, and direct LinkedIn badge links.

🔗 **Live demo:** https://www.perplexity.ai/computer/a/free-ai-cs-certificates-2026-1kYLdDf5S0irZcufoSF4jg

---

## ⚡ Quickest way to use it

**No installation needed.** Just click the live demo link above — it opens directly in your browser.

> Works on desktop, tablet, and mobile. No sign-up required.

---

## 💻 Run it on your own computer

If you want to run it locally (offline or for your own edits), follow these steps:

### Step 1 — Download the project

**Option A: Download as ZIP (easiest, no Git needed)**
1. Click the green **`< > Code`** button at the top of this page
2. Click **Download ZIP**
3. Unzip the downloaded file — you'll get a folder called `free-ai-cs-certificates-2026-master`

**Option B: Clone with Git (if you have Git installed)**
```bash
git clone https://github.com/namikup/free-ai-cs-certificates-2026.git
cd free-ai-cs-certificates-2026
```

---

### Step 2 — Open in browser

**Simplest method — double-click the file:**
1. Open the downloaded/cloned folder
2. Find `index.html`
3. Double-click it — it opens directly in your default browser ✅

> ⚠️ Some browsers block local fonts when opening a file directly. If the fonts look off, use the server method below.

---

**Better method — run a local server:**

Pick whichever tool you already have installed:

<details>
<summary>🐍 Using Python (most computers have this)</summary>

Check if Python is installed — open your terminal and run:
```bash
python3 --version
```
If you see a version number, you're good. Then:
```bash
# Navigate into the project folder
cd free-ai-cs-certificates-2026

# Start the server
python3 -m http.server 8000
```
Open your browser and go to: **http://localhost:8000**

To stop the server, press `Ctrl + C` in the terminal.
</details>

<details>
<summary>🟢 Using Node.js / npx</summary>

Check if Node is installed:
```bash
node --version
```
If you see a version number:
```bash
cd free-ai-cs-certificates-2026
npx serve .
```
Open the URL shown in your terminal (usually **http://localhost:3000**).

To stop the server, press `Ctrl + C`.
</details>

<details>
<summary>🆚 Using VS Code (Live Server extension)</summary>

1. Open the project folder in VS Code
2. Install the **Live Server** extension (search "Live Server" in the Extensions panel)
3. Right-click `index.html` → **Open with Live Server**

Your browser will open automatically at **http://127.0.0.1:5500**
</details>

---

## ✨ Dashboard features

| Feature | How to use |
|---|---|
| **Sort** | Click any column header (Certificate, Issuer, Duration) — click again to reverse |
| **Filter by Level** | Click **Beginner** or **Intermediate** chips in the filter bar |
| **Filter by Topic** | Click **AI**, **ML**, **CS**, or **Security** chips |
| **Search** | Type in the search box — filters across name, issuer, and description |
| **Enroll** | Click the teal **Enroll** button to go directly to the course page |
| **LinkedIn** | Click the **in** button to open the course's LinkedIn share page |
| **Dark / Light mode** | Click the moon/sun icon in the top-right corner |

---

## 📋 The 15 Certificates

| # | Certificate | Issuer | Duration | Level | Cert Type |
|---|---|---|---|---|---|
| 1 | Generative AI Explained | NVIDIA | ~2 hrs | Beginner | Free Cert of Competency |
| 2 | Databricks Gen AI Fundamentals | Databricks | ~2 hrs | Beginner | Free Certificate |
| 3 | OpenAI Academy | OpenAI | ~4 hrs | Beginner | Free Certificate |
| 4 | IBM AI Fundamentals | IBM SkillsBuild | ~6 hrs | Beginner | Free Credly Badge |
| 5 | Google AI Essentials | Google | 6–10 hrs | Beginner | Free Certificate |
| 6 | Google Prompting Essentials | Google | ~6 hrs | Beginner | Free Certificate |
| 7 | AI For Everyone | DeepLearning.AI | ~7 hrs | Beginner | Free Certificate |
| 8 | Google Cloud Gen AI Fundamentals | Google Cloud | ~8 hrs | Beginner | Free Skill Badge |
| 9 | IBM Gen AI: Prompt Engineering | IBM | ~9 hrs | Beginner | Free Certificate |
| 10 | Secure AI/ML-Driven Software Dev | Linux Foundation | ~10 hrs | Intermediate | Free Verifiable Badge |
| 11 | Microsoft AI Skills | Microsoft | 10–15 hrs | Beginner | Free Digital Badges |
| 12 | AWS ML & AI Fundamentals | Amazon AWS | 1–4 weeks | Beginner | Audit Free* |
| 13 | Hugging Face LLM Course | Hugging Face | ~30 hrs | Intermediate | Free Certificate |
| 14 | Harvard CS50's AI with Python | Harvard University | 7 weeks | Intermediate | Free CS50 Certificate |
| 15 | Harvard CS50x: Intro to CS | Harvard University | ~10 weeks | Beginner | Free CS50 Certificate |

> \* "Audit free" — course content is free, formal certificate may require payment or financial aid.

---

## ➕ Add a certificate (Contributing)

1. Fork this repo
2. Open `index.html` and find the `CERTS` array inside the `<script>` tag
3. Add a new entry following this format:

```js
{
  id: 16,
  name: "Certificate Name",
  issuer: "Issuer Name",
  issuer_color: "#hexcolor",   // brand color of the issuer
  duration: "~X hrs",
  duration_hrs: X,             // number only, used for sorting
  level: "Beginner",           // "Beginner" or "Intermediate"
  topic: "AI Fundamentals",    // used for topic filter chip
  cert_type: "free",           // "free" or "audit"
  cert_label: "Free Certificate",
  url: "https://course-link.com",
  linkedin_url: "https://linkedin-or-course-link.com",
  description: "One-line summary of what you learn"
}
```

4. Open a pull request — all contributions are welcome!

---

## 🗂 Project structure

```
free-ai-cs-certificates-2026/
└── index.html    ← everything lives here (HTML + CSS + JS, no build step)
└── README.md
```

---

## 🎨 Tech stack

- **HTML5** — semantic markup
- **CSS3** — custom design tokens, fluid type scale, dark/light mode
- **Vanilla JS** — sort, filter, search, theme toggle (no frameworks)
- **Fonts** — [Cabinet Grotesk](https://www.fontshare.com/fonts/cabinet-grotesk) + [Satoshi](https://www.fontshare.com/fonts/satoshi) via Fontshare CDN

---

## 📝 License

MIT — free to use, fork, and share.

---

*Verified as of April 2026. Certificate availability may change — always confirm directly with the issuer.*
