import ScrollToTopButton from "@/components/common/ScrollTopButton";
import { GITHUB_URL, LINKEDIN_URL, ScrollReveal } from "@/components/common";

import {
  ContactFormSection,
  EducationSection,
  ExperienceSection,
  IAmSection,
  LanguagesSection,
  ProjectSection,
  SkillSection,
} from "@/components/sections";

import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { SITE_URL } from "@/lib/site";

interface Props {
  params: { lang: Locale };
}

export default function Home({ params }: Props) {
  const { lang } = params;
  const dict = getDictionary(lang);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sebastián Meneses",
    jobTitle: dict.metadata.role,
    url: `${SITE_URL}/${lang}`,
    image: `${SITE_URL}/sebastian-brisbane-800.webp`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brisbane",
      addressCountry: "AU",
    },
    sameAs: [LINKEDIN_URL, GITHUB_URL],
    knowsLanguage: ["es", "en"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />

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

      <ScrollToTopButton label={dict.nav.scrollToTop} />
    </>
  );
}
