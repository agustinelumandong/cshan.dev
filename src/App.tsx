import { useEffect, useState } from 'react';
import { EXPERIENCE, PROJECTS, SKILLS } from './data';
import { ContactCta } from './components/ContactCta';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ThemeToggle } from './components/ThemeToggle';
import type { Theme } from './types';

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const savedTheme = window.localStorage.getItem('theme');
      if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    } catch {
      // Storage can be unavailable in private or restricted browsing.
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem('theme', theme);
    } catch {
      // The selected theme still works for this visit without storage.
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-serif selection:bg-[var(--text)] selection:text-[var(--bg)] pb-20 transition-colors duration-500 ease-in-out">
      <ThemeToggle
        theme={theme}
        onToggle={() => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')}
      />

      <a className="skip-link no-print" href="#main-content">Skip to content</a>
      <main id="main-content" tabIndex={-1} className="max-w-3xl mx-auto px-6 py-16 sm:py-24 relative">
        <Header theme={theme} />
        <nav aria-label="CV sections" className="mb-12 flex flex-wrap justify-between gap-x-6 gap-y-2 border-y border-[var(--border-strong)] py-2 font-sans text-sm no-print">
          <a className="py-2 hover:underline underline-offset-4" href="#experience">Experience</a>
          <a className="py-2 hover:underline underline-offset-4" href="#projects">Projects</a>
          <a className="py-2 hover:underline underline-offset-4" href="#skills">Skills</a>
          <a className="py-2 hover:underline underline-offset-4" href="#education">Education</a>
          <a className="py-2 hover:underline underline-offset-4" href="#contact">Contact</a>
        </nav>
        <ExperienceSection experience={EXPERIENCE} />
        <ProjectsSection projects={PROJECTS} />
        <SkillsSection skills={SKILLS} />
        <EducationSection />
        <ContactCta />
        <Footer />
      </main>
    </div>
  );
}
