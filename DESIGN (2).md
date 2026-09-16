---
name: Terminal Precision
colors:
  surface: '#141317'
  surface-dim: '#141317'
  surface-bright: '#3a383d'
  surface-container-lowest: '#0f0e12'
  surface-container-low: '#1c1b1f'
  surface-container: '#201f23'
  surface-container-high: '#2b292e'
  surface-container-highest: '#363439'
  on-surface: '#e6e1e7'
  on-surface-variant: '#c4c6cb'
  inverse-surface: '#e6e1e7'
  inverse-on-surface: '#313034'
  outline: '#8e9195'
  outline-variant: '#44474b'
  surface-tint: '#bdc8d4'
  primary: '#e2edfb'
  on-primary: '#27313b'
  primary-container: '#c6d1de'
  on-primary-container: '#4f5a65'
  inverse-primary: '#55606b'
  secondary: '#e2c0a9'
  on-secondary: '#412c1c'
  secondary-container: '#5a4230'
  on-secondary-container: '#d0af98'
  tertiary: '#ede9ff'
  on-tertiary: '#2f2f40'
  tertiary-container: '#d0cde4'
  on-tertiary-container: '#58566a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d9e4f1'
  primary-fixed-dim: '#bdc8d4'
  on-primary-fixed: '#121d26'
  on-primary-fixed-variant: '#3d4852'
  secondary-fixed: '#ffdcc5'
  secondary-fixed-dim: '#e2c0a9'
  on-secondary-fixed: '#2a1709'
  on-secondary-fixed-variant: '#5a4230'
  tertiary-fixed: '#e3e0f8'
  tertiary-fixed-dim: '#c7c4db'
  on-tertiary-fixed: '#1a1a2b'
  on-tertiary-fixed-variant: '#464558'
  background: '#141317'
  on-background: '#e6e1e7'
  surface-variant: '#363439'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.005em
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: -0.01em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system establishes a high-performance, engineer-first aesthetic engineered specifically for an ambitious Computer Science & AI/ML student. It projects deep technical rigor, intentional restraint, and structural clarity. The target audience includes engineering leads, senior architects, and technical recruiters who value substance, clarity of thought, and signal over noise.

The visual direction draws strictly from **Minimalism** blended with **Modern Technical Utility**:
- Zero decorative distractions: no blurred glassmorphism layers, no gratuitous glow effects, and no abstract floating shapes.
- Purpose-built density and rhythm that evokes modern developer tools (such as modern IDEs, Git interfaces, and technical CLI documentation).
- Purposeful contrast hierarchy: interactive nodes surface instantly, while structural chrome sits back quietly to prioritize code artifacts, system architectures, and engineering impact metrics.

## Colors

The palette is tuned specifically for deep-dark, high-legibility developer workspaces, eliminating eye strain while maximizing signal ratio.

### Palette Architecture
- **Base Canvas (`#F9F4FA`)**: Muted, sophisticated neutral background providing a unique contextual depth.
- **Primary Steel Gray (`#C6D1DE`)**: Used selectively for high-priority interactive states, primary CTAs, active status indicators, and key metrics.
- **Secondary Deep Bronze (`#271507`)**: Reserved for link hovers, active tab highlights, and focused border outlines.
- **Tertiary Dark Muted (`#7F7D92`)**: For supportive highlights, alternate tags, and distinct categorical contrast.
- **Text & Content**:
  - **High-Contrast Primary**: Delivering strong contrast ratios against the background for effortless scanning of technical copy and headers.
  - **Muted Secondary**: Passing WCAG AA standards for secondary metadata, timestamps, tech stack tags, and sub-labels.

## Typography

The typography architecture balances high-efficiency technical prose with structured code syntax:
- **Inter** provides neutral, optical clarity for headlines, narrative explanations of architecture, and core UI controls. Negative tracking is applied systematically at larger sizes to tighten structural lockups.
- **JetBrains Mono** anchors the developer identity: utilized for code snippets, git branches, performance metrics, framework tags, and interface micro-labels. Its strict tabular figures ensure data alignments across grids remain mathematically sound.
- Vertical metrics adhere strictly to a 4px baseline grid to prevent baseline drift across heterogeneous content blocks.

