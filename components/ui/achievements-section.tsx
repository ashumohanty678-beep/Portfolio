'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Building2, 
  GraduationCap, 
  Presentation, 
  Calendar, 
  MapPin, 
  Shield, 
  Users, 
  CheckCircle2,
  Sparkles,
  Award
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export interface AchievementItem {
  id: string;
  index: string;
  category: string;
  categoryBadge: string;
  title: string;
  organization: string;
  location?: string;
  period?: string;
  type: 'academic' | 'presentation' | 'professional';
  description: string;
  highlights: string[];
}

export const achievementsData: AchievementItem[] = [
  {
    id: 'energy-forecasting',
    index: '01',
    category: 'Academic Project',
    categoryBadge: 'Academic Project',
    title: 'Energy Forecasting',
    organization: 'College Academic Project',
    location: 'GIET University',
    type: 'academic',
    description:
      'Developed and worked on an energy forecasting project as part of college academic coursework. Focused on analyzing electricity demand patterns and implementing predictive modeling workflows within an academic engineering framework.',
    highlights: [
      'Academic Engineering',
      'Predictive Demand Modeling',
      'Energy Analytics',
      'Coursework Implementation',
    ],
  },
  {
    id: 'depth-wizard',
    index: '02',
    category: 'Technical Presentation',
    categoryBadge: 'Technical Presentation',
    title: 'Depth Wizard',
    organization: 'College Technical Event',
    location: 'Technical Symposium',
    type: 'presentation',
    description:
      'Delivered a technical presentation on the "Depth Wizard" topic at a college technical event, effectively explaining complex concepts to an audience of peers and faculty. Demonstrated structured research, technical communication, and technical presentation delivery.',
    highlights: [
      'Technical Communication',
      'Concept Explanation',
      'Subject Research',
      'Event Participation',
    ],
  },
  {
    id: 'hal-koraput',
    index: '03',
    category: 'Professional Experience',
    categoryBadge: 'Summer Internship · 1 Month',
    title: 'Hindustan Aeronautics Limited (HAL)',
    organization: 'Koraput Division',
    location: 'Koraput, Odisha',
    period: '1 Month Duration',
    type: 'professional',
    description:
      'Completed a one-month summer internship at Hindustan Aeronautics Limited (HAL), Koraput Division. Gained valuable exposure to a large-scale professional engineering and industrial environment, learning practical industry workflows, technical discipline, and engineering teamwork.',
    highlights: [
      'Professional Engineering Environment',
      'Industrial Operations',
      'Technical Learning',
      'Teamwork & Collaboration',
    ],
  },
];

