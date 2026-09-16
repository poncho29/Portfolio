import ScrollToTopButton from "@/components/common/ScrollTopButton";
import { ScrollReveal } from "@/components/common";

import {
  ContactFormSection,
  EducationSection,
  ExperienceSection,
  IAmSection,
  LanguagesSection,
  ProjectSection,
  SkillSection,
} from "@/components/sections";

import type { Locale } from "@/i18n/config";

interface Props {
  params: { lang: Locale };
}

export default function Home({ params }: Props) {
  const { lang } = params;

  return (
    <>
      <ScrollReveal>
        <IAmSection lang={lang} />
      </ScrollReveal>

      <ScrollReveal>
        <ExperienceSection lang={lang} />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectSection lang={lang} />
      </ScrollReveal>

      <ScrollReveal>
        <SkillSection lang={lang} />
      </ScrollReveal>

      <ScrollReveal>
        <EducationSection lang={lang} />
      </ScrollReveal>

      <ScrollReveal>
        <LanguagesSection lang={lang} />
      </ScrollReveal>

      <ScrollReveal>
        <ContactFormSection lang={lang} />
      </ScrollReveal>

      <ScrollToTopButton />
    </>
  );
}
