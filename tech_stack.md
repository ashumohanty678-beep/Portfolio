---
theme: Terminal Precision
name: Terminal Precision
project: Ashutosh Mohanty Portfolio
document: Technology Stack Specification
version: 1.1.0
framework: React + Vite
---

# Technology Stack Specification — Terminal Precision Theme

## 1. Core Architecture
- **Framework**: React 19 (SPA powered by Vite)
- **Structure**: Semantic React JSX markup (`<main>`, `<section>`, headings)
- **Styling**: Vanilla CSS3 using custom CSS variables (Design Tokens) matching `design.md` (to be introduced in Phase 2)
- **Interactivity**: React hooks & state for UI behavior
- **No heavy external UI libraries or CSS frameworks**: Zero Tailwind or Bootstrap overhead to ensure precise 1:1 compliance with the custom `design.md` tokens.

## 2. Typography & Assets
- **Headlines & Body Font**: `Inter` (weights: 400, 500, 600, 700) loaded via Google Fonts
- **Code, Metrics & Badges Font**: `JetBrains Mono` (weights: 400, 500) loaded via Google Fonts
- **Icons**: Clean inline SVG icons (GitHub, LinkedIn, Mail, Terminal, External Link)

## 3. Theme & Styling Tokens (Phase 2)
- **Theme**: Terminal Precision
- **Base Surface**: `#141317`
- **Surface Containers**: `#1c1b1f`, `#201f23`, `#2b292e`
- **Primary Accent**: `#C6D1DE` (Steel Gray CTA) / `#E2EDFB` (Highlight)
- **Secondary Accent**: `#E2C0A9` / `#5A4230` (Warm Bronze highlight/border)
- **Border**: `1px solid #44474b`
- **Radii**: `4px` (buttons, chips), `8px` (cards, containers)
- **Grid / Breakpoints**:
  - Desktop: Centered `1120px` max-width, 12-column grid
  - Tablet: 768px – 1023px, 8-column grid
  - Mobile: < 768px, 4-column grid, fluid vertical stack

## 4. Local Development & Tooling
- **Build Tool**: Vite (`npm run dev`, `npm run build`)
- **Structure**:
  - `index.html` (Vite HTML host entry)
  - `src/main.jsx` (React root mount)
  - `src/App.jsx` (Section scaffold / page)