interface SectionHeadingProps {
  children: string;
  className?: string;
}

export function SectionHeading({ children, className = 'mb-8' }: SectionHeadingProps) {
  return (
    <h2 className={`text-xl font-bold uppercase tracking-wider border-b-2 border-[var(--border-strong)] pb-2 ${className}`}>
      {children}
    </h2>
  );
}
