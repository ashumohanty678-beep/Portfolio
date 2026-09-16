import Hero from './components/Hero.jsx';
import { NavBarDemo } from './components/ui/demo.tsx';
import Bento3Section from './components/ui/bento-monochrome-1.tsx';
import { FlippingCardDemo } from './components/ui/flipping-card-demo.tsx';
import { ProjectsRadialGallery } from './components/ui/radial-gallery-demo.tsx';
import EducationTimeline from './components/ui/education-timeline.tsx';
import AchievementsSection from './components/ui/achievements-section.tsx';
import ResumeSection from './components/ui/resume-section.tsx';
import ContactSection from './components/ui/contact-section.tsx';
import LiveBackground from './components/ui/LiveBackground.jsx';
import CursorSparkles from './components/ui/CursorSparkles.jsx';
import BackgroundMusic from './components/ui/BackgroundMusic.tsx';

export default function App() {
  return (
    <div className="relative min-h-screen bg-transparent text-cream transition-colors duration-300">
      {/* Live Sakura Night Background */}
      <LiveBackground />

      {/* Subtle Violet Sparkles Around Cursor */}
      <CursorSparkles />

      {/* Floating Background Music Player */}
      <BackgroundMusic />

      <div className="relative z-10 portfolio">
        {/* Floating Tubelight Navigation Bar */}
        <NavBarDemo />

        {/* 01 // Full-viewport Editorial Hero */}
        <Hero />

        {/* 02 // ABOUT - Complete Interactive Monochrome Bento Section */}
        <Bento3Section />

        {/* Main Content Sections */}
        <main className="page-container">

          {/* 03 // SKILLS */}
          <section id="skills" className="section">
            <header className="section-header">
              <div>
                <span className="section-label">03 // Skills</span>
                <h2 className="section-title">Top Skills &amp; Technical Capabilities</h2>
                <p className="text-xs font-mono text-neutral-400 mt-2">
                  // Interactive 3D Cards &bull; Hover to inspect architectural implementation
                </p>
              </div>
            </header>

            {/* 3D Interactive Flipping Skill Cards */}
            <FlippingCardDemo />
          </section>

          {/* 04 // PROJECTS - Unified Single Section with Interactive Orbit & Full Project Details */}
          <section id="projects" className="section">
            <ProjectsRadialGallery />
          </section>

          {/* 05 // EDUCATION */}
          <section id="education" className="section">
            <header className="section-header">
              <div>
                <span className="section-label">05 // Education</span>
                <h2 className="section-title">Education</h2>
                <p className="text-xs font-mono text-neutral-400 mt-2">
                  // Academic Background &bull; Chronological Timeline &bull; 2023 – Present
                </p>
              </div>
            </header>
            <EducationTimeline />
          </section>

          {/* 06 // ACHIEVEMENTS & EXPERIENCE */}
          <section id="achievements" className="section">
            <header className="section-header">
              <div>
                <span className="section-label">06 // Achievements</span>
                <h2 className="section-title">Achievements &amp; Experience</h2>
                <p className="text-xs font-mono text-neutral-400 mt-2">
                  // Academic Projects &bull; Technical Presentations &bull; Professional Industry Exposure
                </p>
              </div>
            </header>

            {/* Features-8 Powered Bento Section */}
            <AchievementsSection />
          </section>

          {/* 07 // RESUME / CURRICULUM VITAE */}
          <section id="resume" className="section">
            <header className="section-header">
              <div>
                <span className="section-label">07 // Resume</span>
                <h2 className="section-title">Curriculum Vitae</h2>
                <p className="text-xs font-mono text-neutral-400 mt-2">
                  // Official Technical Document &bull; Verified Academic &amp; Engineering Release
                </p>
              </div>
            </header>

            {/* Tap to View Resume Modal & 3D GlassCard */}
            <ResumeSection />
          </section>

          {/* 08 // CONTACT */}
          <section id="contact" className="section">
            <header className="section-header">
              <div>
                <span className="section-label">08 // Contact</span>
                <h2 className="section-title">Initiate Contact</h2>
                <p className="text-xs font-mono text-neutral-400 mt-2">
                  // Engineering Inquiries &bull; Collaborative Opportunities &bull; Direct Messaging
                </p>
              </div>
            </header>

            {/* Blueprint Style ContactCard Component */}
            <ContactSection />
          </section>
        </main>
      </div>
    </div>
  );
}
