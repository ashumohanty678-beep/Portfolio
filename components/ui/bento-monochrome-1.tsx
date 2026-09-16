import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

const STYLE_ID = "bento3-animations";

export interface FlowItem {
  id: string;
  variant: "orbit" | "relay" | "wave" | "spark" | "loop" | string;
  meta: string;
  title: string;
  description: string;
  statLabel: string;
  statValue: string;
}

export interface MetricItem {
  label: string;
  value: string;
}

export interface BentoSectionProps {
  flows?: FlowItem[];
  metrics?: MetricItem[];
  pillText?: string;
  pillSubtext?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  bio?: string;
}

const defaultFlows: FlowItem[] = [
  {
    id: "01",
    variant: "orbit",
    meta: "Core Foundation",
    title: "Algorithmic & Systems Programming",
    description:
      "Writing optimized algorithmic logic and low-level routines in C and Python. Developing foundational computational structures with high execution efficiency, modularity, and memory discipline.",
    statLabel: "Languages",
    statValue: "Python & C",
  },
  {
    id: "02",
    variant: "relay",
    meta: "Data Engineering",
    title: "Relational Schemas & Data Pipelines",
    description:
      "Architecting normalized database schemas, complex SQL queries, and robust data persistence layers using SQLite, Pandas, and structured backend manipulation routines.",
    statLabel: "Database Engine",
    statValue: "SQL & SQLite",
  },
  {
    id: "03",
    variant: "wave",
    meta: "Machine Learning",
    title: "Predictive Regressors & Analytics",
    description:
      "Designing end-to-end predictive machine learning workflows with Scikit-Learn. Trained Random Forest regression models to forecast residential electricity demand with high reliability (EnergyForecast).",
    statLabel: "Primary Models",
    statValue: "Scikit-Learn",
  },
  {
    id: "04",
    variant: "spark",
    meta: "Computer Vision",
    title: "Satellite Terrain & Vision Pipelines",
    description:
      "Engineering ingestion pipelines for high-resolution satellite imagery (.tif, .tiff, .png) and preparing PyTorch environments for topographic depth estimation (DepthWizard).",
    statLabel: "Framework",
    statValue: "PyTorch & CV",
  },
  {
    id: "05",
    variant: "loop",
    meta: "Career Objective",
    title: "Software Engineering & Internship",
    description:
      "Actively seeking an internship in software development based in Gunupur or remote to contribute to production environments, write testable code, and build intelligent machine learning solutions.",
    statLabel: "Status",
    statValue: "Actively Seeking",
  },
];

const defaultMetrics: MetricItem[] = [
  { label: "Degree Program", value: "B.Tech CSE (AI & ML)" },
  { label: "Academic Standing", value: "2nd Year (2025–2029)" },
  { label: "University", value: "GIET University Gunupur" },
  { label: "Location", value: "Gunupur, Odisha, India" },
];

