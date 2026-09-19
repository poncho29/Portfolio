import { ThemeToggle } from "@/components/common";
import { ScrollSpyNav } from "./ScrollSpyNav";
import { MobileNav } from "./MobileNav";
import { LanguageSwitcher } from "./LanguageSwitcher";

import { getMenuLinks } from "@/data";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

interface Props {
  lang: Locale;
}

export const Header = ({ lang }: Props) => {
  const dict = getDictionary(lang);
  const menuLinks = getMenuLinks(dict);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
      {/* Everything is centred as a single group: the hero already carries the
          name as an h1, so the header holds navigation and controls only. */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-center px-6 xl:px-0">
        <div className="flex items-center gap-3">
          <nav aria-label={dict.nav.mainNavigation} className="hidden md:block">
            <ScrollSpyNav links={menuLinks} />
          </nav>

          {/* Controls cluster (desktop only): language switcher + theme
              toggle read as one cohesive unit, sharing a border, radius and
              height, separated by a thin divider. Nav links stay outside
              this cluster. */}
          <div className="hidden items-center gap-1 rounded-full border border-border bg-muted p-1 md:flex">
            <LanguageSwitcher lang={lang} label={dict.nav.languageSwitcherLabel} bare />

            <span aria-hidden="true" className="h-5 w-px bg-border" />

            <ThemeToggle
              className="h-9 w-9 border-0 bg-transparent hover:bg-background"
              labels={{
                toLight: dict.nav.themeToLight,
                toDark: dict.nav.themeToDark,
              }}
            />
          </div>

          {/* Mobile: the theme toggle stays outside the disclosure menu
              (unchanged behaviour), the desktop cluster above takes over
              at the md breakpoint. */}
          <ThemeToggle
            className="md:hidden"
            labels={{
              toLight: dict.nav.themeToLight,
              toDark: dict.nav.themeToDark,
            }}
          />

          <MobileNav
            lang={lang}
            menuLinks={menuLinks}
            labels={{
              openMenu: dict.nav.openMenu,
              closeMenu: dict.nav.closeMenu,
              mainNavigation: dict.nav.mainNavigation,
              languageSwitcherLabel: dict.nav.languageSwitcherLabel,
            }}
          />
        </div>
      </div>
    </header>
  )
}