## Layout & Spacing

The layout is constructed around a constrained, high-efficiency container model rather than edge-to-edge sprawl, maximizing reading comprehension.

### Grid & Structure
- **Desktop (1024px and above)**: Max width constrained to `1120px` centered. Standard 12-column fluid grid with `1.5rem` (`24px`) gutters and `2rem` (`32px`) margins. Section padding relies on rhythmic vertical bounds of `4rem` to `6rem` (`space-xl` multipliers).
- **Tablet (768px – 1023px)**: 8-column grid with `1.25rem` gutters and `1.5rem` canvas margins. Side-by-side modules (e.g., project preview alongside architecture notes) compress to single or balanced double column layouts.
- **Mobile (< 768px)**: 4-column grid with `1rem` (`16px`) gutters and margins. Complex data rows break into vertical stacks, while technical metadata tags reflow horizontally with auto-wrapping.

### Spacing Discipline
Layout gaps strictly decouple component padding from grid gutters. `space-xs` and `space-sm` are strictly reserved for internal component padding (badges, buttons, code blocks), `space-md` for content stacks inside cards, and `space-lg` through `space-xl` for element group relationships.

## Elevation & Depth

Visual depth is achieved exclusively through **Tonal Layering** and **Low-Contrast Structural Outlines**. Traditional dropped shadows, colored blurs, and glassmorphism transparency are rejected.

### Depth Hierarchy
- **Base Canvas Level 0**: Foundation viewport, page backgrounds, and deep gutters.
- **Surface Level 1**: Structural cards, resume sections, timeline containers, and code snippet backgrounds. Enclosed by a crisp 1px solid structural border.
- **Surface Level 2**: Interactive items, nested code sub-blocks, hover highlights, table headers, and input controls.
- **Hover & Active States**: On interaction, cards shift their border and background states smoothly with a duration of `150ms ease-out`, without physical displacement or ambient drop shadows.

## Shapes

The interface embraces a disciplined **Soft (Level 1)** geometric standard, reinforcing software precision without clinical harshness:
- Standard interactive elements, inputs, and badges use `0.25rem` (`4px`) radii.
- Outer structural containers, project cards, and code windows use `rounded-lg` (`0.5rem` / `8px`) to visually frame technical work.
- Strict anti-pill policy: chips, badges, and buttons maintain squared, slightly chamfered corner profiles (`4px` to `6px`) to uphold technical authenticity.

## Components

### Buttons
- **Primary**: Background styled in `#C6D1DE`, font `Inter` 14px Semi-Bold, border none, border-radius `4px`, padding `8px 16px`. Hover state shifts background tones accordingly. Focus: solid offset outline.
- **Secondary / Outline**: Background styled in surface tones, border `1px solid`, border-radius `4px`, padding `8px 16px`.
- **Ghost / Link**: Background transparent, text styled in accent tones. Hover: underline with contextual color.

### Chips & Tech Stack Badges
- Display: Monospaced `JetBrains Mono` 12px, font-weight 500.
- Construction: Background structured surfaces, border `1px solid`, padding `2px 8px`, border-radius `4px`.

### Cards & Project Showcases
- Surface: Structured background with a solid `1px` border, radius `8px`, padding `24px`.
- Behavior: Static elevation; on hover, border transitions smoothly over `150ms`. No physical elevation change or scale jumping.

### Code Snippets & Terminal Windows
- Container: Background structured base, border `1px solid`, radius `6px`.
- Header: Minimalist window bar containing branch/file name in `JetBrains Mono` 12px with a muted separator line.
- Content: `JetBrains Mono` 13px, line-height 20px.

### Form Controls & Inputs
- Fields: Background structured base, border `1px solid`, radius `4px`, padding `10px 12px`.
- Focus: Border-color highlighted with clean zero-spread outline.

### Metric & Impact Indicators
- Structure: Tabular numerals in `Inter` 24px Semi-Bold paired with a `JetBrains Mono` 11px uppercase label.
- Indicator dot: `6px` solid circle indicating active status, deployed state, or primary metric validation.