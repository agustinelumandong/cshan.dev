import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import type { Theme } from "../types";

interface HeaderProps {
  theme: Theme;
}

export function Header({ theme }: HeaderProps) {
  return (
    <header id="profile" className="profile-intro mb-10 flex flex-col-reverse items-center gap-8 text-center sm:flex-row sm:items-start sm:text-left">
      <div className="min-w-0 flex-1">
        <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">Information Technology Student · Developer</p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
          Sean Agustine L. Esparagoza
        </h1>
        <section className="mb-4">
          <p className="text-sm text-[var(--body)] leading-relaxed">
            I'm a college student, software engineer, and UI/UX designer
            building scalable web applications with intuitive user experiences.
          </p>
        </section>
        <p className="mb-5 text-sm text-[var(--body)] leading-relaxed">
          My goal is to bring my web development and UI/UX skills to a team where
          I can build useful software, keep learning, and contribute to real projects.
        </p>
        <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2 text-sm font-sans text-[var(--muted)]">
          <span className="flex items-center gap-1">
            <MapPin size={14} aria-hidden="true" /> Philippines
          </span>
          <a
            href="mailto:sean.esparagoza@gmail.com"
            className="flex items-center gap-1 hover:text-[var(--text)] transition-colors"
          >
            <Mail size={14} aria-hidden="true" /> sean.esparagoza@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/seanagustine/"
            className="flex items-center gap-1 hover:text-[var(--text)] transition-colors"
          >
            <Linkedin size={14} aria-hidden="true" /> LinkedIn
          </a>
          <a
            href="https://github.com/agustinelumandong"
            className="flex items-center gap-1 hover:text-[var(--text)] transition-colors"
          >
            <Github size={14} aria-hidden="true" /> GitHub
          </a>
        </div>
      </div>
      <picture className="size-36 shrink-0 overflow-hidden bg-[var(--surface-muted)] sm:size-40">
        <source media="print" srcSet="/images/my-profile-light-1.webp" />
        <img
          src={theme === "light" ? "/images/my-profile-light-1.webp" : "/images/my-profile-dark.webp"}
          alt="Sean Agustine L. Esparagoza"
          className="size-full object-cover"
          width="160"
          height="160"
          fetchPriority="high"
        />
      </picture>
    </header>
  );
}
