import { Moon, Sun } from 'lucide-react';
import type { Theme } from '../types';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      onClick={onToggle}
      className="fixed right-4 top-4 sm:right-6 sm:top-6 z-50 inline-flex size-10 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--bg)] text-[var(--text)] shadow-sm transition-colors hover:bg-[var(--surface-muted)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text)] no-print"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
