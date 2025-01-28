import ScrollToTopButton from "@/components/common/ScrollTopButton";

import { ContactFormSection, ExperienceSection, IAmSection, ProjectSection, SkillSection } from "@/components/sections";

export default function Home() {
  return (
    <>
      <IAmSection />

      <ExperienceSection />

      <ProjectSection />
      
      <SkillSection />

      <ContactFormSection />

      <ScrollToTopButton />
    </>
  );
}
