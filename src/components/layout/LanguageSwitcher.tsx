'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { locales, type Locale } from '@/i18n/config';

interface Props {
  lang: Locale;
  label: string;
  /**
   * When true, renders without its own border/background/padding so it can
   * be nested inside another bordered container (e.g. the desktop header's
   * controls cluster) without doubling up the chrome.
   */
  bare?: boolean;
}

const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
};

const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

/**
 * Persists the visitor's chosen locale so a later visit to the bare domain
 * (no locale segment) is honoured by the middleware instead of always
 * falling back to the default/negotiated locale.
 */
const persistLocaleCookie = (locale: Locale) => {
  document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=${LOCALE_COOKIE_MAX_AGE}; SameSite=Lax`;
};

/**
 * Segmented pill toggle. Real <Link> elements (works without JS, crawlable),
 * with a decorative sliding indicator behind the active option. The
 * indicator animates via `transform` only and is skipped entirely under
 * `prefers-reduced-motion: reduce`.
 */
export const LanguageSwitcher = ({ lang, label, bare = false }: Props) => {
  const pathname = usePathname() || `/${lang}`;
  const segments = pathname.split('/').filter(Boolean);
  const rest = segments.slice(1).join('/');
  const activeIndex = Math.max(locales.indexOf(lang), 0);

  return (
    <nav aria-label={label}>
      <div
        className={cn(
          'relative inline-flex items-center rounded-full',
          bare ? 'h-9' : 'border border-border bg-muted p-1'
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'absolute rounded-full bg-background shadow-sm transition-transform duration-300 motion-reduce:transition-none',
            bare ? 'inset-y-0 left-0 w-1/2' : 'inset-y-1 left-1 w-[calc(50%-0.25rem)]'
          )}
          style={{ transform: `translateX(${activeIndex * 100}%)` }}
        />

        <ul className="relative z-10 flex items-center">
          {locales.map((locale) => {
            const href = rest ? `/${locale}/${rest}` : `/${locale}`;
            const isActive = locale === lang;

            return (
              <li key={locale}>
                <Link
                  href={href}
                  aria-current={isActive ? 'page' : undefined}
                  aria-label={LOCALE_NAMES[locale]}
                  onClick={() => persistLocaleCookie(locale)}
                  className={cn(
                    'flex min-h-9 min-w-9 items-center justify-center rounded-full px-3 text-xs font-semibold uppercase tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2',
                    isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {locale}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
