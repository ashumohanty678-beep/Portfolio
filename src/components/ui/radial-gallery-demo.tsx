import React, { useState } from 'react';
import { RadialScrollGallery } from '@/components/ui/portfolio-and-image-gallery';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

function GithubIcon({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export interface ProjectTile {
  id: number;
  title: string;
  cat: string;
  img: string;
  tagline: string;
  tech: string;
  projectKey: 'energyforecast' | 'depthwizard';
}

export const portfolioProjects: ProjectTile[] = [
  {
    id: 1,
    title: 'EnergyForecast',
    cat: 'ML Load Regressor',
    img: '/projects/energy.png',
    tagline: 'Residential electricity demand load predictor & dynamic tiering',
    tech: 'Python • Flask • Scikit-Learn • SQLite',
    projectKey: 'energyforecast',
  },
  {
    id: 2,
    title: 'DepthWizard',
    cat: 'Satellite Vision',
    img: '/projects/depth_wizard.jpg',
    tagline: 'Satellite terrain ingestion and monocular elevation depth analysis',
    tech: 'Python • PyTorch • OpenCV • Aerial GIS',
    projectKey: 'depthwizard',
  },
  {
    id: 3,
    title: 'Grid Load Analytics',
    cat: 'Smart Energy',
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80',
    tagline: 'Dynamic consumption tier classification and Chart.js telemetry curves',
    tech: 'Chart.js • Pandas • Data Mining',
    projectKey: 'energyforecast',
  },
  {
    id: 4,
    title: 'Orbital Surface GIS',
    cat: 'Remote Sensing',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
    tagline: 'High-res .tif/.tiff aerial photogrammetry & topographic inspection',
    tech: 'Multi-format .TIF • GeoTIFF • Topography',
    projectKey: 'depthwizard',
  },
  {
    id: 5,
    title: 'Audit Log & Security',
    cat: 'Data Pipeline',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    tagline: 'Secure Werkzeug auth, real-time multi-filter query engine & CSV export',
    tech: 'SQLite • Werkzeug • Export Engine',
    projectKey: 'energyforecast',
  },
];

/**
 * ProjectsRadialGallery (Unified Projects Section)
 * Eliminates empty dead space, integrates the GSAP radial carousel without pin-spacers,
 * and consolidates all engineering project details into a single cohesive section.
 */
export function ProjectsRadialGallery({ className = '' }: { className?: string }) {
  const [activeTab, setActiveTab] = useState<'all' | 'energyforecast' | 'depthwizard'>('all');
  const [activeWheelProject, setActiveWheelProject] = useState<string | null>(null);

  const handleTileSelect = (index: number) => {
    const tile = portfolioProjects[index];
    if (tile) {
      setActiveWheelProject(tile.title);
      setActiveTab(tile.projectKey);
      const targetElement = document.getElementById(`project-${tile.projectKey}`);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  };

  return (
    <div className={`w-full text-cream space-y-6 ${className}`}>
      {/* 1. Section Header */}
      <header className="section-header !mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="section-label">04 // Projects</span>
          <h2 className="section-title">Featured Projects &amp; Architecture Wheel</h2>
          <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mt-1.5 flex flex-wrap items-center gap-2">
            <span>// Interactive 360&deg; Orbit</span>
            <span className="text-neutral-400 dark:text-neutral-600">&bull;</span>
            <span>Scroll to rotate architecture modules</span>
            <span className="text-neutral-400 dark:text-neutral-600">&bull;</span>
            <span className="text-emerald-500 dark:text-[#e2edfb]">Click any card to inspect repository specifications</span>
          </p>
        </div>
      </header>

      {/* 2. Unified Container (Wheel + Details Console) */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-b from-[rgba(4,5,18,0.7)] via-[rgba(6,7,24,0.4)] to-[rgba(9,5,18,0.7)] backdrop-blur-xl">
        
        {/* Subtle Ambient Section Glow matching portfolio background */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 80% 15%, rgba(255, 62, 145, 0.12), transparent 45%), radial-gradient(circle at 15% 70%, rgba(75, 116, 255, 0.1), transparent 45%)",
          }}
        />

        {/* Top Orbit Header Bar */}
        <div className="py-2.5 px-4 sm:px-6 bg-[rgba(12,12,24,0.5)] backdrop-blur-md border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
            <span className="text-neutral-300 font-bold uppercase tracking-wider text-[11px]">
              Orbital Project Inspector
            </span>
          </div>
          <div className="text-neutral-400 text-[11px] flex items-center gap-3">
            <span>Scroll-driven scrub</span>
            <span className="text-neutral-700">|</span>
            <span className="text-neutral-300">5 Architectural Modules</span>
          </div>
        </div>

        {/* Compact Radial Scroll Gallery (pin=false to avoid huge spacer voids) */}
        <div className="relative py-2 bg-gradient-to-b from-transparent via-[rgba(17,7,25,0.2)] to-transparent">
          <RadialScrollGallery
            className="!min-h-[380px] sm:!min-h-[440px]"
            baseRadius={340}
            mobileRadius={200}
            visiblePercentage={46}
            scrollDuration={1200}
            pin={false}
            onItemSelect={handleTileSelect}
          >
            {(hoveredIndex) =>
              portfolioProjects.map((project, index) => {
                const isActive = hoveredIndex === index || activeWheelProject === project.title;
                return (
                  <div
                    key={project.id}
                    className={`group relative w-[190px] h-[260px] sm:w-[230px] sm:h-[300px] overflow-hidden rounded-xl bg-[#08091a]/70 backdrop-blur-md border transition-all duration-300 shadow-xl ${
                      isActive ? 'border-white/50 shadow-white/10' : 'border-white/10'
                    }`}
                  >
                    {/* Background Visual Surface */}
                    <div className="absolute inset-0 overflow-hidden">
                      <img
                        src={project.img}
                        alt={project.title}
                        className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
                          isActive ? 'scale-110 blur-0 brightness-110' : 'scale-100 blur-[0.5px] grayscale-[20%]'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent opacity-85" />
                    </div>

                    {/* Card Content */}
                    <div className="absolute inset-0 flex flex-col justify-between p-3.5 sm:p-4">
                      <div className="flex justify-between items-start">
                        <Badge variant="secondary" className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 bg-black/80 backdrop-blur-md text-white border border-white/10">
                          {project.cat}
                        </Badge>
                        <div
                          className={`w-6 h-6 rounded-full bg-white text-black flex items-center justify-center transition-all duration-500 shadow-md ${
                            isActive ? 'opacity-100 rotate-0 scale-105' : 'opacity-0 -rotate-45 scale-90'
                          }`}
                        >
                          <ArrowUpRight size={13} />
                        </div>
                      </div>

                      <div className={`transition-transform duration-500 ${isActive ? 'translate-y-0' : 'translate-y-1'}`}>
                        <span className="font-mono text-[8.5px] uppercase tracking-[0.18em] text-neutral-400 block mb-0.5">
                          {project.tech}
                        </span>
                        <h4 className="font-hn text-base sm:text-lg font-bold leading-tight text-white drop-shadow-md">
                          {project.title}
                        </h4>
                        <p className="text-[10.5px] text-neutral-300 line-clamp-2 mt-1 leading-snug">
                          {project.tagline}
                        </p>
                        <div
                          className={`h-0.5 bg-white mt-2 transition-all duration-500 rounded-full ${
                            isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </RadialScrollGallery>
        </div>

        {/* Project View Filter Bar */}
        <div className="py-3 px-4 sm:px-6 bg-[rgba(12,12,24,0.5)] backdrop-blur-md border-t border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider mr-1 hidden sm:inline">
              Filter Specifications:
            </span>
            <button
              onClick={() => { setActiveTab('all'); setActiveWheelProject(null); }}
              className={`px-3 py-1 rounded-md text-xs font-mono transition-all ${
                activeTab === 'all'
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'bg-white/5 text-neutral-300 hover:bg-white/10 border border-white/10 backdrop-blur-sm'
              }`}
            >
              View Both Projects (2)
            </button>
            <button
              onClick={() => { setActiveTab('energyforecast'); setActiveWheelProject('EnergyForecast'); }}
              className={`px-3 py-1 rounded-md text-xs font-mono flex items-center gap-1.5 transition-all ${
                activeTab === 'energyforecast'
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'bg-white/5 text-neutral-300 hover:bg-white/10 border border-white/10 backdrop-blur-sm'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              EnergyForecast (ML)
            </button>
            <button
              onClick={() => { setActiveTab('depthwizard'); setActiveWheelProject('DepthWizard'); }}
              className={`px-3 py-1 rounded-md text-xs font-mono flex items-center gap-1.5 transition-all ${
                activeTab === 'depthwizard'
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'bg-white/5 text-neutral-300 hover:bg-white/10 border border-white/10 backdrop-blur-sm'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              DepthWizard (Vision)
            </button>
          </div>

          <div className="text-[11px] font-mono text-neutral-400 flex items-center gap-1">
            <span>Showing:</span>
            <strong className="text-cream">
              {activeTab === 'all' ? 'All Technical Repositories' : activeTab === 'energyforecast' ? 'EnergyForecast (ML)' : 'DepthWizard (CV)'}
            </strong>
          </div>
        </div>

        {/* Complete Project Details Presentation */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-8 bg-transparent">
          
          {/* PROJECT 1: EnergyForecast */}
          {(activeTab === 'all' || activeTab === 'energyforecast') && (
            <article
              id="project-energyforecast"
              className="bg-[#08091a]/60 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-lg transition-all hover:border-white/25"
            >
              {/* Card Sub-Header Bar */}
              <div className="bg-[rgba(14,16,38,0.5)] backdrop-blur-md border-b border-white/10 px-4 py-2.5 sm:px-6 flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                <div className="flex items-center gap-2 text-neutral-400">
                  <span className="text-neutral-500">repo:</span>
                  <strong className="text-white">Repository-name-EnergyForecast</strong>
                </div>
                <div className="flex items-center gap-2 text-emerald-400 text-[11px] tracking-wide uppercase font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                  <span>GitHub Active</span>
                </div>
              </div>

              {/* Card Body Grid */}
              <div className="p-4 sm:p-6 lg:p-7 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Media Frame & Links */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-white/10 bg-black/40 group">
                    <img
                      src="/projects/energy.png"
                      alt="EnergyForecast Analytics Dashboard"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center text-[10px] font-mono text-neutral-300 bg-black/70 backdrop-blur px-2.5 py-1 rounded">
                      <span>EnergyForecast UI</span>
                      <span>Telemetry &bull; Chart.js</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 pt-1">
                    <a
                      href="https://github.com/ashumohanty678-beep/Repository-name-EnergyForecast"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-semibold text-xs transition-all hover:bg-neutral-200"
                    >
                      <GithubIcon size={14} />
                      <span>View on GitHub</span>
                      <ArrowUpRight size={13} />
                    </a>
                    <span className="text-[11px] font-mono text-neutral-500 py-1">
                      // Live Instance: Local Flask
                    </span>
                  </div>
                </div>

                {/* Details & Specs */}
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        Machine Learning &bull; Demand Forecasting
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-hn text-white">
                      EnergyForecast
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mt-2">
                      Machine learning-powered residential electricity forecasting and analytics platform that predicts household energy loads and provides dynamic conservation insights.
                    </p>
                  </div>

                  {/* Tech Badges */}
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 mb-1.5">
                      // Built With
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {['Python', 'Flask', 'Scikit-Learn', 'Random Forest', 'SQLite', 'Chart.js', 'Pandas'].map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded bg-white/5 backdrop-blur-md border border-white/10 text-[11px] font-mono text-cream"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Engineering Features */}
                  <div className="pt-1">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2 font-semibold">
                      // Key Engineering Features
                    </div>
                    <ul className="space-y-1.5 text-xs text-neutral-300 font-sans">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 font-mono font-bold">&gt;</span>
                        <span>Random Forest regression model forecasting energy demand (kWh) from temperature, humidity, occupants, and past usage.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 font-mono font-bold">&gt;</span>
                        <span>Automated consumption tier classification (Low, Moderate, High) with context-aware energy-saving tips.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 font-mono font-bold">&gt;</span>
                        <span>Interactive Chart.js analytics dashboard visualizing consumption trends, pie distributions, and aggregate stats.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 font-mono font-bold">&gt;</span>
                        <span>Audit log system with real-time multi-parameter search filtering and CSV dataset export.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 font-mono font-bold">&gt;</span>
                        <span>SQLite database integration with secure user authentication (Werkzeug password hashing).</span>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </article>
          )}

          {/* PROJECT 2: DepthWizard */}
          {(activeTab === 'all' || activeTab === 'depthwizard') && (
            <article
              id="project-depthwizard"
              className="bg-[#08091a]/60 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-lg transition-all hover:border-white/25"
            >
              {/* Card Sub-Header Bar */}
              <div className="bg-[rgba(14,16,38,0.5)] backdrop-blur-md border-b border-white/10 px-4 py-2.5 sm:px-6 flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                <div className="flex items-center gap-2 text-neutral-400">
                  <span className="text-neutral-500">repo:</span>
                  <strong className="text-white">DepthWizard</strong>
                </div>
                <div className="flex items-center gap-2 text-amber-400 text-[11px] tracking-wide uppercase font-semibold">
                  <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
                  <span>Local Prototype</span>
                </div>
              </div>

              {/* Card Body Grid */}
              <div className="p-4 sm:p-6 lg:p-7 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Media Frame & Actions */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-white/10 bg-black/40 group">
                    <img
                      src="/projects/depth_wizard.jpg"
                      alt="DepthWizard Satellite Terrain Depth Analysis"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center text-[10px] font-mono text-neutral-300 bg-black/70 backdrop-blur px-2.5 py-1 rounded">
                      <span>DepthWizard Pipeline</span>
                      <span>Aerial Topography &bull; PyTorch</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 pt-1">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-neutral-300 text-xs font-mono backdrop-blur-sm">
                      <span>Local Workspace Project</span>
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500 py-1">
                      // Monocular Depth Pipeline
                    </span>
                  </div>
                </div>

                {/* Details & Specs */}
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        Computer Vision &bull; Satellite Ingestion
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-hn text-white">
                      DepthWizard
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mt-2">
                      Satellite image ingestion and terrain depth analysis web pipeline engineered to process multi-format aerial photography for topographic inspection.
                    </p>
                  </div>

                  {/* Tech Badges */}
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 mb-1.5">
                      // Built With
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {['Python', 'Flask', 'PyTorch (Environment)', 'Computer Vision', 'GSAP ScrollTrigger', 'HTML5 / CSS3'].map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded bg-white/5 backdrop-blur-md border border-white/10 text-[11px] font-mono text-cream"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Engineering Features */}
                  <div className="pt-1">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2 font-semibold">
                      // Key Engineering Features
                    </div>
                    <ul className="space-y-1.5 text-xs text-neutral-300 font-sans">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-mono font-bold">&gt;</span>
                        <span>Multi-format satellite imagery ingestion pipeline supporting high-resolution .tif, .tiff, .png, and .jpg formats.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-mono font-bold">&gt;</span>
                        <span>Automated upload validation, structured asset handling, and secure server-side file management.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-mono font-bold">&gt;</span>
                        <span>Integrated scroll-driven radial visual inspection carousel for multi-angle satellite terrain examination.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-mono font-bold">&gt;</span>
                        <span>Configured PyTorch environment set up for downstream monocular depth estimation models.</span>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </article>
          )}

        </div>

      </div>
    </div>
  );
}

// Retain DepthWizard specific export for backwards compatibility
export { ProjectsRadialGallery as DepthWizardRadialGallery };

// Standard shadcn demo matching the user prompt structure with verified Unsplash images
export const demoProjects = [
  { id: 1, title: "EnergyForecast", cat: "ML Forecast", img: "/projects/energy.png" },
  { id: 2, title: "DepthWizard", cat: "Vision Pipeline", img: "/projects/depth_wizard.jpg" },
  { id: 3, title: "Oceanic GIS", cat: "Remote Sensing", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80" },
  { id: 4, title: "Smart Grid", cat: "Energy Tech", img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80" },
  { id: 5, title: "Secure Audit", cat: "Data Systems", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
];

export function DemoRadialScrollGalleryBento() {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-[rgba(4,5,18,0.7)] via-[rgba(6,7,24,0.4)] to-[rgba(9,5,18,0.7)] backdrop-blur-xl min-h-[500px] text-cream w-full">
      <div className="h-[200px] flex flex-col items-center justify-center space-y-3 pt-6 text-center px-4">
        <div className="space-y-1">
          <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase font-mono">
            Portfolio
          </span>
          <h1 className="text-3xl font-bold tracking-tighter font-hn text-white">
            Work &amp; Architecture
          </h1>
        </div>
        <div className="animate-bounce text-neutral-400 text-xs font-mono">↓ Scroll</div>
      </div>

      <RadialScrollGallery
        className="!min-h-[460px]"
        baseRadius={360}
        mobileRadius={220}
        visiblePercentage={48}
        scrollDuration={1200}
        pin={false}
      >
        {(hoveredIndex) =>
          demoProjects.map((project, index) => {
            const isActive = hoveredIndex === index;
            return (
              <div 
                key={project.id} 
                className="group relative w-[190px] h-[260px] sm:w-[230px] sm:h-[300px] overflow-hidden rounded-xl bg-[#08091a]/70 backdrop-blur-md border border-white/10 shadow-lg"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
                      isActive ? 'scale-110 blur-0' : 'scale-100 blur-[1px] grayscale-[30%]'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <div className="flex justify-between items-start">
                    <Badge variant="secondary" className="text-[10px] px-2 py-0 bg-black/80 text-white border border-white/10 backdrop-blur">
                      {project.cat}
                    </Badge>
                    <div className={`w-6 h-6 rounded-full bg-white text-black flex items-center justify-center transition-all duration-500 ${isActive ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-45'}`}>
                      <ArrowUpRight size={12} />
                    </div>
                  </div>

                  <div className={`transition-transform duration-500 ${isActive ? 'translate-y-0' : 'translate-y-2'}`}>
                    <h3 className="text-xl font-bold leading-tight text-white font-hn">{project.title}</h3>
                    <div className={`h-0.5 bg-white mt-2 transition-all duration-500 ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0'}`} />
                  </div>
                </div>
              </div>
            );
          })
        }
      </RadialScrollGallery>

      <div className="h-[80px] flex items-center justify-center bg-[rgba(12,12,24,0.4)] backdrop-blur-md border-t border-white/10">
        <h2 className="text-xs font-light tracking-widest uppercase text-neutral-500 font-mono">
          // End of Interactive Radial Showcase
        </h2>
      </div>
    </div>
  );
}

export default ProjectsRadialGallery;
