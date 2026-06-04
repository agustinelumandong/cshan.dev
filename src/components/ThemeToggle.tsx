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
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 inline-flex size-10 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--bg)] text-[var(--text)] shadow-sm transition-colors hover:bg-[var(--surface-muted)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text)] no-print"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
