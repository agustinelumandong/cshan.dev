import type { SkillGroup } from '../types';
import { SectionHeading } from './SectionHeading';

interface SkillsSectionProps {
  skills: SkillGroup[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="mb-16">
      <SectionHeading className="mb-6">Technical Skills</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-[var(--body)]">
        {skills.map((skill) => (
          <div key={skill.id}>
            <span className="font-bold block mb-1">{skill.title}</span>
            <p>{skill.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
