'use client';

import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Menu, X } from 'lucide-react';

import { LanguageSwitcher } from './LanguageSwitcher';

import type { IMenu } from '@/interfaces';
import type { Locale } from '@/i18n/config';

interface Labels {
  openMenu: string;
  closeMenu: string;
  mainNavigation: string;
  languageSwitcherLabel: string;
}

interface Props {
  lang: Locale;
  menuLinks: IMenu[];
  labels: Labels;
}

/**
 * Accessible disclosure menu for small viewports. Built on Radix Dialog,
 * which already provides focus trapping, Escape-to-close and focus
 * restoration to the trigger — we only need to close on link click.
 */
export const MobileNav = ({ lang, menuLinks, labels }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        aria-label={open ? labels.closeMenu : labels.openMenu}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border/60 text-foreground transition-colors duration-200 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 md:hidden"
      >
        {open ? (
          <X aria-hidden="true" focusable="false" className="h-5 w-5" />
        ) : (
          <Menu aria-hidden="true" focusable="false" className="h-5 w-5" />
        )}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 md:hidden" />
        <Dialog.Content
          id="mobile-nav-panel"
          aria-label={labels.mainNavigation}
          className="fixed inset-x-4 top-20 z-50 rounded-xl border border-border/60 bg-background/95 p-4 shadow-xl backdrop-blur-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2 md:hidden"
        >
          <Dialog.Title className="sr-only">{labels.mainNavigation}</Dialog.Title>
          <Dialog.Description className="sr-only">{labels.mainNavigation}</Dialog.Description>

          <nav aria-label={labels.mainNavigation}>
            <ul className="flex flex-col gap-1">
              {menuLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-11 items-center rounded-md px-3 text-base font-medium text-foreground transition-colors duration-200 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-4 border-t border-border/60 pt-4">
            <LanguageSwitcher lang={lang} label={labels.languageSwitcherLabel} />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
