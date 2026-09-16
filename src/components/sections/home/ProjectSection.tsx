import { CardProject } from '@/components/project';
import { SectionHeading } from '@/components/common';

import { PROJECTS } from '@/data';
import { getDictionary } from '@/i18n/get-dictionary';
import type { Locale } from '@/i18n/config';

interface Props {
  lang: Locale;
}

export const ProjectSection = ({ lang }: Props) => {
  const dict = getDictionary(lang);

  return (
    <section id="projects" className="mt-16 scroll-mt-28">
      <SectionHeading eyebrow={dict.sections.eyebrow.projects} heading={dict.sections.projects} />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <CardProject
            key={project.id}
            project={project}
            description={dict.projects.items[project.id].description}
            labels={{
              viewProject: dict.projects.viewProjectButton,
              viewDemo: dict.projects.viewDemoButton,
              viewCode: dict.projects.viewCodeButton,
            }}
          />
        ))}
      </div>
    </section>
  )
}
