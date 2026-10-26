export function ContactCta() {
  return (
    <section id="contact" aria-label="Contact" className="mt-12 text-center border-t border-[var(--border-strong)] pt-8 no-print">
      <h2 className="mb-3 text-xl font-bold">Let’s work together.</h2>
      <p className="mb-5 text-sm text-[var(--body)]">Interested in web development, full-stack applications, and UI/UX design.</p>
      <p className="text-[var(--subtle)] text-sm italic mb-4">
        This portfolio is designed to be printed or saved as a clean PDF.
      </p>
      <a
        href="mailto:sean.esparagoza@gmail.com"
        className="inline-block px-6 py-2 border border-[var(--border-strong)] text-[var(--text)] font-bold text-sm rounded-full hover:bg-[var(--text)] hover:text-[var(--bg)] transition-colors"
      >
        Contact Me
      </a>
      <button
        type="button"
        onClick={() => window.print()}
        className="mx-auto mt-4 block px-4 py-2 text-sm font-sans text-[var(--muted)] underline underline-offset-4 hover:text-[var(--text)]"
      >
        Print / Save PDF
      </button>
    </section>
  );
}
