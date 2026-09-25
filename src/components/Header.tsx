import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import type { Theme } from "../types";

interface HeaderProps {
  theme: Theme;
}

export function Header({ theme }: HeaderProps) {
  return (
    <header className="mb-8 flex flex-col-reverse items-center gap-8 text-center sm:flex-row sm:items-start sm:text-left">
      <div className="min-w-0 flex-1">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
          Sean Agustine L. Esparagoza
        </h1>
        <section className="mb-4">
          <p className="text-sm text-[var(--body)] leading-relaxed">
            I'm a college student, software engineer, and UI/UX designer
            building scalable web applications with intuitive user experiences.
          </p>
        </section>
        <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2 text-sm font-sans text-[var(--muted)]">
          <span className="flex items-center gap-1">
            <MapPin size={14} /> Philippines
          </span>
          <a
            href="mailto:sean.esparagoza@gmail.com"
            className="flex items-center gap-1 hover:text-[var(--text)] transition-colors"
          >
            <Mail size={14} /> sean.esparagoza@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/seanagustine/"
            className="flex items-center gap-1 hover:text-[var(--text)] transition-colors"
          >
            <Linkedin size={14} /> LinkedIn
          </a>
          <a
            href="https://github.com/agustinelumandong"
            className="flex items-center gap-1 hover:text-[var(--text)] transition-colors"
          >
            <Github size={14} /> GitHub
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
        />
      </picture>
    </header>
  );
}
