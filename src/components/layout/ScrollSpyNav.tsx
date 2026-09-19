'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import type { IMenu } from '@/interfaces';

interface Props {
  links: IMenu[];
}

/**
 * Desktop in-page navigation. Highlights the link whose section is
 * currently in view using IntersectionObserver (no scroll listeners).
 */
export const ScrollSpyNav = ({ links }: Props) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const elements = links
      .map((link) => document.getElementById(link.href.replace('#', '')))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [links]);

  return (
    <ul className="flex items-center gap-1">
      {links.map((link) => {
        const id = link.href.replace('#', '');
        const isActive = activeId === id;

        return (
          <li key={link.id}>
            <Link
              href={link.href}
              aria-current={isActive ? 'true' : undefined}
              className={cn(
                'relative flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2',
                isActive &&
                  "text-foreground after:absolute after:inset-x-3 after:-bottom-[3px] after:h-[2px] after:rounded-full after:bg-brand after:content-['']"
              )}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
