import Link from 'next/link';
import { Linkedin, Github } from 'lucide-react';

import { cn } from '@/lib/utils';

interface Props {
  linkedinLabel: string;
  githubLabel: string;
  className?: string;
  iconClassName?: string;
}

export const LINKEDIN_URL = 'https://www.linkedin.com/in/sebastianmeneses29/';
export const GITHUB_URL = 'https://github.com/poncho29';

const LINK_CLASSES =
  'flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-200 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2';

/**
 * LinkedIn + GitHub links, shared by the hero, the contact section and the
 * footer so the URLs, labels and touch-target sizing live in exactly one
 * place instead of three copies.
 */
export const SocialLinks = ({ linkedinLabel, githubLabel, className, iconClassName }: Props) => (
  <div className={cn('flex items-center gap-x-4', className)}>
    <Link
      href={LINKEDIN_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={linkedinLabel}
      className={LINK_CLASSES}
    >
      <Linkedin aria-hidden="true" focusable="false" className={cn('h-6 w-6', iconClassName)} />
    </Link>
    <Link
      href={GITHUB_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={githubLabel}
      className={LINK_CLASSES}
    >
      <Github aria-hidden="true" focusable="false" className={cn('h-6 w-6', iconClassName)} />
    </Link>
  </div>
);
