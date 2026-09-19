import { NavLink } from './NavLink';

import { SocialLinks } from '@/components/common';
import { getMenuLinks } from '@/data';
import { getDictionary } from '@/i18n/get-dictionary';
import type { Locale } from '@/i18n/config';

interface Props {
  lang: Locale;
}

export const Footer = ({ lang }: Props) => {
  const dict = getDictionary(lang);
  const menuLinks = getMenuLinks(dict);

  return (
    <footer className="border-t bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 p-4 sm:flex-row sm:justify-between">
        <nav aria-label={dict.nav.mainNavigation}>
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {menuLinks.map((link) => (
              <li key={link.id}>
                <NavLink href={link.href} label={link.label} />
              </li>
            ))}
          </ul>
        </nav>

        <SocialLinks linkedinLabel="LinkedIn" githubLabel="GitHub" />
      </div>

      <div className="text-center pb-3">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sebastián Meneses.
          <span className="hidden sm:inline">&nbsp;</span>
          <br className="sm:hidden" />
          {dict.footer.rights}
        </p>
      </div>
    </footer>
  )
}
