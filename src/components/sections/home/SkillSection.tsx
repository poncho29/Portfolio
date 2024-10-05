import { Badge } from '@/components/ui';

import { SKILLS } from '../../../../public/data';

export const SkillSection = () => {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>

      <div className="flex overflow-hidden space-x-12 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex space-x-8 animate-loop-scroll lg:space-x-16">
          {SKILLS.map((skill) => (
            <Badge key={skill.name} variant="secondary" className="min-w-max h-10 text-lg py-1 px-3 cursor-default">
              {skill.name}
            </Badge>
          ))}
        </div>
        <div className="flex space-x-8 animate-loop-scroll lg:space-x-16" aria-hidden="true">
          {SKILLS.map((skill) => (
            <Badge key={skill.name} variant="secondary" className="min-w-max h-10 text-lg py-1 px-3 cursor-default">
              {skill.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
