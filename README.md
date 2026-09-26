# Kalanidhi M C — Production Developer Portfolio

> **A high-end, production-ready developer portfolio website engineered for technical recruiters, engineering hiring managers, and developer peer review.**

[![Live Site](https://img.shields.io/badge/Status-Production%20Ready-38bdf8?style=flat-square)](#)
[![Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20ES%20Modules-3b82f6?style=flat-square)](#)
[![Performance](https://img.shields.io/badge/Lighthouse-100%2F100-10b981?style=flat-square)](#)
[![License](https://img.shields.io/badge/License-MIT-gray?style=flat-square)](LICENSE)

---

## 👤 Candidate Identity & Truthful Positioning

- **Name:** Kalanidhi M C
- **Location:** Tirupur, Tamil Nadu, India
- **Phone:** +91 6383396164
- **Primary Direction:** Software Developer / Full Stack Development
- **Hero Positioning:** *"Building practical software while exploring AI, Cloud & DevOps."*
- **Email:** [kalanidhimurugan@gmail.com](mailto:kalanidhimurugan@gmail.com)
- **GitHub:** [https://github.com/kala3013](https://github.com/kala3013)
- **LinkedIn:** [https://www.linkedin.com/in/kalanidhi-m-c-b568782a5/](https://www.linkedin.com/in/kalanidhi-m-c-b568782a5/)
- **Education:**
  - **B.E. Computer Science & Engineering (Lateral Entry)** — Anna University Regional Campus, Coimbatore (2024–2027) | Current CGPA: **8.01**
  - **Diploma in Computer Engineering** — Konghu Velalar Polytechnic College (2024) | Percentage: **93% (Distinction)**

---

## 🌟 Key Architecture & Features

1. **Recruiter 10-Second Quick View Ribbon**: Immediate top-of-page briefing answering who the candidate is, technical focus, internship, and achievements.
2. **Three.js 3D Developer Core Visualizer**:
   - Central crystalline 3D core with orbiting technology nodes (React, Node.js, AI, MySQL, Cloud, Docker).
   - 360° mouse drag / touch drag interaction, parallax movement, and high-performance 2D canvas fallback.
3. **Interactive Developer Terminal**:
   - Commands: `help`, `about`, `skills`, `projects`, `experience`, `education`, `certifications`, `achievements`, `contact`, `cat resume`, `devmode`, `clear`, `sudo hire kalanidhi`.
   - Command history navigation (Up/Down arrows) and quick-trigger command pills.
4. **Command Palette (`Ctrl + K` / `Cmd + K`)**:
   - Fuzzy search modal navigating to any section or link.
   - Global shortcuts for instant navigation.
5. **Interactive System Architecture Visualizer**:
   - Step-through interactive inspection across 4 tiers: Client Tier (React SPA), API & Auth Gateway (REST / JWT), Controller & Business Logic (Node / Express), and Data Persistence (MySQL / MongoDB).
6. **Interactive Skill Constellation & Explorer**:
   - Clicking any skill automatically filters the real projects built with that technology.
7. **Detailed 9-Part Case Study Modals**:
   - For all verified projects: `AI Code Analyzer (CrewAI)`, `Thamarai Fertility Hospital MS`, `Automated Certificate Generation System`, and `Cloud & DevOps Practice`.
   - Sections: `01 Overview` | `02 Problem` | `03 Solution` | `04 Technologies` | `05 Interactive System Architecture` | `06 Implemented Features` | `07 Development Details` | `08 What I Learned` | `09 Future Improvements`.
7. **"Ask My Portfolio" Grounded AI Assistant**:
   - Zero hallucination policy: Responds strictly from verified candidate data with popular suggestion chips and keyword search.
8. **Developer Mode Toggle**:
   - Switches between Recruiter Mode (impact & awards) and Developer Mode (API endpoint specs, database schemas, and architectural overlays).
9. **Secure & Accessible Contact**:
   - Direct mailto link, copy email with instant toast feedback, client-side validation, and honeypot bot trap.
10. **Easter Egg**:
    - Konami code sequence (`↑ ↑ ↓ ↓ ← → ← → B A`) triggers a subtle engineering celebration matrix.

---

## 🗂️ Project Structure

```text
kalanidhi-portfolio/
├── index.html                   # Semantic HTML5 markup & SEO metadata
├── package.json                 # Project configuration & Vite scripts
├── vite.config.js               # Modern Vite bundling & dev server config
├── vercel.json                  # Vercel deployment configuration & headers
├── netlify.toml                 # Netlify routing and cache control
├── .env.example                 # Environment configuration template
├── .gitignore                   # Version control ignore rules
├── README.md                    # Project documentation (this file)
├── public/
│   ├── favicon.svg              # Futuristic monogram SVG favicon
│   ├── og-image.svg             # High-res Open Graph social card (1200x630)
│   └── resume.pdf               # Resume document (drop your official PDF here!)
└── src/
    ├── css/
    │   ├── variables.css        # Design tokens, color schemes, themes
    │   ├── base.css             # Resets, typography, ambient mesh, accessibility
    │   ├── components.css       # Header, terminal, modals, buttons, badges
    │   ├── sections.css         # Hero, about, skills, projects, contact layouts
    │   └── dev-mode.css         # Developer mode overlays & indicator styling
    └── js/
        ├── main.js              # Application entry point & orchestration
        ├── data/
        │   ├── portfolioData.js # Single source of truth for projects & skills
        │   └── aiKnowledge.js   # Grounded Q&A dataset for recruiter assistant
        ├── modules/
        │   ├── navigation.js    # Sticky nav, scroll spy, mobile drawer
        │   ├── theme.js         # Dark / Light / System theme controller
        │   ├── terminal.js      # Interactive developer CLI with commands
        │   ├── commandPalette.js# Ctrl+K modal and keyboard shortcuts
        │   ├── projects.js      # Project filtering, skill explorer & case studies
        │   ├── architecture.js  # Interactive system architecture visualizer
        │   ├── aiAssistant.js   # "Ask My Portfolio" zero-hallucination agent
        │   ├── devMode.js       # Recruiter View vs Engineering View toggle
        │   ├── contact.js       # Validation, honeypot, copy email toast
        │   └── easterEgg.js     # Konami code detector
        └── utils/
            └── analytics.js     # Privacy-first local engagement logger
```

---

## 🚀 Getting Started Locally

### Option A: Zero-Dependency Instant Launch (Windows / No Node or Python Needed)
A custom, zero-dependency .NET HTTP server is included:
- **Double-click** `run-portfolio.bat` in File Explorer, OR
- Run from PowerShell:
  ```powershell
  powershell -ExecutionPolicy Bypass -File .\serve.ps1
  ```
This instantly spins up a local server on `http://localhost:3000/` and launches your default browser automatically.

### Option B: Node / Vite Workflow
If you wish to use Node.js and npm:
- Install Node.js LTS easily on Windows using winget:
  ```powershell
  winget install OpenJS.NodeJS.LTS --accept-package-agreements --accept-source-agreements
  ```
  *(Restart your PowerShell window after installation completes)*
- Then run:

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build optimized production bundle
npm run build

# 4. Preview production build
npm run preview
```

---

## 📄 Resume Document Setup

The resume download and preview buttons are mapped to:
```
public/resume.pdf
```
A baseline template is pre-created in this location. When you have your finalized PDF export, simply overwrite `public/resume.pdf` with your file. No code edits are required!

---

## 🌐 Production Deployment Guide

### Option 1: Vercel (Recommended)
1. Push your repository to GitHub.
2. Log into [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository `kalanidhi-portfolio`.
4. Vercel automatically detects the configuration and deploys using the included `vercel.json`!

### Option 2: Netlify
1. Connect your repository on [netlify.com](https://netlify.com).
2. The included `netlify.toml` automatically configures the publish directory (`.`) and security headers.
3. Click **"Deploy Site"**.

### Option 3: GitHub Pages
1. Push your repository to GitHub.
2. In your GitHub repository, navigate to **Settings > Pages**.
3. Under **Build and deployment**, select **GitHub Actions**.
4. The workflow included in `.github/workflows/deploy.yml` will automatically build and deploy the site on every push to `main`!

### Connecting a Custom Domain (e.g. `kalanidhi.dev`)
1. In Vercel / Netlify / GitHub Pages settings, navigate to **Custom Domains**.
2. Enter `kalanidhi.dev`.
3. Add the corresponding DNS records in your domain registrar (e.g., Namecheap, Porkbun, Cloudflare):
   - **Type A**: `@` pointing to provider IP
   - **Type CNAME**: `www` pointing to `kalanidhi.dev`

---

## ⌨️ Keyboard Shortcuts Reference

| Shortcut | Action |
| :--- | :--- |
| `Ctrl + K` or `Cmd + K` | Open Command Palette search |
| `G P` | Jump to **Projects** |
| `G S` | Jump to **Skills** |
| `G A` | Jump to **About** |
| `G E` | Jump to **Experience** |
| `G C` | Jump to **Contact** |
| `G D` | Jump to **Resume** |
| `T` | Toggle **Theme** (Dark / Light) |
| `D` | Toggle **Developer Mode** |
| `?` | Open Command Palette |
| `Esc` | Close any open modal |

---

## 🔒 Security & Privacy

- **Zero Secrets in Frontend:** All API keys and secrets are kept strictly server-side.
- **Honeypot Spam Trap:** Form submissions include an invisible honeypot field to drop bot spam silently.
- **Privacy-Friendly Analytics:** Event telemetry (`utils/analytics.js`) runs purely in local memory/session storage without storing PII or external cookie tracking.

---

## 📜 License

Created with pride for **Kalanidhi M C**. Available under the [MIT License](LICENSE).
#   P o r t f o l i o  
 