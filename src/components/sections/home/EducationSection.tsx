import { SectionHeading } from "@/components/common";

import { EDUCATION } from "@/data";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

interface Props {
  lang: Locale;
}

export const EducationSection = ({ lang }: Props) => {
  const dict = getDictionary(lang);

  return (
    <section id="education" className="mt-16 scroll-mt-28">
      <SectionHeading eyebrow={dict.sections.eyebrow.education} heading={dict.sections.education} />

      <ul className="relative space-y-6">
        {EDUCATION.map((item) => (
          <li
            key={item.id}
            className="relative pl-6 border-l-2 border-black/20 dark:border-white/15"
          >
            <h3 className="text-xl font-bold lg:text-2xl">
              {dict.education.items[item.id].degree}
            </h3>
            <h4 className="font-semibold text-xl text-gray-600 dark:text-white">
              {item.institution}, {item.country}
            </h4>
            <time className="p-0 m-0 text-sm text-muted-foreground dark:text-white/80">
              {item.year}
            </time>
          </li>
        ))}
      </ul>
    </section>
  )
}
