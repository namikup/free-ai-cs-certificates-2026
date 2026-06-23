# 🎓 Free AI & CS Certificates 2026

A curated, sortable comparison dashboard of the **28 best free AI and Computer Science certificates** you can earn in 2026 — with durations, issuers, levels, topics, and direct LinkedIn badge links. Includes a **Systematic Learning Roadmap** based on a comprehensive 2026 no-cost credentials research report.

🔗 **Live demo:** https://namikup.github.io/free-ai-cs-certificates-2026/

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
| **Systematic Roadmap** | Click the **🗺️ Systematic Roadmap** toggle above the table to switch to a 4-stage visual learning pathway |

---

## 📋 The Certificates

There are currently **28** certificates tracked in this project. 
To view the full sortable list, including topics, descriptions, and direct enrollment links, please visit the [Live Dashboard](https://namikup.github.io/free-ai-cs-certificates-2026/).

Alternatively, you can view the raw data schema directly in [`data/certificates.json`](data/certificates.json).

> \* "Audit free" items mean the course content is free, but a formal certificate may require payment or financial aid.

---

## ➕ Add a certificate (Contributing)

1. Fork this repo
2. Open `data/certificates.json`
3. Add a new JSON object to the array following this format:

```json
{
  "id": 29,
  "name": "Certificate Name",
  "issuer": "Issuer Name",
  "issuer_color": "#hexcolor",
  "duration": "~X hrs",
  "duration_hrs": 5,
  "level": "Beginner",
  "topic": "AI Fundamentals",
  "cert_type": "free",
  "cert_label": "Free Certificate",
  "url": "https://course-link.com",
  "linkedin_url": "https://linkedin-or-course-link.com",
  "description": "One-line summary of what you learn",
  "stage": 3
}
```

> `stage` is **optional** — only set it (1–4) if this certificate belongs to the Systematic Roadmap pathway. Omit it for certificates that are standalone and not part of the four-stage sequence.

4. Open a pull request — all contributions are welcome!

---

## 🗂 Project structure

```text
free-ai-cs-certificates-2026/
├── index.html               ← Layout and styling (HTML/CSS)
├── js/app.js                ← Dynamic logic (Sort, filter, render)
├── data/certificates.json   ← Database of all certificates
└── README.md
```

---

## 🎨 Tech stack

- **HTML5** — semantic markup
- **CSS3** — custom design tokens, fluid type scale, dark/light mode
- **Vanilla JS** — sort, filter, search, theme toggle (no frameworks)
- **JSON** — decoupled data layer for easy maintenance
- **Fonts** — [Cabinet Grotesk](https://www.fontshare.com/fonts/cabinet-grotesk) + [Satoshi](https://www.fontshare.com/fonts/satoshi) via Fontshare CDN

---

## 📝 License

MIT — free to use, fork, and share.

---

*Verified as of June 2026. Certificate availability may change — always confirm directly with the issuer.*

---

## 🗺️ Systematic Learning Roadmap

The dashboard now features an interactive **4-Stage Systematic Roadmap**, based on the comprehensive research report: *"No-Cost Artificial Intelligence and Computer Science Credentials" (2026)*.

Click the **🗺️ Systematic Roadmap** button above the certificate table to switch from the sortable registry grid to the structured learning pathway.

| Stage | Title | Focus |
|---|---|---|
| **Stage 1** | Foundational Systems & Logic | CS50x, CS50 AI, CS50 SQL — Harvard automated grading |
| **Stage 2** | Cloud Infrastructure & Architecture | AWS Educate Cloud Badging, Pearson VUE voucher pathway |
| **Stage 3** | Data Science & Core ML | IBM Cognitive Class pipelines, Jupyter sandboxes |
| **Stage 4** | Generative AI Integration & Automation | Microsoft Applied Skills, OpenAI Academy, Kaggle Agents |

---

## 📋 Audit & Changelog

This list is actively maintained. Every entry is browser-verified against its official course page before being added.

### Change history

#### v3.0 — 23 June 2026 — Deep Research Audit & Systematic Roadmap
- 🔍 **Technical Audit**: Completed a rigorous, field-by-field comparison of the dashboard against the comprehensive PDF research report *"No-Cost Artificial Intelligence and Computer Science Credentials"* (2026 edition).
- 🗺️ **Systematic Roadmap**: Added an interactive **4-Stage Learning Pathway** toggle. Users can switch between the sortable **Registry Grid** and a visually structured **Systematic Roadmap** (responsive: horizontal columns on desktop, vertical timeline on mobile).
- ✏️ **Data Corrections** applied from the audit:
  - **Generative AI Fundamentals Skill Badge** (Google Cloud): corrected duration from `~8 hrs` → `2 hrs (120 mins)` and direct Credly badge link updated.
  - **OpenAI Academy**: disambiguated from invite-only proctored pilot. Renamed to **OpenAI Academy Course-Completion Series**, corrected issuer to `OpenAI / Gradual`, and updated `cert_label` to `Free Certificate` (no Credly).
  - **Microsoft Applied Skills** (id: `5`): corrected duration from `10–15 hrs` → `2–4 hrs per track` and updated description to include Pearson VUE voucher details.
  - **Harvard CS50 AI** (id: `6`): corrected duration from `7 weeks / ~70 hrs` → `100–180 hrs` and added automated GitHub grading detail.
  - **Harvard CS50x** (id: `7`): corrected duration from `~10 weeks` → `100–180 hrs` and added GitHub grading detail.
  - **Microsoft Applied Skills** tracks (id: `18`, `19`): renamed to include full "Microsoft Applied Skills:" prefix for clarity.
  - **Kaggle 5-Day AI Agents** (id: `17`): renamed to **Kaggle: 5-Day AI Agents Intensive** for clarity.
- ➕ **4 New Certificates** added from the audit's gap analysis:
  - **Harvard CS50's Introduction to Databases with SQL** — Beginner, CS Fundamentals, Stage 1
  - **Google AI Educator Series & Certified Educator Levels 1 & 2** — Beginner, AI Fundamentals
  - **AWS Educate Cloud Badging & Emerging Talent Pearson VUE Voucher Program** — Beginner, CS Fundamentals, Stage 2
  - **Fundamentals of AI & Prompt Engineering for Everyone** (IBM Cognitive Class) — Beginner, AI Fundamentals, Stage 3
- 🏷️ **Stage Metadata** added: 10 certificates annotated with `"stage": 1–4` to power the Systematic Roadmap view without duplication.
- 📊 **Total count**: 24 → **28 certificates**

---

#### v2.0 — 4 May 2026 — Architecture Upgrade & May 2026 Update
- 🚀 **Architecture Refactor**: Decoupled the UI from the data. The `index.html` now uses `fetch()` to load certificates from a dedicated `data/certificates.json` file.
- ⚡️ **Dynamic Stats**: Hero statistics (Total, Beginner, Shortest) now calculate dynamically based on the JSON payload.
- ➕ Added **9 New Certificates** mapped from the May 2026 research audit:
  - **AI Foundations** (OpenAI Academy)
  - **5-Day AI Agents Intensive** (Kaggle)
  - **Create Agents in Copilot Studio** (Microsoft)
  - **Streamline Workflows with AI Chat** (Microsoft)
  - **Agentforce Service Superbadge** (Salesforce)
  - **Cloud Quest: GenAI Practitioner** (AWS)
  - **AI Fundamentals Learning Plan** (IBM SkillsBuild)
  - **Generative AI Explained** (NVIDIA DLI)
  - **Introduction to OpenUSD** (NVIDIA DLI)

---

### How LinkedIn-sharing works per platform
| Platform | Method |
|---|---|
| Kaggle | Direct "Share on LinkedIn" button on your certificate page |
| IBM SkillsBuild | Credly badge → "Add to LinkedIn Profile" button |
| Microsoft Learn | "Add to LinkedIn" button on Applied Skills credential page |
| Harvard CS50 | Certificate URL shareable; add manually to LinkedIn Licenses & Certs |
| Google Cloud | Skill badge page has "Share" → LinkedIn option |
| DeepLearning.AI | Certificate page has LinkedIn share link |
| Hugging Face | Certificate issued; add manually (known LinkedIn auto-upload bug — add URL manually) |
| Databricks | Credly badge → "Add to LinkedIn Profile" button |
| Linux Foundation | Credly badge via OpenSSF → "Add to LinkedIn Profile" |
| Salesforce Trailhead | Earn badge on Trailhead, then add manually via LinkedIn → Add section → Licenses & Certifications |
| Cognitive Class | Certificate issued; add manually via LinkedIn → Licenses & Certifications |
| Elements of AI | Certificate issued by Univ. of Helsinki; add manually to LinkedIn |

---

### Change history

#### v1.3 — 9 April 2026 — Browser-verified cert pass
- ✅ **Kaggle — Intro to Machine Learning**: confirmed `"Hours to earn certificate: 3"`, `"No cost, like all Kaggle Learn Courses"`, direct LinkedIn share button on cert page
- ✅ **Kaggle — Intro to AI Ethics**: confirmed `"Hours to earn certificate: 4"`, same free policy, LinkedIn share confirmed
- ✅ **Salesforce Trailhead — Einstein AI**: confirmed 2 free badges awarded (Responsible Creation of AI + Einstein Bots Basics); corrected duration from `~2 hrs` → `~1.25 hrs`; LinkedIn sharing requires manual add from Trailhead profile
- ✅ **Cognitive Class — Deep Learning Fundamentals**: confirmed `"Certificate Offered"` on course page, `"Enroll for free"` with no paywall; LinkedIn sharing via manual add

#### v1.2 — 9 April 2026 — Coursera paywall sweep
- ❌ Removed **Google AI Essentials** (cert costs $49 on Coursera)
- ❌ Removed **Google Prompting Essentials** (cert costs $49 on Coursera)
- ❌ Removed **IBM Gen AI: Prompt Engineering** (Coursera paywall, financial aid only)
- ❌ Removed **DeepLearning.AI AI For Everyone** (costs $49 for certificate)
- ➕ Added **Kaggle — Intro to Machine Learning** (100% free, LinkedIn direct share)
- ➕ Added **Kaggle — Intro to AI Ethics** (100% free, LinkedIn direct share)
- ➕ Added **Salesforce Trailhead — Einstein AI** (free Trailhead badge)
- ➕ Added **Cognitive Class — Deep Learning Fundamentals** (free cert, IBM Skills Network)

#### v1.1 — 9 April 2026 — Full audit pass
- ❌ Removed **NVIDIA Generative AI Explained** — NVIDIA DLI team confirmed on forums: [this course issues no certificate](https://forums.developer.nvidia.com/t/need-certificate-or-proof-for-completed-generative-ai-explained-course/329255)
- ❌ Removed **OpenAI Academy** — certifications confirmed as not yet live (in pilot phase as of April 2026)
- ➕ Added **Elements of AI** (University of Helsinki) — free cert confirmed
- ➕ Added **DeepLearning.AI ChatGPT Prompt Engineering for Developers** — free on DL.AI platform (short course)
- 🔧 Fixed **Linux Foundation**: wrong course code `LFS118` → `LFEL1012`; corrected duration `~10 hrs` → `~1 hr`
- 🔧 Fixed **Google Prompting Essentials** URL (was pointing to wrong page)

#### v1.0 — 7 April 2026 — Initial release
- 15 AI & CS certificates curated and published
- Dashboard built with sort, filter, search, dark/light mode
- Deployed at https://namikup.github.io/free-ai-cs-certificates-2026/
