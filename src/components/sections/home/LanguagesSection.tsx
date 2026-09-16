import { SectionHeading } from "@/components/common";

import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

interface Props {
  lang: Locale;
}

export const LanguagesSection = ({ lang }: Props) => {
  const dict = getDictionary(lang);

  return (
    <section className="mt-16">
      <SectionHeading eyebrow={dict.sections.eyebrow.languages} heading={dict.sections.languages} />

      <ul className="space-y-2">
        {dict.languages.items.map((item) => (
          <li key={item} className="text-muted-foreground dark:text-gray-300">
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
