'use client';

import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  ArrowUpRight, 
  CheckCircle2, 
  GraduationCap, 
  Building2, 
  Code2, 
  Eye, 
  X, 
  Layers, 
  FileCheck 
} from 'lucide-react';
import GlassCard, { Github, Linkedin, Twitter } from '@/components/ui/glass-card';

export function ResumeSection() {
  const resumeUrl = "/Ashutosh+Mohanty_Resume-v4(1).pdf";
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    if (!isViewerOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsViewerOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isViewerOpen]);

  return (
    <div className="w-full">
      {/* ================= RESUME OVERVIEW CARD WITH 3D GLASS CARD ================= */}
      <div className="relative bg-[#090909] border border-[#202020] hover:border-[#333333] rounded-2xl p-6 sm:p-10 transition-all duration-300 shadow-2xl max-w-6xl mx-auto overflow-hidden">
        {/* Subtle top ambient glowing line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column (7 cols): Candidate Profile & Verified Credentials */}
          <div className="lg:col-span-7 space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                ATS-Optimized PDF
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Verified Official Release · 2026
              </span>
            </div>

            {/* Candidate Header */}
            <div>
              <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest block mb-1">
                Official Curriculum Vitae
              </span>
              <h3 className="font-hn text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                Ashutosh Mohanty
              </h3>
              <div className="text-sm sm:text-base font-semibold text-emerald-400 mt-1">
                B.Tech — Computer Science &amp; Engineering (AI &amp; ML)
              </div>
              <div className="text-xs font-mono text-neutral-400 mt-0.5">
                GIET University Gunupur · 2025–Present
              </div>
            </div>

            {/* Verified Sections Pill Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#111111] border border-[#1d1d1d] text-xs text-neutral-300">
                <GraduationCap size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Higher Education</div>
                  <div className="text-[11px] text-neutral-400">B.Tech CSE (AI &amp; ML) · GIET University</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#111111] border border-[#1d1d1d] text-xs text-neutral-300">
                <Layers size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Schooling</div>
                  <div className="text-[11px] text-neutral-400">Class 12 (VSV) · Class 10 (Deomali PS)</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#111111] border border-[#1d1d1d] text-xs text-neutral-300">
                <Building2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Industry Internship</div>
                  <div className="text-[11px] text-neutral-400">HAL Koraput Division (Summer Intern)</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#111111] border border-[#1d1d1d] text-xs text-neutral-300">
                <Code2 size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Key Projects</div>
                  <div className="text-[11px] text-neutral-400">Energy Forecasting &bull; Depth Wizard</div>
                </div>
              </div>
            </div>

            {/* Document metadata badge */}
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              <FileCheck size={14} className="text-emerald-400" />
              <span>Ashutosh+Mohanty_Resume-v4(1).pdf &bull; 1 Page ATS Layout</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => setIsViewerOpen(true)}
                id="view-resume-button"
                className="bg-cream hover:bg-white text-black font-mono font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl flex items-center justify-center gap-2.5 shadow-xl hover:shadow-[0_0_30px_rgba(239,238,233,0.25)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Eye size={18} />
                <span>View Resume</span>
              </button>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#131313] hover:bg-[#1c1c1c] text-neutral-200 hover:text-white border border-[#262626] hover:border-[#3d3d3d] font-mono text-xs sm:text-sm px-5 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <ArrowUpRight size={16} />
                <span>Open in New Tab</span>
              </a>
            </div>
          </div>

          {/* Right Column (5 cols): 3D GlassCard Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center pt-6 lg:pt-0 border-t lg:border-t-0 border-[#1c1c1c]">
            <div className="scale-95 sm:scale-100 transition-transform">
              <GlassCard
                title="Curriculum Vitae"
                description="B.Tech Computer Science & Engineering (AI & ML) at GIET University. ATS-compliant technical resume."
                buttonText="View Resume"
                onButtonClick={() => setIsViewerOpen(true)}
                socials={[
                  {
                    icon: Github,
                    delay: "400ms",
                    href: "https://github.com/ashumohanty678-beep",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    delay: "600ms",
                    href: "https://www.linkedin.com/in/ashutosh-mohanty-892867385",
                    label: "LinkedIn",
                  },
                  {
                    icon: Twitter,
                    delay: "800ms",
                    href: "mailto:ashumohanty678@gmail.com",
                    label: "Email",
                  },
                ]}
              />
            </div>
            <span className="text-[11px] font-mono text-neutral-500 mt-4 tracking-wider uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cream/60" />
              Hover for 3D Perspective &bull; Tap to View
            </span>
          </div>

        </div>
      </div>

      {/* ================= MODAL VIEWER (Only displayed when "View Resume" is tapped) ================= */}
      {isViewerOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsViewerOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
        >
          <div 
            className="relative w-full max-w-5xl h-[90vh] bg-[#0b0b0b] border border-[#2a2a2a] rounded-2xl flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Chrome Bar */}
            <div className="bg-[#121212] border-b border-[#222222] px-4 sm:px-6 py-3.5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-neutral-300 pl-2 border-l border-white/10">
                  <FileText size={14} className="text-emerald-400" />
                  <span id="resume-modal-title" className="font-semibold text-white">
                    Ashutosh Mohanty — Resume
                  </span>
                  <span className="text-[10px] text-neutral-500 uppercase px-1.5 py-0.5 rounded bg-white/5">
                    PDF Viewer
                  </span>
                </div>
              </div>

              {/* Modal Right Controls */}
              <div className="flex items-center gap-2">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 transition-colors"
                  title="Open in new window"
                >
                  <ArrowUpRight size={14} />
                  <span className="hidden sm:inline">Open New Tab</span>
                </a>

                <button
                  onClick={() => setIsViewerOpen(false)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-neutral-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
                  title="Close viewer (Esc)"
                  aria-label="Close resume viewer"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Embedded PDF iframe inside the Modal */}
            <div className="relative flex-1 w-full bg-[#0e0e0e] flex items-center justify-center overflow-hidden">
              <iframe
                src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                title="Ashutosh Mohanty Resume PDF"
                className="w-full h-full border-none"
                onError={() => setIframeError(true)}
              />

              {iframeError && (
                <div className="absolute inset-0 bg-[#0e0e0e] flex flex-col items-center justify-center p-6 text-center space-y-4">
                  <FileText size={44} className="text-emerald-400" />
                  <div className="space-y-1">
                    <h4 className="font-hn text-lg font-bold text-white">
                      Document Preview
                    </h4>
                    <p className="text-xs font-mono text-neutral-400 max-w-sm">
                      Your browser has disabled inline PDF rendering. You can view the document directly in a new tab.
                    </p>
                  </div>
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cream text-black font-mono font-bold text-xs px-5 py-2.5 rounded-lg flex items-center gap-2"
                  >
                    <ArrowUpRight size={14} />
                    <span>Open PDF in New Window</span>
                  </a>
                </div>
              )}
            </div>

            {/* Modal Bottom Status Bar */}
            <div className="bg-[#121212] border-t border-[#202020] px-4 sm:px-6 py-2.5 flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 size={13} />
                <span className="text-neutral-300">Verified Official Document</span>
              </span>
              <span className="text-neutral-500 hidden sm:inline">
                Press ESC or click outside to exit viewer
              </span>
              <button
                onClick={() => setIsViewerOpen(false)}
                className="sm:hidden text-neutral-400 hover:text-white"
              >
                Close Viewer
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default ResumeSection;
