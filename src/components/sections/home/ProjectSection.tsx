import { CardProject } from '@/components/project';

import { PROJECTS } from '../../../../public/data';

export const ProjectSection = () => {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-4">Últimos proyectos</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
