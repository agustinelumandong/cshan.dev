import { SectionHeading } from './SectionHeading';

export function EducationSection() {
  return (
    <section>
      <SectionHeading className="mb-6">Education</SectionHeading>
      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
          <h3 className="text-lg font-bold">Davao Del Norte State College</h3>
          <span className="font-sans text-sm font-medium text-[var(--muted)]">Aug 2024 – Present</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
          <span className="font-serif italic text-[var(--text-soft)]">Bachelor of Information Technology</span>
          <span className="font-sans text-sm text-[var(--muted)]">Panabo City, Davao del Norte</span>
        </div>
      </div>
    </section>
  );
}
