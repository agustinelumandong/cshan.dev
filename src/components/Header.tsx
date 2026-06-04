import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export function Header() {
  return (
    <header className="mb-8 text-center sm:text-left">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">Sean Agustine L. Esparagoza</h1>
      <section className="mb-4">
        <p className="text-sm text-[var(--body)] leading-relaxed">
          I'm a college student and passionate software engineer & UI/UX designer, still learning. I love collaborating with AI tools to enhance my workflow, conducting research, and exploring new technologies to build scalable web applications with intuitive user experiences.
        </p>
      </section>
      <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2 text-sm font-sans text-[var(--muted)]">
        <span className="flex items-center gap-1">
          <MapPin size={14} /> Philippines
        </span>
        <a href="mailto:sean.esparagoza@gmail.com" className="flex items-center gap-1 hover:text-[var(--text)] transition-colors">
          <Mail size={14} /> sean.esparagoza@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/seanagustine/" className="flex items-center gap-1 hover:text-[var(--text)] transition-colors">
          <Linkedin size={14} /> LinkedIn
        </a>
        <a href="https://github.com/agustinelumandong" className="flex items-center gap-1 hover:text-[var(--text)] transition-colors">
          <Github size={14} /> GitHub
        </a>
      </div>
    </header>
  );
}
