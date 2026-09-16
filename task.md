---
theme: Terminal Precision
name: Terminal Precision
project: Ashutosh Mohanty Portfolio
document: Project Tasks & Roadmap Tracker
version: 1.4.0
---

# Project Tasks — Terminal Precision Theme

## Stage 0: Planning & Documentation Alignment (COMPLETED)
- [x] Extract and synchronize editor documentation files to disk.
- [x] Populate theme header (`Terminal Precision`) across all Markdown specifications.
- [x] Build and submit Implementation Plan for user review.

---

## Stage 1: Page structure only (COMPLETED IN REACT)
- [x] Initialize React 19 + Vite tooling (`package.json`, `vite.config.js`, `index.html`, `src/main.jsx`).
- [x] Create `src/App.jsx` section scaffold in strict PRD order.

---

## Stage 2: Visual design (COMPLETED)
- [x] Create `src/index.css` containing the complete Terminal Precision design system tokens.
- [x] Apply visual design styles and classes to the Stage 1 structure in `src/App.jsx`.

---

## Stage 3: Real content (COMPLETED)
- [x] Replace placeholder blocks with real data strictly from `profile.pdf`.

---

## Projects Section Redesign & Code Inspection (COMPLETED)
- [x] Inspected all project repositories/folders added to Desktop:
  - [x] `EnergyForecast` (Source code, `app.py`, `train_model.py`, `database.py`, `.git/config`, `energy.png`)
  - [x] `DepthWizard` (Source code, `app.py`, templates, satellite upload pipeline)
- [x] Extracted real, verified technical features and tech stacks without fabrication.
- [x] Redesigned the Projects section with responsive, engineer-first showcase cards:
  - [x] Terminal window header bar with repo path and active/local status indicator.
  - [x] Technical preview images (`/projects/energy.png` and `/projects/depth_wizard.jpg`).
  - [x] Monospaced tech stack chips.
  - [x] 3–5 bulleted key engineering features.
  - [x] Action buttons (GitHub link for EnergyForecast, local indicator for DepthWizard).
  - [x] Explicit transparency callouts for missing information (missing git remote, local demo).
- [x] Verified build and live rendering on `http://localhost:3000/`.

---

## Stage 4: Components & UI Elements (COMPLETED)
- [x] Styled project showcase cards and buttons.
- [x] Refine navigation and interactive anchor jumps (Automated IntersectionObserver scroll spy across all sections).
- [x] Added Hero Primary Steel CTA, Secondary Outline CTA, and active status indicator.
- [x] Created Terminal Precision button and badge variants (4px radii, 1px border, 150ms transitions).
- [x] Created TerminalCard component with titlebar chrome and branch indicator.

---

## Stage 5: Responsive Verification & Quality Assurance (COMPLETED)
- [x] Mobile responsive layout testing (320px–767px).
- [x] Tablet responsive layout testing (768px–1023px).
- [x] Desktop container alignment (1024px–1120px).
- [x] WCAG AA 4.5:1 contrast compliance check.
- [x] Verified zero console warnings and production build compilation (`npx vite build`).
- [x] Audio player and tubelight navbar collision clearance verified on mobile viewports.