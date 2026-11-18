'use client';

import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

import { cn } from '@/lib/utils';

interface Props {
  labels: {
    toLight: string;
    toDark: string;
  };
  className?: string;
}

const BASE_CLASSES =
  'inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-muted/40 transition-colors duration-200';

const subscribeToNothing = () => () => {};

// false during SSR and hydration, true afterwards: the "has mounted" signal
// without a setState inside an effect (and the extra render it causes).
const useIsClient = () =>
  useSyncExternalStore(
    subscribeToNothing,
    () => true,
    () => false
  );

export const ThemeToggle =({ labels, className }: Props) => {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useIsClient();

  // Before mount the resolved theme is unknown on the server, so render a
  // same-sized inert placeholder instead of null: returning null here would
  // shift the header layout once the button appears.
  if (!mounted) {
    return <div aria-hidden="true" className={cn(BASE_CLASSES, className)} />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? labels.toLight : labels.toDark}
      className={cn(
        BASE_CLASSES,
        'cursor-pointer hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2',
        className
      )}
    >
      {isDark ? (
        <Sun className="h-[18px] w-[18px]" aria-hidden="true" focusable="false" />
      ) : (
        <Moon className="h-[18px] w-[18px]" aria-hidden="true" focusable="false" />
      )}
    </button>
  );
};
