'use client';

import React from 'react';
import { Timeline, TimelineEntry } from '@/components/ui/timeline';
import { 
  GraduationCap, 
  School, 
  Building, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Sparkles,
  BookOpen
} from 'lucide-react';

export function EducationTimeline() {
  const educationData: TimelineEntry[] = [
    {
      title: "2025 – Present",
      content: (
        <div className="group relative bg-gradient-to-b from-[#0e1411] via-[#090b0a] to-[#070707] border border-emerald-500/30 hover:border-emerald-400/60 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-2xl overflow-hidden">
          {/* Subtle top glowing ambient line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent" />

          <div className="space-y-4">
            {/* Badges & Status */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                Primary Degree
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Currently Pursuing
              </span>
              <span className="text-[11px] font-mono text-neutral-400 bg-white/5 px-2 py-0.5 rounded border border-white/10 flex items-center gap-1">
                <Calendar size={11} />
                <span>Started 2025</span>
              </span>
            </div>

            {/* Title & Degree */}
            <div>
              <h3 className="font-hn text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-cream transition-colors leading-snug">
                B.Tech — Computer Science &amp; Engineering (AI &amp; ML)
              </h3>
              <div className="text-sm sm:text-base font-semibold text-emerald-400/90 mt-1">
                Bachelor of Technology (B.Tech)
              </div>
              <div className="text-xs sm:text-sm font-mono text-neutral-400 mt-0.5">
                Branch: Computer Science &amp; Engineering — Artificial Intelligence &amp; Machine Learning (CSE-AIML)
              </div>
            </div>

            {/* Institution & Location */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono text-neutral-300 pt-1">
              <div className="flex items-center gap-1.5 text-neutral-200">
                <GraduationCap size={15} className="text-emerald-400 flex-shrink-0" />
                <span className="font-semibold text-white">GIET University</span>
              </div>
              <span className="text-neutral-600">&bull;</span>
              <div className="flex items-center gap-1 text-neutral-400">
                <MapPin size={12} />
                <span>Gunupur, Odisha</span>
              </div>
            </div>

            {/* Professional Summary */}
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-2 border-t border-[#1c1c1c]">
              Undergraduate engineering curriculum building computational rigor across core computer science, algorithm design, artificial intelligence frameworks, and machine learning pipelines.
            </p>

            {/* Focus Highlights */}
            <div className="pt-2">
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Artificial Intelligence',
                  'Machine Learning',
                  'Data Structures & Algorithms',
                  'Systems Architecture',
                  'Engineering Mathematics'
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-[#101813] border border-emerald-500/20 text-[11px] font-mono text-neutral-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div className="group relative bg-[#090909] border border-[#222222] hover:border-[#383838] rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl">
          <div className="space-y-4">
            {/* Badges & Status */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-300">
                Higher Secondary
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/25 px-2.5 py-0.5 rounded-full font-medium">
                <CheckCircle2 size={11} className="text-cyan-400" />
                Completed 2025
              </span>
            </div>

            {/* Title & Level */}
            <div>
              <h3 className="font-hn text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cream transition-colors">
                Class 12 — Higher Secondary Education
              </h3>
              <div className="text-sm font-semibold text-neutral-300 mt-1 flex items-center gap-1.5">
                <School size={15} className="text-cyan-400 flex-shrink-0" />
                <span>Vyomayana Samastha Vidyalaya</span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-neutral-400">
              <MapPin size={12} className="text-neutral-500 flex-shrink-0" />
              <span>Sunabeda-2, Koraput, Odisha</span>
            </div>

            {/* Summary */}
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-2 border-t border-[#1c1c1c]">
              Completed higher secondary education establishing core analytical foundations in science and mathematics.
            </p>

            {/* Highlights */}
            <div className="pt-1">
              <div className="flex flex-wrap gap-1.5">
                {['Higher Secondary Education', 'Sunabeda-2, Koraput', 'Science & Mathematics'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-[#141414] border border-[#242424] text-[10.5px] font-mono text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="group relative bg-[#090909] border border-[#222222] hover:border-[#383838] rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl">
          <div className="space-y-4">
            {/* Badges & Status */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-300">
                Secondary
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/25 px-2.5 py-0.5 rounded-full font-medium">
                <CheckCircle2 size={11} className="text-amber-400" />
                Completed 2023
              </span>
            </div>

            {/* Title & Level */}
            <div>
              <h3 className="font-hn text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cream transition-colors">
                Class 10 — Secondary Education
              </h3>
              <div className="text-sm font-semibold text-neutral-300 mt-1 flex items-center gap-1.5">
                <Building size={15} className="text-amber-400 flex-shrink-0" />
                <span>Deomali Public School</span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-neutral-400">
              <MapPin size={12} className="text-neutral-500 flex-shrink-0" />
              <span>Beheraguda, Koraput, Odisha</span>
            </div>

            {/* Summary */}
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-2 border-t border-[#1c1c1c]">
              Completed secondary schooling developing fundamental academic disciplines and conceptual understanding.
            </p>

            {/* Highlights */}
            <div className="pt-1">
              <div className="flex flex-wrap gap-1.5">
                {['Secondary Education', 'Beheraguda, Koraput', 'Academic Discipline'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-[#141414] border border-[#242424] text-[10.5px] font-mono text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return <Timeline data={educationData} />;
}

export default EducationTimeline;
