'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';

import { cn } from '@/lib/utils';

interface Props {
  children: React.ReactNode;
  className?: string;
}

/**
 * Fades/slides children in on first intersection. A no-op under
 * `prefers-reduced-motion: reduce` (handled entirely via the `motion-safe:`
 * variant, so content is never stuck invisible) and reveals immediately if
 * IntersectionObserver is unavailable.
 */
const subscribeToNothing = () => () => {};

// The server assumes support so markup matches the common case; browsers
// without IntersectionObserver then switch to "visible" right after hydration.
const useCanObserve = () =>
  useSyncExternalStore(
    subscribeToNothing,
    () => typeof IntersectionObserver !== 'undefined',
    () => true
  );

export const ScrollReveal = ({ children, className }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const canObserve = useCanObserve();
  const [hasIntersected, setHasIntersected] = useState(false);
  const isVisible = hasIntersected || !canObserve;

  useEffect(() => {
    const node = ref.current;
    if (!node || !canObserve) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [canObserve]);

  return (
    <div
      ref={ref}
      className={cn(
        'motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out',
        isVisible
          ? 'motion-safe:translate-y-0 motion-safe:opacity-100'
          : 'motion-safe:translate-y-6 motion-safe:opacity-0',
        className
      )}
    >
      {children}
    </div>
  );
};
