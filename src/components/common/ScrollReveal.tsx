'use client';

import { useEffect, useRef, useState } from 'react';

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
export const ScrollReveal = ({ children, className }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

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
