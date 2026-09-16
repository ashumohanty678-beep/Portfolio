---
theme: Terminal Precision
name: Terminal Precision
project: Ashutosh Mohanty Portfolio
document: Project Rules & Guidelines
version: 1.0.0
---

# Project Rules — Terminal Precision Theme

## 1. Source of Truth
- Follow `prompt.md` as the primary functional specification.
- Adhere strictly to `design.md` for visual tokens, typography, colors, and layout rules.
- Maintain sequential section scaffold order defined in `prd.md`.
- Never make ungrounded assumptions when requirements are specified.

## 2. Strict Authenticity (Do Not Invent / No Hallucinations)
- Do NOT invent personal information, qualifications, or experience.
- Do NOT invent projects, achievements, skills, testimonials, links, or statistics.
- Use only verified content from `profile.pdf`. If a section lacks content in `profile.pdf` (e.g. Projects or Achievements), leave the section empty and report what is missing — do not fill the gap and do not write filler/lorem ipsum text.

## 3. Code Quality & Standards
- Write clean, modern, semantic HTML5, Vanilla CSS3, and JavaScript.
- Avoid unnecessary frameworks, complex build configurations, or heavy dependencies unless requested.
- Maintain consistent indentation, meaningful class naming, and accessible markup (ARIA attributes, semantic tags).

## 4. Visual & Design Standards
- Strictly apply the **Terminal Precision** design system (`#141317` base, `#201f23` containers, `#C6D1DE` primary steel, `#E2EDFB` electric accents).
- Typography: Inter for headlines and narrative prose; JetBrains Mono for tags, code snippets, metrics, and micro-labels.
- No glassmorphism, no rainbow gradients, no floating decorative blobs, no identical 3-card repetition, and no oversized decorative headings.

## 5. Staged Execution Workflow
- Work strictly in designated sequential stages:
  - **Stage 1**: Page structure only (headings & placeholder blocks only, no styling, no content, no components).
  - **Stage 2**: Visual design (apply colors, typography, spacing, hierarchy from `design.md` to existing structure; no content, no components).
  - **Stage 3**: Real content (replace placeholders with `profile.pdf` content only; leave missing sections empty and report gaps).
  - **Stage 4**: Components & Interactive Polish.
  - **Stage 5**: Responsive & Verification QA.
- **Do not proceed to the next stage until the user explicitly confirms.**
- Always update `phases.md`, `task.md`, and `memory.md` upon stage transitions.
