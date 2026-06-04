export function ContactCta() {
  return (
    <section className="mt-12 text-center border-t border-[var(--border)] pt-8 no-print">
      <p className="text-[var(--subtle)] text-sm italic mb-4">
        This portfolio is designed to be printed or saved as a clean PDF.
      </p>
      <a
        href="mailto:sean.esparagoza@gmail.com"
        className="inline-block px-6 py-2 border border-[var(--border-strong)] text-[var(--text)] font-bold text-sm rounded-full hover:bg-[var(--text)] hover:text-[var(--bg)] transition-colors"
      >
        Contact Me
      </a>
    </section>
  );
}
