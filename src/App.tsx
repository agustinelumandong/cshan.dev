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
    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-serif selection:bg-[var(--text)] selection:text-[var(--bg)] pb-20 transition-colors duration-500 ease-in-out">
      <ThemeToggle
        theme={theme}
        onToggle={() => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')}
      />

      <main className="max-w-3xl mx-auto px-6 py-16 sm:py-24 relative">
        <Header theme={theme} />
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
