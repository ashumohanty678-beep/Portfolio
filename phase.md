---
theme: Terminal Precision
name: Terminal Precision
project: Ashutosh Mohanty Portfolio
document: Implementation Phases & Workflow Roadmap
version: 1.5.0
current_stage: Stage 5 - Responsive Verification & Quality Assurance (Completed)
---

# Implementation Phases — Terminal Precision Theme

> **Rule of Progression**: Work strictly in designated sequential stages. **Do not move to the next stage until the user explicitly reviews and confirms the current stage.**

---

## Stage 0: Planning & Documentation Alignment (Completed)
- [x] Extract and synchronize unsaved buffers across all markdown documentation files.
- [x] Fill theme headers (`Terminal Precision`) across all markdown specifications.
- [x] Define exact stage boundaries and content reconciliation against `profile.pdf`.
- [x] User confirmed transition to React.

---

## Stage 1: Page structure only (Completed in React)
- [x] Section scaffold in PRD sequence (Hero, About, Skills, Projects, Education, Achievements, Contact).
- [x] Headings and placeholder blocks only.
- [x] No styling, no content, no components.

---

## Stage 2: Visual design (Completed)
- [x] Applied Terminal Precision visual design system from `design.md`.
- [x] Typography: `Inter` and `JetBrains Mono` from Google Fonts.
- [x] Palette: `#141317` surface, `#201f23` container, `#44474b` outlines.
- [x] Retained placeholder blocks only.

---

## Stage 3: Real content (Completed — Awaiting Confirmation)
- **Scope**: Replaced placeholder blocks with real data strictly from `profile.pdf`.
- **Rules Followed**:
  - **Used ONLY content attached in `profile.pdf`**.
  - **Missing sections**: Projects and Achievements are missing from `profile.pdf`. Per explicit user instruction, both sections were **left completely empty** without any filler text.
  - **Zero filler text**: No fake statistics, fabricated projects, or outside claims.
- **Deliverable**: Populated React webpage with verified content for Hero, About, Skills, Education, and Contact; clean empty scaffolds for Projects and Achievements.
- **Gate**: Stop and request user review and confirmation before advancing to Stage 4.

---

## Stage 4: Components & UI Elements (Completed)
- **Scope**: Flesh out component-level details specified in `design.md`:
  - [x] Buttons (Primary steel CTA, secondary outline, ghost links, 150ms transitions).
  - [x] Chips & Badges (Monospaced JetBrains Mono tags with 4px radii).
  - [x] Card & window frames (TerminalCard chrome with branch/titlebar, 1px border, 8px radii).
  - [x] Metric and impact indicator dots (6px active indicator circle: Seeking Software Dev Internship).
  - [x] Interactive navigation refinement (Automated scroll spy with IntersectionObserver across all sections, smooth anchor jumps).
- **Gate**: Stop and request user review and confirmation before advancing to Stage 5.

---

## Stage 5: Responsive Verification & Quality Assurance (Completed)
- **Scope**: Rigorous multi-viewport and accessibility audit:
  - [x] Mobile (320px–767px), Tablet (768px–1023px), and Desktop (1024px+).
  - [x] Accessibility check: WCAG AA compliance (4.5:1 minimum contrast ratio).
  - [x] Navigation & anchor link verification with `scroll-margin-top` header clearance.
  - [x] Mobile collision prevention between floating tubelight navbar and background music player.
  - [x] Final polish, zero console errors, and production build readiness (`npx vite build`).