const palettes = {
  dark: {
    surface: "bg-transparent text-cream",
    heading: "text-white",
    muted: "text-neutral-400",
    capsule: "bg-white/5 border-white/10 text-white/80 backdrop-blur-md",
    card: "bg-[#08091a]/60 backdrop-blur-xl",
    cardBorder: "border-white/10",
    metric: "bg-white/5 border-white/10 text-white/70 backdrop-blur-md",
    metricValue: "text-white",
    metricLabel: "text-neutral-400",
    headingAccent: "bg-white/15",
    toggleSurface: "bg-white/10",
    toggle: "border-white/15 text-white",
    button: "border-white/15 text-white hover:border-white/40 hover:bg-white/10",
    gridColor: "rgba(255, 255, 255, 0.04)",
    overlay:
      "linear-gradient(180deg, rgba(4, 5, 18, 0.65) 0%, rgba(6, 7, 24, 0.35) 40%, rgba(17, 7, 25, 0.25) 75%, rgba(9, 5, 18, 0.65) 100%), radial-gradient(circle at 80% 20%, rgba(255, 62, 145, 0.12), transparent 45%), radial-gradient(circle at 20% 70%, rgba(75, 116, 255, 0.1), transparent 45%)",
    focusGlow: "rgba(255, 106, 170, 0.25)",
    sectionGlow: "rgba(255, 106, 170, 0.12)",
    iconStroke: "#ffc4e2",
    iconTrail: "rgba(255, 106, 170, 0.35)",
  },
  light: {
    surface: "bg-[#faf9f6] text-neutral-900",
    heading: "text-neutral-900",
    muted: "text-neutral-600",
    capsule: "bg-white/80 border-neutral-200 text-neutral-700 shadow-sm",
    card: "bg-white/85 border-neutral-200 shadow-sm",
    cardBorder: "border-neutral-200/80",
    metric: "bg-neutral-100/80 border-neutral-200/90 text-neutral-600 shadow-sm",
    metricValue: "text-neutral-900",
    metricLabel: "text-neutral-500",
    headingAccent: "bg-neutral-900/10",
    toggleSurface: "bg-white",
    toggle: "border-neutral-300 text-neutral-900",
    button: "border-neutral-300 text-neutral-900 bg-white/80 hover:border-neutral-500 hover:bg-neutral-100 shadow-sm",
    gridColor: "rgba(17, 17, 17, 0.08)",
    overlay:
      "linear-gradient(180deg, rgba(250,249,246,0.96) 0%, rgba(245,244,239,0.68) 45%, rgba(250,249,246,0.96) 100%)",
    focusGlow: "rgba(15, 23, 42, 0.12)",
    sectionGlow: "rgba(15, 23, 42, 0.04)",
    iconStroke: "#111827",
    iconTrail: "rgba(30, 41, 59, 0.42)",
  },
};

const getRootTheme = () => {
  if (typeof document === "undefined") {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "dark";
  }

  const root = document.documentElement;
  if (root.classList.contains("dark")) return "dark";
  if (root.dataset?.theme === "dark" || root.getAttribute("data-theme") === "dark") return "dark";
  if (root.classList.contains("light")) return "light";
  return "dark";
};

