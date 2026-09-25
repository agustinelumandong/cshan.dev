import { ExternalLink } from 'lucide-react';
import type { Project } from '../types';
import { SectionHeading } from './SectionHeading';

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="mb-16">
      <SectionHeading>Selected Projects</SectionHeading>
      <div className="space-y-10">
        {projects.map((project) => (
          <article key={project.id}>
            <div className="flex items-start gap-4 mb-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-24 sm:w-32 shrink-0 no-print"
                aria-label={`View ${project.title}`}
              >
                <img
                  src={project.previewUrl}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/3] object-cover object-top"
                />
              </a>
              <div className="min-w-0 flex-1">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold break-words hover:underline decoration-2 underline-offset-4"
                >
                  {project.title}
                </a>
                <p className="font-sans text-sm italic text-[var(--muted)] mt-1">{project.tech}</p>
              </div>
            </div>
            <p className="text-[var(--body)] leading-relaxed">{project.description}</p>
          </article>
        ))}
      </div>
      <div className="mt-6">
        <a
          href="https://github.com/agustinelumandong"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-sans text-[var(--subtle)] hover:text-[var(--text)] transition-colors italic hover:translate-x-1 duration-200"
        >
          ...see more on GitHub <ExternalLink size={12} />
        </a>
      </div>
    </section>
  );
}
