import { Badge } from '@/components/ui';
import { SectionHeading } from '@/components/common';
import { TechIcon } from '@/components/icons';

import { SKILL_CATEGORIES } from '@/data';
import { getDictionary } from '@/i18n/get-dictionary';
import type { Locale } from '@/i18n/config';
import type { SkillCategoryKey } from '@/interfaces';

interface Props {
  lang: Locale;
}

export const SkillSection = ({ lang }: Props) => {
  const dict = getDictionary(lang);

  const categoryLabels: Record<SkillCategoryKey, string> = dict.sections.skillCategories;

  return (
    <section id="skills" className="mt-16 scroll-mt-28">
      <SectionHeading eyebrow={dict.sections.eyebrow.skills} heading={dict.sections.skills} />

      <div className="grid gap-4 sm:grid-cols-2">
        {SKILL_CATEGORIES.map((category) => (
          <div
            key={category.key}
            className="rounded-xl border border-border/70 bg-muted/30 p-5"
          >
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {categoryLabels[category.key]}
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge
                  key={skill.name}
                  variant="outline"
                  className="cursor-default gap-2 border-border/70 bg-background/60 px-3 py-1.5 text-sm font-medium text-foreground transition-colors duration-200 hover:border-brand/50 hover:bg-muted"
                >
                  <TechIcon name={skill.icon} />
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
