import type { CSSProperties } from 'react';

import { cn } from '@/lib/utils';

import { TECH_ICONS, type TechIconName } from './tech-icons.data';

interface Props {
  name: TechIconName;
  className?: string;
}

/**
 * Renders a brand mark from the Simple Icons dataset.
 *
 * The brand colour is exposed through two custom properties so the three marks
 * whose official colour is near-black (Next.js, Prisma, GitHub) can swap to a
 * light fill in dark mode instead of disappearing against the background.
 *
 * Always decorative: the skill name is rendered as text next to it, so the mark
 * is hidden from assistive technology rather than duplicating that label.
 */
export const TechIcon = ({ name, className }: Props) => {
  const icon = TECH_ICONS[name];

  return (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={
        {
          '--tech-color': icon.color,
          '--tech-color-dark': 'colorDark' in icon ? icon.colorDark : icon.color,
        } as CSSProperties
      }
      className={cn(
        'h-4 w-4 shrink-0 fill-[var(--tech-color)] dark:fill-[var(--tech-color-dark)]',
        className
      )}
    >
      <path d={icon.path} />
    </svg>
  );
};
