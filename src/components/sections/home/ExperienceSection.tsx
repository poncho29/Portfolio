import { CardExperience } from "@/components/experience";
import { SectionHeading } from "@/components/common";

import { EXPERIENCE } from "@/data";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

interface Props {
  lang: Locale;
}

export const ExperienceSection = ({ lang }: Props) => {
  const dict = getDictionary(lang);

  return (
    <section id="experience" className="mt-16 scroll-mt-28">
      <SectionHeading eyebrow={dict.sections.eyebrow.experience} heading={dict.sections.experience} />

      <ol className="relative">
        {EXPERIENCE.map((item) => (
          <li key={item.id}>
            <CardExperience
              experience={item}
              lang={lang}
              title={dict.experience.items[item.id].title}
              bullets={dict.experience.items[item.id].bullets}
              learnMoreLabel={dict.experience.learnMore}
            />
          </li>
        ))}
      </ol>
    </section>
  )
}
