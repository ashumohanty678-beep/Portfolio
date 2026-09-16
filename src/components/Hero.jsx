import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Resume', href: '#resume' },
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/ashumohanty678-beep', external: true },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ashutosh-mohanty-892867385', external: true },
    { name: 'Contact', href: '#contact', external: false },
  ];

  return (
    <section
      id="hero"
      className="relative h-[100dvh] w-full overflow-hidden bg-[#faf9f6] dark:bg-transparent text-[#111111] dark:text-cream select-none transition-colors duration-300"
    >
      {/* 1. Background Layer */}
      <div className="absolute inset-0 h-full w-full bg-[#faf9f6] dark:bg-transparent transition-colors duration-300" />

      {/* 2. Marquee Name Track (z-10) */}
      <div className="absolute inset-x-0 top-[16vh] sm:top-[14vh] z-10 overflow-hidden anim-fade-up delay-marquee">
        <div className="marquee-track flex w-max whitespace-nowrap font-hn text-[16vh] sm:text-[26vh] leading-none text-[#111111] dark:text-cream transition-colors duration-300">
          <span className="pr-[8vw]">
            Ashutosh Mohanty&nbsp;
          </span>
          <span className="pr-[8vw]">
            Ashutosh Mohanty&nbsp;
          </span>
        </div>
      </div>

      {/* 3. Horizontal Rule (z-10) */}
      <div className="absolute inset-x-6 sm:inset-x-10 bottom-[5.5rem] sm:bottom-28 z-10 h-0.5 bg-[#111111] dark:bg-cream anim-line transition-colors duration-300" />

      {/* 4. Front Portrait Cutout (z-20) - Above Marquee, Pointer-Events None */}
      <img
        src="/images/bg.png"
        alt="Portrait"
        className="absolute inset-x-0 bottom-0 z-20 mx-auto h-[62vh] sm:h-[78vh] w-auto max-w-none object-contain object-bottom pointer-events-none anim-rise-in"
      />

      {/* 5. Header (z-30) */}
      <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 sm:px-10 sm:pt-8">
        {/* Brand / Logo */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="font-hn text-lg tracking-wide text-[#111111] dark:text-cream transition-opacity duration-300 hover:opacity-60 anim-fade-up delay-brand"
          >
            Ashutosh
          </a>
        </div>

        {/* Desktop Right Cluster (Hidden on Mobile) */}
        <div className="hidden sm:flex items-center gap-10 lg:gap-16 font-hn">
          {/* Year */}
          <span className="text-sm text-[#111111] dark:text-cream anim-fade-up delay-year">
            2026
          </span>

          {/* Nav Links Column */}
          <nav className="flex flex-col gap-0.5 text-sm text-[#111111] dark:text-cream">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-opacity duration-300 hover:opacity-60 anim-fade-up delay-nav-${idx}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links Column */}
          <div className="flex flex-col gap-0.5 text-sm text-[#111111] dark:text-cream">
            {socialLinks.map((social, idx) => (
              <a
                key={social.name}
                href={social.href}
                target={social.external ? '_blank' : undefined}
                rel={social.external ? 'noopener noreferrer' : undefined}
                className={`transition-opacity duration-300 hover:opacity-60 anim-fade-up delay-soc-${idx}`}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Controls (sm:hidden) (z-50) */}
        <div className="sm:hidden z-50 flex items-center gap-3">
          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 focus:outline-none"
          >
            <span
              className={`h-0.5 w-6 bg-[#111111] dark:bg-cream transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                isMenuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-[#111111] dark:bg-cream transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-[#111111] dark:bg-cream transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                isMenuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* 6. Footer (z-30 / sm:z-10) */}
      <footer className="absolute inset-x-0 bottom-0 z-30 sm:z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-4 px-6 pb-5 sm:px-10 sm:pb-8 text-xs sm:text-sm leading-relaxed font-hn text-[#111111] dark:text-cream">
        {/* Footer Left: Student Identity & Verified Active Indicator */}
        <div className="flex flex-col anim-fade-up delay-footer-l">
          <div className="flex items-center gap-2 mb-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-mono text-[10px] tracking-wider uppercase text-emerald-600 dark:text-emerald-400 font-semibold">
              Seeking Software Dev Internship
            </span>
          </div>
          <span className="font-medium">B.Tech Computer Science Engineering • AI &amp; ML</span>
          <span className="text-neutral-500 dark:text-neutral-400 text-xs font-mono">
            Core Foundation: Python • SQL • C
          </span>
        </div>

        {/* Footer Center: Primary Steel CTA & Secondary Outline CTA (Stage 4) */}
        <div className="hidden sm:flex items-center gap-3 anim-fade-up delay-footer-l">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-[#c6d1de] hover:bg-[#e2edfb] text-[#27313b] font-semibold text-xs font-mono px-4 py-2 rounded-[4px] shadow-sm transition-colors duration-150"
          >
            <span>View Projects</span>
            <span className="text-sm">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-[#44474b] bg-[#201f23] hover:bg-[#2b292e] text-[#e6e1e7] font-mono text-xs px-4 py-2 rounded-[4px] transition-colors duration-150"
          >
            <span>Let's Connect</span>
          </a>
        </div>

        {/* Footer Right: Academic Institution */}
        <div className="hidden md:flex flex-col text-right anim-fade-up delay-footer-r">
          <span className="font-medium">GIET University</span>
          <span>Gunupur, Odisha, India</span>
          <span className="text-neutral-500 dark:text-neutral-400 text-xs font-mono">2025 – 2029</span>
        </div>
      </footer>

      {/* 7. Mobile Drawer (sm:hidden, z-40) */}
      <div
        className={`sm:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        className={`sm:hidden fixed right-0 top-0 bottom-0 z-40 w-[80%] max-w-sm bg-[#faf9f6] dark:bg-[#141414] text-[#111111] dark:text-cream px-8 py-10 transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] flex flex-col justify-between ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button with Lucide X */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close Navigation Menu"
          className={`absolute right-6 top-6 text-[#111111] dark:text-cream transition-all duration-300 ${
            isMenuOpen ? 'rotate-0 opacity-100 delay-300' : 'rotate-90 opacity-0'
          }`}
        >
          <X size={26} strokeWidth={1.5} />
        </button>

        {/* Top: Site Index */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <span
              className={`block uppercase tracking-[0.2em] text-neutral-500 dark:text-cream/50 text-xs font-mono font-medium transition-all duration-500 ${
                isMenuOpen ? 'translate-y-0 opacity-100 delay-[250ms]' : 'translate-y-4 opacity-0'
              }`}
            >
              Site Index
            </span>
          </div>

          <nav className="flex flex-col gap-4">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                style={{ transitionDelay: `${300 + idx * 80}ms` }}
                className={`font-hn text-3xl sm:text-4xl text-[#111111] dark:text-cream transition-all duration-500 hover:opacity-60 ${
                  isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Drawer Quick Action CTAs */}
          <div className="flex flex-col gap-2.5 mt-6">
            <a
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#c6d1de] text-[#27313b] font-semibold text-xs font-mono px-4 py-2.5 rounded-[4px] shadow-sm transition-colors duration-150"
            >
              <span>View Projects</span>
              <span>→</span>
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 border border-[#44474b] bg-[#201f23] text-[#e6e1e7] font-mono text-xs px-4 py-2.5 rounded-[4px] transition-colors duration-150"
            >
              <span>Let's Connect</span>
            </a>
          </div>
        </div>

        {/* Bottom: Find Me */}
        <div className="mb-4">
          <span
            className={`block uppercase tracking-[0.2em] text-neutral-500 dark:text-cream/50 text-xs font-mono font-medium mb-4 transition-all duration-500 ${
              isMenuOpen ? 'translate-y-0 opacity-100 delay-[500ms]' : 'translate-y-4 opacity-0'
            }`}
          >
            Find Me
          </span>
          <div className="flex flex-wrap gap-4 text-sm font-hn">
            {socialLinks.map((social, idx) => (
              <a
                key={social.name}
                href={social.href}
                target={social.external ? '_blank' : undefined}
                rel={social.external ? 'noopener noreferrer' : undefined}
                onClick={() => setIsMenuOpen(false)}
                style={{ transitionDelay: `${550 + idx * 60}ms` }}
                className={`text-[#111111] dark:text-cream transition-all duration-500 hover:opacity-60 ${
                  isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