export function Bento3Section({
  flows = defaultFlows,
  metrics = defaultMetrics,
  pillText = "02 // ABOUT • ASHUTOSH MOHANTY",
  pillSubtext = "GIET UNIVERSITY GUNUPUR",
  badge = "B.Tech CSE (AI & ML) • 2nd Year",
  title = "About",
  subtitle = "Engineering intelligent systems with principled code, data pipelines, and applied machine learning.",
  bio = "2nd-year B.Tech student in Computer Science Engineering (Artificial Intelligence and Machine Learning) at GIET University Gunupur (August 2025 – August 2029). Skilled with Python, SQL, and C language, currently seeking an internship in software development based in Gunupur, Odisha, India.",
}: BentoSectionProps) {
  let themeContext: { theme: string; toggleTheme: () => void } | undefined;
  try {
    themeContext = useTheme();
  } catch {
    // fallback if context is not present
  }
  const [theme, setTheme] = useState(() => themeContext?.theme || getRootTheme());

  useEffect(() => {
    if (themeContext?.theme) {
      setTheme(themeContext.theme);
    }
  }, [themeContext?.theme]);

  const [introReady, setIntroReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const [sectionMouse, setSectionMouse] = useState({ x: -1000, y: -1000 });
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.innerHTML = `
      @keyframes bento3-card-in {
        0% { opacity: 0; transform: translate3d(0, 28px, 0) scale(0.97); filter: blur(12px); }
        60% { filter: blur(0); }
        100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); filter: blur(0); }
      }
      @keyframes bento3-flare {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes bento3-dash {
        0% { transform: translateX(-25%); opacity: 0; }
        30% { opacity: 1; }
        70% { opacity: 1; }
        100% { transform: translateX(25%); opacity: 0; }
      }
      @keyframes bento3-wave {
        0% { transform: translateX(-45%); }
        100% { transform: translateX(45%); }
      }
      @keyframes bento3-pulse {
        0% { transform: scale(0.8); opacity: 0.6; }
        70% { opacity: 0.05; }
        100% { transform: scale(1.35); opacity: 0; }
      }
      .bento3-root {
        padding-inline: 0;
      }
      .bento3-section {
        gap: clamp(2.5rem, 5vw, 4.5rem);
        padding-inline: clamp(1.25rem, 5vw, 3.75rem);
        width: min(100%, 72rem);
      }
      .bento3-grid {
        gap: clamp(1.25rem, 4vw, 2rem);
      }
      .bento3-metrics {
        gap: clamp(1rem, 3vw, 1.5rem);
        padding: clamp(1.25rem, 4vw, 2.5rem);
      }
      .bento3-footer {
        gap: clamp(1.15rem, 3.5vw, 2.4rem);
      }
      .bento3-hero-pill {
        flex-wrap: wrap;
      }
      .bento3-hero-pill span:last-child {
        flex-shrink: 0;
      }
      .bento3-card {
        opacity: 0;
        transform: translate3d(0, 32px, 0);
        filter: blur(14px);
        transition: border-color 400ms ease, background 400ms ease, padding 300ms ease, transform 300ms ease;
        padding: clamp(1.2rem, 3vw, 2.2rem);
        border-radius: clamp(1.25rem, 3vw, 24px);
      }
      .bento3-card:hover {
        transform: translateY(-2px);
      }
      .bento3-card[data-visible="true"] {
        animation: bento3-card-in 760ms cubic-bezier(0.22, 0.68, 0, 1) forwards;
        animation-delay: var(--bento3-delay, 0ms);
      }
      .bento3-icon {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: clamp(2.75rem, 6vw, 3.25rem);
        width: clamp(2.75rem, 6vw, 3.25rem);
        border-radius: 9999px;
        overflow: hidden;
        isolation: isolate;
      }
      .bento3-icon::before,
      .bento3-icon::after {
        content: "";
        position: absolute;
        inset: 4px;
        border-radius: inherit;
        border: 1px solid var(--bento3-icon-trail);
        opacity: 0.45;
      }
      .bento3-icon::after {
        inset: 10px;
        opacity: 0.2;
      }
      .bento3-icon[data-variant="orbit"] span {
        position: absolute;
        height: 140%;
        width: 3px;
        background: linear-gradient(180deg, transparent, var(--bento3-icon-stroke) 55%, transparent);
        transform-origin: center;
        animation: bento3-flare 8s linear infinite;
      }
      .bento3-icon[data-variant="relay"] span {
        position: absolute;
        inset: 18px;
        border-top: 1px solid var(--bento3-icon-stroke);
        border-bottom: 1px solid var(--bento3-icon-stroke);
        transform: skewX(-15deg);
      }
      .bento3-icon[data-variant="relay"] span::before,
      .bento3-icon[data-variant="relay"] span::after {
        content: "";
        position: absolute;
        height: 1px;
        width: 120%;
        left: -10%;
        background: linear-gradient(90deg, transparent, var(--bento3-icon-stroke), transparent);
        animation: bento3-dash 2.6s ease-in-out infinite;
      }
      .bento3-icon[data-variant="relay"] span::after {
        top: 70%;
        animation-delay: 0.9s;
      }
      .bento3-icon[data-variant="wave"] span {
        position: absolute;
        inset: 12px;
        border-radius: 999px;
        overflow: hidden;
      }
      .bento3-icon[data-variant="wave"] span::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(90deg, transparent 5%, var(--bento3-icon-stroke) 50%, transparent 95%);
        transform: translateX(-45%);
        animation: bento3-wave 2.8s ease-in-out infinite alternate;
      }
      .bento3-icon[data-variant="spark"] span {
        position: absolute;
        inset: 0;
      }
      .bento3-icon[data-variant="spark"] span::before,
      .bento3-icon[data-variant="spark"] span::after {
        content: "";
        position: absolute;
        inset: 12px;
        border-radius: 9999px;
        border: 1px solid var(--bento3-icon-stroke);
        opacity: 0.28;
        animation: bento3-pulse 2.8s ease-out infinite;
      }
      .bento3-icon[data-variant="spark"] span::after {
        animation-delay: 0.9s;
      }
      .bento3-icon[data-variant="loop"] span {
        position: absolute;
        inset: 12px;
      }
      .bento3-icon[data-variant="loop"] span::before,
      .bento3-icon[data-variant="loop"] span::after {
        content: "";
        position: absolute;
        height: 1px;
        width: 100%;
        top: 50%;
        left: 0;
        background: linear-gradient(90deg, transparent, var(--bento3-icon-stroke), transparent);
      }
      .bento3-icon[data-variant="loop"] span::before {
        transform: rotate(90deg);
      }
      .bento3-icon[data-variant="loop"] span::after {
        opacity: 0.4;
        transform: rotate(0deg);
      }
      @media (max-width: 1024px) {
        .bento3-section {
          gap: clamp(2.5rem, 6vw, 4rem);
          padding-inline: clamp(1.1rem, 6vw, 3rem);
        }
        .bento3-metrics {
          border-radius: 24px;
        }
      }
      @media (max-width: 768px) {
        .bento3-section {
          gap: clamp(2rem, 7vw, 3.5rem);
          padding-inline: clamp(1rem, 8vw, 2.25rem);
          padding-block: clamp(3rem, 10vw, 4rem);
        }
        .bento3-card {
          padding: clamp(1rem, 5vw, 1.6rem);
          border-radius: 20px;
        }
        .bento3-grid {
          gap: clamp(1rem, 6vw, 1.75rem);
        }
        .bento3-metrics {
          padding: clamp(1rem, 6vw, 1.8rem);
          gap: clamp(0.75rem, 4vw, 1.25rem);
        }
        .bento3-footer {
          gap: clamp(1rem, 6vw, 1.75rem);
        }
      }
      @media (max-width: 640px) {
        .bento3-section {
          gap: clamp(1.75rem, 8vw, 3rem);
        }
        .bento3-hero-pill {
          justify-content: center;
          text-align: center;
        }
        .bento3-hero-pill span:last-child {
          width: 100%;
          text-align: center;
        }
        .bento3-card {
          padding: clamp(0.85rem, 6vw, 1.4rem);
        }
        .bento3-icon {
          height: clamp(2.25rem, 8vw, 2.75rem);
          width: clamp(2.25rem, 8vw, 2.75rem);
        }
        .bento3-metrics div {
          padding-block: clamp(1rem, 6vw, 1.5rem);
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      if (style.parentNode) style.remove();
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      setIntroReady(true);
      setVisible(true);
      return;
    }
    const frame = window.requestAnimationFrame(() => setIntroReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!sectionRef.current || typeof window === "undefined") return;
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const currentTheme = themeContext?.theme || theme;
  const palette = useMemo(() => palettes[currentTheme as keyof typeof palettes] || palettes.dark, [currentTheme]);

  const containerStyle = useMemo(
    () => ({
      "--bento3-grid-color": palette.gridColor,
      "--bento3-focus-glow": palette.focusGlow,
      "--bento3-icon-stroke": palette.iconStroke,
      "--bento3-icon-trail": palette.iconTrail,
    } as React.CSSProperties),
    [palette.gridColor, palette.focusGlow, palette.iconStroke, palette.iconTrail]
  );

  const handleSectionMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSectionMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleSectionMouseLeave = () => {
    setSectionMouse({ x: -1000, y: -1000 });
  };

  useEffect(() => {
    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail && (customEvent.detail === "dark" || customEvent.detail === "light")) {
        setTheme(customEvent.detail);
      }
    };
    window.addEventListener("theme-change", handleThemeChange);
    return () => window.removeEventListener("theme-change", handleThemeChange);
  }, []);

  const toggleTheme = () => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    const next = root.classList.contains("dark") ? "light" : "dark";
    root.classList.toggle("dark", next === "dark");
    root.classList.toggle("light", next === "light");
    root.setAttribute("data-theme", next);
    try {
      window.localStorage?.setItem("bento-theme", next);
      window.localStorage?.setItem("portfolio-theme", next);
    } catch (_err) {
      /* ignore */
    }
    setTheme(next);
    window.dispatchEvent(new CustomEvent("theme-change", { detail: next }));
  };

  return (
    <div
      id="about"
      className={`bento3-root relative w-full overflow-hidden transition-colors duration-700 border-b border-neutral-200 dark:border-[#262626] ${palette.surface}`}
      style={containerStyle}
      onMouseMove={handleSectionMouseMove}
      onMouseLeave={handleSectionMouseLeave}
    >
      {/* 1. Subtle Repeating Grid Texture */}
      <div
        className="absolute inset-0 -z-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--bento3-grid-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--bento3-grid-color) 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      {/* 2. Interactive Ambient Section Glow following the cursor across the entire section */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-500"
        style={{
          background: `radial-gradient(700px circle at ${sectionMouse.x}px ${sectionMouse.y}px, ${palette.sectionGlow}, transparent 70%)`,
        }}
      />

      {/* 3. Gradient Vignette Overlay */}
      <div className="absolute inset-0 -z-10 pointer-events-none" style={{ background: palette.overlay }} />

      {/* 4. Main Content Container */}
      <section
        ref={sectionRef}
        className={`bento3-section relative z-10 mx-auto flex max-w-6xl flex-col gap-12 py-20 sm:py-28 md:gap-16 ${
          introReady && visible ? "" : "opacity-0"
        }`}
      >
        {/* Top Header Pill Badge */}
        <div
          className={`bento3-hero-pill mx-auto flex w-full max-w-2xl items-center justify-between gap-4 rounded-full border px-6 py-3 text-[11px] font-mono uppercase tracking-[0.3em] sm:tracking-[0.45em] transition-all duration-700 shadow-sm ${
            introReady ? "opacity-100 translate-y-0" : "translate-y-5 opacity-0"
          } ${palette.capsule}`}
        >
          <span className="relative flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-current shadow-[0_0_0_6px_rgba(255,255,255,0.06)]" />
            {pillText}
          </span>
          <span className="font-medium text-[10px] sm:text-[11px] tracking-[0.2em]">{pillSubtext}</span>
        </div>

        {/* Section Header & Bio Overview */}
        <header className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full px-3 py-1 font-mono text-xs uppercase tracking-[0.3em] text-current">
              <span className={`h-1 w-12 rounded-full ${palette.headingAccent}`} />
              {badge}
            </div>
            
            <h2 className={`font-hn text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl ${palette.heading}`}>
              {title}
            </h2>

            <p className="text-base sm:text-lg font-medium leading-snug text-neutral-800 dark:text-cream">
              {subtitle}
            </p>

            {/* Authentic Bio Paragraph with glowing callout border */}
            <div className={`mt-4 rounded-2xl border p-5 sm:p-6 backdrop-blur-sm ${palette.cardBorder} ${palette.card}`}>
              <p className={`text-sm sm:text-base leading-relaxed ${palette.muted}`}>
                {bio}
              </p>
            </div>
          </div>
        </header>

        {/* Bento Grid: 5 Verified Engineering Focus Cards */}
        <div className="bento3-grid grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 xl:gap-8">
          {flows.map((flow, index) => (
            <FlowCard key={flow.id} flow={flow} palette={palette} index={index} visible={visible} />
          ))}
        </div>

        {/* Verified Quick Facts & Academic Metrics Bar */}
        <div className={`bento3-metrics grid grid-cols-1 gap-4 rounded-[26px] border p-6 sm:grid-cols-2 lg:grid-cols-4 ${palette.cardBorder} ${palette.card}`}>
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className={`rounded-[20px] border px-5 py-5 text-xs font-mono uppercase tracking-[0.2em] text-center transition-colors ${palette.metric}`}
            >
              <span className={`block text-[10px] uppercase font-mono tracking-[0.2em] ${palette.metricLabel}`}>
                {metric.label}
              </span>
              <span className="mt-2 block font-sans text-sm sm:text-base font-semibold tracking-normal text-neutral-900 dark:text-white">
                {metric.value}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Status & Action Footer */}
        <footer className="bento3-footer flex flex-col gap-5 border-t border-dashed border-neutral-300 dark:border-white/20 pt-8 text-sm md:flex-row md:items-center md:justify-between">
          <div className={`flex flex-col gap-1.5 ${palette.muted}`}>
            <span className="font-mono text-xs uppercase tracking-[0.3em]">Career Status</span>
            <span className="text-sm sm:text-base font-medium text-neutral-900 dark:text-cream">
              Actively seeking Software Development &amp; AI/ML Internships.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#projects"
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${palette.button}`}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="font-mono text-xs uppercase tracking-[0.3em] underline-offset-4 transition hover:underline text-neutral-900 dark:text-cream"
            >
              Contact Me &rarr;
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
}

interface FlowCardProps {
  flow: FlowItem;
  palette: typeof palettes.dark;
  index: number;
  visible: boolean;
}

function FlowCard({ flow, palette, index, visible }: FlowCardProps) {
  const cardRef = useRef<HTMLElement | null>(null);

  const setGlow = (event: React.MouseEvent<HTMLElement>) => {
    const target = cardRef.current;
    if (!target) return;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--bento3-x", `${event.clientX - rect.left}px`);
    target.style.setProperty("--bento3-y", `${event.clientY - rect.top}px`);
  };

  const clearGlow = () => {
    const target = cardRef.current;
    if (!target) return;
    target.style.removeProperty("--bento3-x");
    target.style.removeProperty("--bento3-y");
  };

  return (
    <article
      ref={cardRef}
      className={`bento3-card group relative overflow-hidden rounded-[24px] border ${palette.cardBorder} ${palette.card} p-6 sm:p-8 transition-colors duration-500`}
      data-visible={visible}
      style={{ "--bento3-delay": `${index * 80}ms` } as React.CSSProperties}
      onMouseMove={setGlow}
      onMouseLeave={clearGlow}
    >
      <div className="relative flex flex-col gap-5 lg:flex-row lg:items-start">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center font-mono text-xs uppercase tracking-[0.3em] opacity-40 sm:h-12 sm:w-12 text-neutral-900 dark:text-white">
          {flow.id}
        </div>
        <div className="flex flex-col gap-3.5 lg:flex-1">
          <span className={`inline-flex w-fit items-center rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.35em] ${palette.cardBorder} ${palette.muted}`}>
            {flow.meta}
          </span>
          <h3 className={`font-hn text-xl font-semibold leading-tight sm:text-2xl ${palette.heading}`}>{flow.title}</h3>
          <p className={`text-sm leading-relaxed ${palette.muted}`}>{flow.description}</p>
        </div>
        <div className={`mt-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border ${palette.cardBorder} ${palette.card} sm:h-14 sm:w-14 lg:ml-auto lg:mt-0 lg:h-16 lg:w-16 shadow-inner`}>
          <AnimatedIcon variant={flow.variant} />
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-2 font-mono text-[0.65rem] uppercase tracking-[0.25em] opacity-80 sm:text-xs sm:tracking-[0.3em] sm:flex-row sm:items-center sm:justify-between border-t border-neutral-200/80 dark:border-white/10 pt-4 text-neutral-600 dark:text-neutral-400">
        <span className="text-center sm:text-left">{flow.statLabel}</span>
        <span className="text-center font-semibold text-neutral-900 dark:text-white sm:text-right">{flow.statValue}</span>
      </div>
      
      {/* Individual Card Interactive Concentrated Cursor Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(220px circle at var(--bento3-x, 50%) var(--bento3-y, 50%), var(--bento3-focus-glow), transparent 70%)`,
        }}
      />
    </article>
  );
}

function AnimatedIcon({ variant }: { variant: string }) {
  return (
    <span className="bento3-icon" data-variant={variant}>
      <span />
    </span>
  );
}

export default Bento3Section;
