# 🚀 Moh. Syaiful Anam — Portfolio Website

> **AI-Assisted Web Developer & Software Tester**  
> *Crafting high-performance websites, rapid prototypes, and rock-solid software — accelerated by AI, validated by rigorous testing.*

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://siapaajaboleh888.github.io/PORTOFOLIO_1/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

## 🌐 Live Preview

- **URL:** [https://siapaajaboleh888.github.io/PORTOFOLIO_1/](https://siapaajaboleh888.github.io/PORTOFOLIO_1/)
- **Repository:** [https://github.com/siapaajaboleh888/PORTOFOLIO_1](https://github.com/siapaajaboleh888/PORTOFOLIO_1)

---

## ✨ Features & Highlights

- **⚡ Interactive 3D Particle Canvas:** Custom particle constellation system that responds to cursor movements, dynamic density based on viewport size, and automatically throttles on low-power or `prefers-reduced-motion` settings.
- **📁 Real Project Showcase & Case Studies:**
  - Real projects including *E-Modul PAI Interaktif*, *Sistem Antrean Klinik Digital*, *Portal Berita Desa*, *Dashboard UMKM*, and *Automated QA Testing Suite*.
  - Category filters (*All, Web App, Frontend, QA & Testing, Dashboard*).
  - Detailed case study modal containing problem statement, solution, tech stack, key results, and live demo links.
- **🛠️ Service Packages & Transparent Offerings:** Clear scopes, deliverables, timelines, and tier-based services suitable for international and local freelance clients (Upwork, Fiverr, LinkedIn).
- **🔄 AI-Accelerated Workflow:** Visualizes the 5-stage development cycle: *Prompt Engineering & Spec -> Rapid Prototyping -> AI-Assisted Implementation -> Automated QA & Edge Case Testing -> Production Deployment*.
- **📬 Multi-Channel Contact & Inquiry System:**
  - Built-in form validation with client-side feedback.
  - Automatic `mailto:` template generator with subject and formatted message body.
  - Direct WhatsApp quick-message integration.
  - Upwork, LinkedIn, and GitHub profile connections.
- **🎨 Modern Dark Aesthetic:** Built with a handcrafted CSS token system (deep navy, electric blue, violet glow, glassmorphism backdrop filters) without heavy CSS frameworks, achieving ultra-fast loading times.
- **📱 Responsive & Accessible (A11y):** Keyboard navigation support (Esc to close modal, focus trap), screen-reader friendly semantic elements, and mobile-first responsive layout.
- **🚀 Automated CI/CD:** Ready-to-go GitHub Actions workflow (`.github/workflows/deploy.yml`) for instant deployment on every push to `main`.

---

## 🛠️ Tech Stack

| Domain | Technologies |
|---|---|
| **Core Framework** | React 19, TypeScript |
| **Bundler & Tooling** | Vite 8, Oxlint |
| **Styling & UI** | Vanilla CSS Design Tokens, Modern Glassmorphism, CSS Grid & Flexbox |
| **Canvas & Graphics** | Native HTML5 Canvas 2D / Vector Particle Physics |
| **Icons** | Lucide React |
| **Deployment** | GitHub Pages via GitHub Actions CI/CD |

---

## 📂 Project Structure

```text
portofolio-1/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.svg             # Modern gradient SVG favicon
│   └── icons.svg               # SVG asset definitions
├── src/
│   ├── components/
│   │   ├── About.tsx & .css        # Profile, tech stack, and background
│   │   ├── Contact.tsx & .css      # Interactive contact form & social links
│   │   ├── Footer.tsx & .css       # Navigation links and copyright
│   │   ├── Hero.tsx & .css         # Hero banner, CTA, and stats counter
│   │   ├── HeroCanvas.tsx          # 3D interactive particle constellation
│   │   ├── Navbar.tsx & .css       # Sticky blur navigation and mobile drawer
│   │   ├── Process.tsx & .css      # AI workflow visualization steps
│   │   ├── ProjectModal.tsx & .css # Detailed case study modal popup
│   │   ├── Projects.tsx & .css     # Filterable projects grid
│   │   └── Services.tsx & .css     # Service packages & pricing cards
│   ├── data/
│   │   ├── projects.ts         # Portfolio projects dataset
│   │   └── services.ts         # Freelance services dataset
│   ├── App.tsx & App.css       # Root application layout
│   ├── index.css               # Global theme tokens, typography, utilities
│   └── main.tsx                # React DOM mount entrypoint
├── index.html                  # HTML5 template with complete SEO meta tags
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript compiler options
└── vite.config.ts              # Vite configuration with base path
```

---

## 💻 Getting Started Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18+ or 20+ recommended)
- [npm](https://www.npmjs.com/) (bundled with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/siapaajaboleh888/portofolio-1.git
   cd portofolio-1
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173/portofolio-1/](http://localhost:5173/portofolio-1/) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The production-ready output will be compiled into the `dist/` directory.

5. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## ⚙️ Customization Guide

### 1. Update Personal & Contact Info
- **Profile Bio & Stats:** Open `src/components/Hero.tsx` and `src/components/About.tsx`.
- **Contact Details (Email & WhatsApp):** Open `src/components/Contact.tsx` and update the constants:
  ```ts
  const CONTACT_EMAIL = 'your-email@example.com';
  const WHATSAPP_NUMBER = '6281234567890';
  ```

### 2. Update Projects & Case Studies
Open `src/data/projects.ts` to add, remove, or modify your portfolio items, case studies, technologies, and live demo links.

### 3. Update Service Packages
Open `src/data/services.ts` to customize your offerings, deliverables, and estimated timelines.

### 4. Repository Base Path for GitHub Pages
In `vite.config.ts`, ensure `base` matches your GitHub repository name:
```ts
export default defineConfig({
  plugins: [react()],
  base: '/<your-repo-name>/', // e.g., '/portofolio-1/'
})
```
*(If deploying to a custom domain or `<username>.github.io`, set `base: '/'`)*

---

## 🚀 GitHub Pages Deployment Steps

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete modern AI freelancer portfolio"
   git branch -M main
   git remote add origin https://github.com/siapaajaboleh888/portofolio-1.git
   git push -u origin main
   ```

2. Enable GitHub Pages:
   - Go to your repository on GitHub.
   - Click **Settings** > **Pages** (under Code and automation).
   - In the **Build and deployment** section, under **Source**, select:
     👉 **GitHub Actions**.

3. The automated workflow `.github/workflows/deploy.yml` will automatically build and publish your site! You can monitor the progress under the **Actions** tab.

---

## 📄 License

This project is open-source under the [MIT License](LICENSE). Feel free to customize and use it for your own portfolio!

---

*Crafted with passion & code by [Moh. Syaiful Anam](https://github.com/siapaajaboleh888)*
