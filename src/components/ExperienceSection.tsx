import { ExternalLink } from 'lucide-react';
import type { Experience } from '../types';
import { SectionHeading } from './SectionHeading';

interface ExperienceSectionProps {
  experience: Experience[];
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section className="mb-16">
      <SectionHeading>Work Experience</SectionHeading>
      <div className="space-y-12">
        {experience.map((job) => (
          <div key={job.id} className="group">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
              <h3 className="text-xl font-bold">{job.company}</h3>
              <span className="font-sans text-sm font-medium text-[var(--muted)]">{job.period}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4">
              <span className="font-serif italic text-lg text-[var(--text-soft)]">{job.role}</span>
              <span className="font-sans text-sm text-[var(--muted)]">{job.location}</span>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-2 text-[var(--body)] leading-relaxed mb-3">
              {job.description.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-sans text-[var(--subtle)] hover:text-[var(--text)] transition-colors italic hover:translate-x-1 duration-200"
        >
          ...see more on LinkedIn <ExternalLink size={12} />
        </a>
      </div>
    </section>
  );
}