export function AchievementsSection({ className = '' }: { className?: string }) {
  const academicItem = achievementsData[0];
  const presentationItem = achievementsData[1];
  const professionalItem = achievementsData[2];

  return (
    <section className={`py-4 ${className}`}>
      <div className="w-full">
        <div className="relative">
          {/* Features-8 6-Column Bento Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-6 gap-4 sm:gap-5">
            
            {/* ---------------- CARD 1: Academic Project // Energy Forecasting (col-span 2) ---------------- */}
            <Card className="relative col-span-full md:col-span-3 lg:col-span-2 flex flex-col justify-between overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#0c0a1a]/85 via-[#100d22]/75 to-[#080614]/90 border border-white/10 hover:border-purple-500/25 transition-all duration-300 shadow-[0_16px_48px_rgba(0,0,0,0.45),0_0_40px_rgba(112,66,248,0.06)] backdrop-blur-xl group">
              {/* Subtle top glowing ambient beam */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400/60 via-purple-400/40 to-transparent pointer-events-none z-10" />
              <div className="absolute -top-20 -right-20 w-52 h-52 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

              <CardContent className="relative z-10 flex flex-col justify-between h-full p-6">
                <div>
                  {/* Category & Badge Header */}
                  <div className="flex items-center justify-between gap-2 border-b border-white/[0.08] pb-3 mb-5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-neutral-300">
                        {academicItem.index}
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">
                        // {academicItem.category}
                      </span>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-emerald-400 transition-colors">
                      <GraduationCap size={14} />
                    </div>
                  </div>

                  {/* Features-8 Curve Graphic with Stat */}
                  <div className="relative flex h-24 w-full items-center justify-center my-2">
                    <svg className="text-neutral-700/50 group-hover:text-purple-400/30 transition-colors absolute inset-0 size-full" viewBox="0 0 254 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="relative z-10 font-mono text-4xl font-bold tracking-tight text-white group-hover:text-cream transition-colors">
                      {academicItem.index}
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-bold text-white group-hover:text-cream transition-colors">
                    {academicItem.title}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1 text-xs font-mono text-neutral-400">
                    <span className="text-neutral-300">{academicItem.organization}</span>
                    <span className="text-neutral-600">&bull;</span>
                    <span>{academicItem.location}</span>
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-neutral-300/85 leading-relaxed">
                    {academicItem.description}
                  </p>
                </div>

                {/* Focus Highlights */}
                <div className="pt-4 border-t border-white/[0.08] mt-5">
                  <div className="flex flex-wrap gap-1.5">
                    {academicItem.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-purple-500/20 text-[10.5px] font-mono text-neutral-300 backdrop-blur-sm transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ---------------- CARD 2: Technical Presentation // Depth Wizard (col-span 2) ---------------- */}
            <Card className="relative col-span-full md:col-span-3 lg:col-span-2 flex flex-col justify-between overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#0c0a1a]/85 via-[#100d22]/75 to-[#080614]/90 border border-white/10 hover:border-purple-500/25 transition-all duration-300 shadow-[0_16px_48px_rgba(0,0,0,0.45),0_0_40px_rgba(112,66,248,0.06)] backdrop-blur-xl group">
              {/* Subtle top glowing ambient beam */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400/60 via-purple-400/40 to-transparent pointer-events-none z-10" />
              <div className="absolute -top-20 -right-20 w-52 h-52 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <CardContent className="relative z-10 flex flex-col justify-between h-full p-6">
                <div>
                  {/* Category & Badge Header */}
                  <div className="flex items-center justify-between gap-2 border-b border-white/[0.08] pb-3 mb-5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-neutral-300">
                        {presentationItem.index}
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">
                        // {presentationItem.category}
                      </span>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-cyan-400 transition-colors">
                      <Presentation size={14} />
                    </div>
                  </div>

                  {/* Features-8 Concentric Circle Radar Graphic */}
                  <div className="relative mx-auto flex aspect-square size-28 rounded-full border border-white/10 before:absolute before:-inset-2 before:rounded-full before:border before:border-white/5 my-2">
                    <svg className="m-auto h-fit w-20" viewBox="0 0 212 143" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        className="text-zinc-600"
                        d="M44.0209 55.3542C43.1945 54.7639 42.6916 54.0272 42.5121 53.1442C42.3327 52.2611 42.5995 51.345 43.3125 50.3958C50.632 40.3611 59.812 32.5694 70.8525 27.0208C81.8931 21.4722 93.668 18.6979 106.177 18.6979C118.691 18.6979 130.497 21.3849 141.594 26.7587C152.691 32.1326 161.958 39.8936 169.396 50.0417C170.222 51.1042 170.489 52.0486 170.196 52.875C169.904 53.7014 169.401 54.4097 168.688 55C167.979 55.5903 167.153 55.8571 166.208 55.8004C165.264 55.7437 164.438 55.2408 163.729 54.2917C157.236 45.0833 148.885 38.0307 138.675 33.1337C128.466 28.2368 117.633 25.786 106.177 25.7812C94.7257 25.7812 83.9827 28.2321 73.948 33.1337C63.9132 38.0354 55.5903 45.0881 48.9792 54.2917C48.2709 55.3542 47.4445 55.9444 46.5 56.0625C45.5556 56.1806 44.7292 55.9444 44.0209 55.3542ZM126.188 142.656C113.91 139.587 103.875 133.476 96.0834 124.325C88.2917 115.173 84.3959 103.988 84.3959 90.7708C84.3959 84.8681 86.5209 79.9097 90.7709 75.8958C95.0209 71.8819 100.156 69.875 106.177 69.875C112.198 69.875 117.333 71.8819 121.583 75.8958C125.833 79.9097 127.958 84.8681 127.958 90.7708C127.958 94.6667 129.434 97.9439 132.385 100.602C135.337 103.261 138.819 104.588 142.833 104.583C146.847 104.583 150.271 103.256 153.104 100.602C155.938 97.9486 157.354 94.6714 157.354 90.7708C157.354 77.0764 152.337 65.566 142.302 56.2396C132.267 46.9132 120.285 42.25 106.354 42.25C92.4237 42.25 80.441 46.9132 70.4063 56.2396C60.3716 65.566 55.3542 77.0174 55.3542 90.5937C55.3542 93.4271 55.621 96.9687 56.1546 101.219C56.6882 105.469 57.9562 110.427 59.9584 116.094C60.3125 117.156 60.2842 118.101 59.8734 118.927C59.4625 119.753 58.7825 120.344 57.8334 120.698C56.8889 121.052 55.9752 121.024 55.0921 120.613C54.2091 120.202 53.5881 119.522 53.2292 118.573C51.4584 113.969 50.1905 109.395 49.4255 104.853C48.6605 100.31 48.2756 95.6158 48.2709 90.7708C48.2709 75.0694 53.9682 61.9062 65.363 51.2812C76.7577 40.6562 90.3624 35.3437 106.177 35.3437C122.115 35.3437 135.809 40.6562 147.26 51.2812C158.712 61.9062 164.438 75.0694 164.438 90.7708C164.438 96.6736 162.343 101.601 158.155 105.554C153.966 109.506 148.859 111.485 142.833 111.49C136.813 111.49 131.649 109.513 127.342 105.561C123.035 101.608 120.88 96.6783 120.875 90.7708C120.875 86.875 119.43 83.5978 116.54 80.9392C113.65 78.2805 110.196 76.9536 106.177 76.9583C102.163 76.9583 98.7089 78.2876 95.8142 80.9462C92.9195 83.6049 91.4745 86.8797 91.4792 90.7708C91.4792 102.222 94.8745 111.785 101.665 119.458C108.456 127.132 117.22 132.503 127.958 135.573C129.021 135.927 129.729 136.517 130.083 137.344C130.438 138.17 130.497 139.056 130.26 140C130.024 140.826 129.552 141.535 128.844 142.125C128.135 142.715 127.25 142.892 126.188 142.656Z"
                        fill="currentColor"
                      />
                      <path className="text-cyan-400" d="M3 72H209" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </div>

                  <h3 className="mt-3 text-xl font-bold text-white group-hover:text-cream transition-colors">
                    {presentationItem.title}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1 text-xs font-mono text-neutral-400">
                    <span className="text-neutral-300">{presentationItem.organization}</span>
                    <span className="text-neutral-600">&bull;</span>
                    <span>{presentationItem.location}</span>
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-neutral-300/85 leading-relaxed">
                    {presentationItem.description}
                  </p>
                </div>

                {/* Focus Highlights */}
                <div className="pt-4 border-t border-white/[0.08] mt-5">
                  <div className="flex flex-wrap gap-1.5">
                    {presentationItem.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-purple-500/20 text-[10.5px] font-mono text-neutral-300 backdrop-blur-sm transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ---------------- CARD 3: Academic Foundation & Curriculum (col-span 2) ---------------- */}
            <Card className="relative col-span-full md:col-span-6 lg:col-span-2 flex flex-col justify-between overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#0c0a1a]/85 via-[#100d22]/75 to-[#080614]/90 border border-white/10 hover:border-purple-500/25 transition-all duration-300 shadow-[0_16px_48px_rgba(0,0,0,0.45),0_0_40px_rgba(112,66,248,0.06)] backdrop-blur-xl group">
              {/* Subtle top glowing ambient beam */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400/60 via-purple-400/40 to-transparent pointer-events-none z-10" />
              <div className="absolute -top-20 -right-20 w-52 h-52 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <CardContent className="relative z-10 flex flex-col justify-between h-full p-6">
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between gap-2 border-b border-white/[0.08] pb-3 mb-5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-neutral-300">
                        GIET
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">
                        // Academic Track
                      </span>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-amber-400 transition-colors">
                      <Sparkles size={14} />
                    </div>
                  </div>

                  {/* Features-8 Analytics Line Path SVG */}
                  <div className="py-2">
                    <svg className="w-full" viewBox="0 0 386 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="analytics_rect_bg" x1="0" y1="0" x2="386" y2="123" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#140f28" stopOpacity="0.75" />
                          <stop offset="1" stopColor="#0a0818" stopOpacity="0.85" />
                        </linearGradient>
                        <linearGradient id="paint_academic_grad" x1="3" y1="60" x2="3" y2="123" gradientUnits="userSpaceOnUse">
                          <stop className="text-amber-500/20" stopColor="currentColor" />
                          <stop className="text-transparent" offset="1" stopColor="currentColor" stopOpacity="0.02" />
                        </linearGradient>
                      </defs>
                      <rect width="386" height="123" rx="10" fill="url(#analytics_rect_bg)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 123C3 123 14.3 94.2 35.1 88.1C55.9 82 65.9 80.6 65.9 80.6C65.9 80.6 80.7 80.6 92.2 80.6C103.7 80.6 100.9 63.5 109.1 63.5C117.2 63.5 117.2 92 124.8 92C132.3 92 142.3 78 153.8 80.6C165.4 83.1 186.8 92 193.8 92C200.7 92 206.3 63.5 214.1 63.5C221.8 63.5 238.7 93.8 244.2 92C249.8 90.2 258.8 60 266.2 60C272.1 60 284.1 88.1 286.7 88.1C294.8 88.2 300.2 72.9 305.4 72.9C312.3 72.9 323.4 65.2 335.6 63.5C347.7 61.8 348.2 82.1 363.6 80.6C367.9 80.1 372.9 82.2 376.4 87.1C379.4 91.3 381.1 97.4 382.5 104.6C383.5 109.4 382.5 123 382.5 123"
                        fill="url(#paint_academic_grad)"
                      />
                      <path
                        className="text-amber-400/90"
                        d="M3 121C3 121 15.3 93.7 36 87.8C56.7 81.8 66.7 81 66.7 81C66.7 81 80 81 91.5 81C102.9 81 100.4 64.3 108.6 64.3C116.7 64.3 117.7 92.1 125.2 92.1C132.8 92.1 142.1 78.5 153.6 81C165.1 83.4 186.1 92.1 193 92.1C199.9 92.1 205.3 64.3 213 64.3C220.8 64.3 237.8 93.9 243.4 92.1C248.9 90.4 257.9 60.5 265.3 60.5C271.1 60.5 283.2 87.7 285.8 87.8C293.8 87.9 299.2 73.1 304.4 73.1C311.3 73.1 321.4 66 333.6 64.3C345.7 62.6 346.9 82.5 362.3 81C377.6 79.5 383 106.6 383 106.6"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      />
                    </svg>
                  </div>

                  <h3 className="mt-3 text-xl font-bold text-white group-hover:text-cream transition-colors">
                    B.Tech CSE (AI &amp; ML)
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1 text-xs font-mono text-neutral-400">
                    <span className="text-neutral-300">{academicItem.organization}</span>
                    <span className="text-neutral-600">&bull;</span>
                    <span>2nd Year · 2025–2029</span>
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-neutral-300/85 leading-relaxed">
                    Undergraduate degree building strong computational foundations across algorithm design, systems architecture, predictive intelligence, and structured data engineering.
                  </p>
                </div>

                {/* Focus Highlights */}
                <div className="pt-4 border-t border-white/[0.08] mt-5">
                  <div className="flex flex-wrap gap-1.5">
                    {['AI & ML Engineering', 'Algorithms & Data Structures', 'Systems Architecture'].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-purple-500/20 text-[10.5px] font-mono text-neutral-300 backdrop-blur-sm transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ---------------- CARD 4: Academic Engineering Depth // Energy Forecasting (col-span 3) ---------------- */}
            <Card className="relative col-span-full lg:col-span-3 overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#0c0a1a]/85 via-[#100d22]/75 to-[#080614]/90 border border-white/10 hover:border-purple-500/25 transition-all duration-300 shadow-[0_16px_48px_rgba(0,0,0,0.45),0_0_40px_rgba(112,66,248,0.06)] backdrop-blur-xl group">
              {/* Subtle top glowing ambient beam */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400/60 via-purple-400/40 to-transparent pointer-events-none z-10" />
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              <CardContent className="relative z-10 grid h-full p-6 sm:grid-cols-2 gap-4">
                <div className="relative z-10 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="relative flex aspect-square size-11 rounded-xl border border-white/10 before:absolute before:-inset-1.5 before:rounded-xl before:border before:border-white/5 bg-white/[0.05] text-neutral-300 group-hover:text-emerald-400 transition-colors shadow-sm">
                      <Shield className="m-auto size-5" strokeWidth={1.5} />
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[10px] uppercase tracking-wider">
                      <span>Predictive Telemetry</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cream transition-colors">
                      Academic Engineering &amp; Demand Modeling
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300/85 leading-relaxed">
                      Structured application of regression models and time-series demand forecasting developed for college engineering coursework, analyzing historical electricity consumption patterns.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.08]">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-purple-500/20 text-[10.5px] font-mono text-neutral-300 backdrop-blur-sm transition-all duration-200">
                        Predictive Regressors
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-purple-500/20 text-[10.5px] font-mono text-neutral-300 backdrop-blur-sm transition-all duration-200">
                        Coursework Implementation
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Visual: Features-8 Detailed Telemetry Wave */}
                <div className="rounded-tl-2xl relative -mb-6 -mr-6 mt-4 sm:mt-0 h-fit border-l border-t border-white/10 p-4 bg-gradient-to-b from-[#0e0c20]/70 to-[#070614]/85 backdrop-blur-md shadow-inner">
                  <div className="absolute left-3 top-2 flex gap-1">
                    <span className="block size-1.5 rounded-full border border-white/10 bg-white/10"></span>
                    <span className="block size-1.5 rounded-full border border-white/10 bg-white/10"></span>
                    <span className="block size-1.5 rounded-full border border-white/10 bg-white/10"></span>
                  </div>
                  <svg className="w-full mt-2" viewBox="0 0 366 231" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.1 231V179.4L1.9 180.3L2.9 177.7L4.1 183.9L6.8 179L7.4 184.3L9.4 188L11.1 191.3V155.5L13.6 153V145.1L14.2 142.8V154.8L15.6 160.8L17.1 172.2H19.2V158.2L20.7 153L22.4 148.1V142.4L24.7 146.9V128.4L26.8 129.9V120.9L28.1 118.5L28.5 127.4L29.2 123.8L31 120.5V130.3L32.4 134.7L34.4 145.1V137.5L35.9 130.3L37.2 126L38.7 134.7L40.7 139V126L43.8 130.3V123.8L46 112.4L47.3 103.4V92.5L49.2 98.5V106.1L52.6 89.8L54.5 82.8L56.1 88L58.9 89.8V98.5L60.8 103.4L62.1 123.8L63.9 118.1L65.6 122.1L68.5 114.2L70.3 109.7L71.9 118.1L73.6 123.8V130.3L74.9 134.9L76.9 127.9L78.4 134.7V139L80.1 142.4V152.6L83 142.4V130.3L86.8 123.8L89 116.6V122.1L90.6 127.9L92.4 131.8L93.7 123.8L95.5 118.1L96.8 122.1V137.5L99.7 141V131.8L101.7 120.5L103 116.6V133.3L104.9 136.2L107 141L108.9 134.7L110.8 130.3L112.9 141V148.1L115.7 152.6L117.9 145.1L120 141V148.1L123.4 152.6L125.4 158.2L130.5 150.5V156.6L131.6 155.5L134.1 158.2L135.6 168.1L138.3 158.2L140.6 160.8L144.7 169.5L147 155.5L148.5 151.8L151 152.6L154.9 145.1L158 143.4L159.4 140.6L159.5 133.3L162.3 127.9V122.1L163.9 116.6V109.7L164.8 104.4L166.9 109.7L176.2 98.5L178.3 106.2L180.8 98.5V81L182.9 69.2L184.8 56.9L186.5 62.8L187.8 79.7L188.8 106.2L191.4 79.7L193.5 75.6V98.5L196.6 94.5L198.6 87.4V79.7L200.7 75.6L202.3 81V89.4L203.6 113L205.3 99.8L207.2 94.5L209 98.5V102.2L211.3 107.6L212.8 81L214.4 66L216.2 62.8L217.9 56.9V79.7L220.3 75.6L222.5 66V73.7H226.2V84.9L228.6 98.5L230.3 75.6L233.6 94.5V104.3L236.9 102.2L239.5 113L241.1 98.5L243.6 94.5L245 106.2L246 87.4L247.3 89.4L250.7 84.9L251.7 96.8L254.6 94.5L257.5 99.8L259.9 91.3L261.2 84.9L264.2 75.6L265.8 87.4L267.2 58.5L269.8 66L276.6 13.5L273.3 58.5L276.3 67.7L282.4 20.2L281.4 58.5V66L283.6 75.6L286 56.9L287.4 73.7L290.6 77.7L292.4 84.9L294.2 61.4L296.2 19L300.8 0.9L297.5 56.9L300 62.8L305.5 22.1L299.8 115L301.9 105.4L304.2 112.7V95L308 80.1L310 95L311 102.1L312.4 105.4L315 112.7L316.9 98L318.9 105.4L321.3 95L324.3 100.8L325 80.1L327.6 61.6L329.3 82.3L333.5 52.8L334.1 52.1L334.7 55.7L337.4 59.8V73.7L340.7 88L343.8 96.4L348.6 82.8L349.6 81L351 89.8L352.6 96.4L355.1 95L356.7 102.2L359.4 108.8L360.7 111.8L365 95.8V231H0.1Z"
                      fill="url(#paint_telemetry_grad)"
                    />
                    <path
                      className="text-emerald-400"
                      d="M1 179.8L4.1 172.2V183.9L7.2 174.4L8.5 183.9L10.1 186.9V155.5L12.6 152.6V145.1L15.3 134.7V155.5L16.7 160.8L18.1 172.2V158.2L19.8 152.6L21.4 148.1V137.5L23.7 142.4V126L25.8 127.9V120.5L27.3 118.1L29.2 112.4V123.8L31 120.5V130.3L32.4 134.7L34.4 145.1V137.5L35.9 130.3L37.2 126L38.7 134.7L40.7 139V126L43.8 130.3V123.8L46 112.4L47.3 103.4V92.5L49.2 98.5V106.1L52.6 89.8L54.5 82.8L56.1 88L58.9 89.8V98.5L60.8 103.4L62.1 123.8L63.9 118.1L65.6 122.1L68.5 114.2L70.3 109.7L71.9 118.1L73.6 123.8V130.3L74.9 134.9L76.9 127.9L78.4 134.7V139L80.1 142.4V152.6L83 142.4V130.3L86.8 123.8L89 116.6V122.1L90.6 127.9L92.4 131.8L93.7 123.8L95.5 118.1L96.8 122.1V137.5L99.7 141V131.8L101.7 120.5L103 116.6V133.3L104.9 136.2L107 141L108.9 134.7L110.8 130.3L112.9 141V148.1L115.7 152.6L117.9 145.1L120 141L121.5 148.1L123.4 152.6L125.4 158.2L128 152.6L131.6 146.8V155.5L134.1 158.2L135.8 164.6L138.3 158.2L140.6 160.8L144.1 166.8L146.1 155.5L147.8 149.8L151 152.6L154.9 145.1L158.5 141V133.3L161.3 127.9V122.1L162.9 116.6V109.7L164.8 103.4L166.9 109.7L176.2 98.5L178.3 106.2L180.8 98.5V81L182.9 69.2L184.8 56.9L186.5 62.8L187.8 79.7L188.8 106.2L191.4 79.7L193.5 75.6V98.5L196.6 94.5L198.6 87.4V79.7L200.7 75.6L202.3 81V89.4L203.6 113L205.3 99.8L207.2 94.5L209 98.5V102.2L211.3 107.6L212.8 81L214.4 66L216.2 62.8L217.9 56.9V79.7L220.3 75.6L222.5 66V73.7H226.2V84.9L228.6 98.5L230.3 75.6L233.6 94.5V104.3L236.9 102.2L239.5 113L241.1 98.5L243.6 94.5L245 106.2L246 87.4L247.3 89.4L250.7 84.9L251.7 96.8L254.6 94.5L257.5 99.8L259.9 91.3L261.2 84.9L264.2 75.6L265.8 87.4L267.2 58.5L269.8 66L276.6 13.5L273.3 58.5L276.3 67.7L282.4 20.2L281.4 58.5V66L283.6 75.6L286 56.9L287.4 73.7L290.6 77.7L292.4 84.9L294.2 61.4L296.2 19L300.8 0.9L297.5 56.9L300 62.8L305.5 22.1L299.8 115L301.9 105.4L304.2 112.7V95L308 80.1L310 95L311 102.1L312.4 105.4L315 112.7L316.9 98L318.9 105.4L321.3 95L324.3 100.8L325 80.1L327.6 61.6L329.4 75L332.6 52.7L334.4 48.6L335.8 55.3L338.4 59.6V73.4L341.7 87.5L343.8 93.4L347.7 82.1L350.2 78.7L352 89.8L353.3 95L355.8 93.4L357.8 102.1L360.7 108.8L363.2 98L365 89.8"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <defs>
                      <linearGradient id="paint_telemetry_grad" x1="0.85" y1="0.95" x2="0.85" y2="230" gradientUnits="userSpaceOnUse">
                        <stop className="text-emerald-500/25" stopColor="currentColor" />
                        <stop className="text-transparent" offset="1" stopColor="currentColor" stopOpacity="0.01" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </CardContent>
            </Card>

            {/* ---------------- CARD 5: Featured Professional Experience // HAL Koraput (col-span 3) ---------------- */}
            <Card className="relative col-span-full lg:col-span-3 overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#0c0a1a]/85 via-[#100d22]/75 to-[#080614]/90 border border-white/10 hover:border-purple-500/25 transition-all duration-300 shadow-[0_16px_48px_rgba(0,0,0,0.45),0_0_40px_rgba(112,66,248,0.06)] backdrop-blur-xl group">
              {/* Subtle top glowing ambient beam */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400/60 via-purple-400/40 to-transparent pointer-events-none z-10" />
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              <CardContent className="relative z-10 grid h-full p-6 sm:grid-cols-2 gap-4">
                <div className="relative z-10 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="relative flex aspect-square size-11 rounded-xl border border-white/10 before:absolute before:-inset-1.5 before:rounded-xl before:border before:border-white/5 bg-white/[0.05] text-emerald-400 shadow-sm">
                      <Building2 className="m-auto size-5" strokeWidth={1.5} />
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                        {professionalItem.index}
                      </span>
                      <Badge variant="secondary" className="text-[10px] font-mono uppercase tracking-wider bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Professional Internship</span>
                      </Badge>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cream transition-colors leading-tight">
                        {professionalItem.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-xs font-mono text-neutral-300">
                        <span className="text-emerald-400 font-semibold">{professionalItem.organization}</span>
                        <span className="text-neutral-600">&bull;</span>
                        <span className="text-neutral-400">{professionalItem.location}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-200/90 leading-relaxed">
                      {professionalItem.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.08]">
                    <div className="flex flex-wrap gap-1.5">
                      {professionalItem.highlights.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-purple-500/20 text-[10.5px] font-mono text-neutral-200 backdrop-blur-sm transition-all duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Visual: Features-8 Central Axis with Avatar Tags */}
                <div className="before:bg-white/10 relative mt-4 sm:mt-0 before:absolute before:inset-0 before:mx-auto before:w-px sm:-my-6 sm:-mr-6 flex items-center justify-center">
                  <div className="relative flex h-full flex-col justify-center space-y-5 py-4 w-full">
                    {/* Marker 1: HAL Koraput Division */}
                    <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                      <span className="block h-fit rounded-xl border border-white/10 bg-[#120e26]/80 backdrop-blur-md px-3 py-1.5 text-[11px] font-mono text-neutral-200 shadow-sm">
                        HAL Koraput
                      </span>
                      <div className="ring-white/15 size-8 ring-4 rounded-full overflow-hidden flex-shrink-0 shadow-sm">
                        <img 
                          className="size-full rounded-full object-cover" 
                          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=120&h=120&q=80" 
                          alt="Industrial Engineering" 
                        />
                      </div>
                    </div>

                    {/* Marker 2: Aerospace & Defense Enterprise */}
                    <div className="relative ml-[calc(50%-1rem)] flex items-center gap-2">
                      <div className="ring-white/15 size-9 ring-4 rounded-full overflow-hidden flex-shrink-0 shadow-sm">
                        <img 
                          className="size-full rounded-full object-cover" 
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80" 
                          alt="Engineering Team" 
                        />
                      </div>
                      <span className="block h-fit rounded-xl border border-emerald-500/30 bg-[#0d1f18]/85 backdrop-blur-md px-3 py-1.5 text-[11px] font-mono text-emerald-300 shadow-sm">
                        Engine Division
                      </span>
                    </div>

                    {/* Marker 3: Summer Internship Duration */}
                    <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                      <span className="block h-fit rounded-xl border border-white/10 bg-[#120e26]/80 backdrop-blur-md px-3 py-1.5 text-[11px] font-mono text-neutral-300 shadow-sm">
                        1 Month Duration
                      </span>
                      <div className="ring-white/15 size-8 ring-4 rounded-full overflow-hidden flex-shrink-0 shadow-sm">
                        <img 
                          className="size-full rounded-full object-cover" 
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80" 
                          alt="Technical Operations" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
}

export default AchievementsSection;
