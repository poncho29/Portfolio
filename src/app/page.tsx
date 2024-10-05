import Image from "next/image";
import Link from "next/link";

import { CardProject } from "@/components/project";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui";

import { PROJECTS, SKILLS } from "../../public/data";

export default function Home() {
  return (
    <>
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 my-10">
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Hola, soy Sebastián Meneses
          </h1>
          <p className="text-xl text-muted-foreground">
            Desarrollador Web con más de 2 años de experiencia especializado en Front-end con ReactJS y NextJS.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="/contact">Contáctame</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/blog">Blog</Link>
            </Button>
          </div>
        </div>
        <Image
          src="/sebastian-profile-300.webp"
          alt="Sebastian Meneses"
          width={300}
          height={300}
          className="rounded-full"
          priority
        />
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-4">Últimos proyectos</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <CardProject key={project.id} project={project} />
          ))}
        </div>
      </section>
      

      <section className="my-16">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>

        <div className="flex overflow-hidden space-x-12 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex space-x-16 animate-loop-scroll">
            {SKILLS.map((skill) => (
              <Badge key={skill.name} variant="secondary" className="min-w-max h-10 text-lg py-1 px-3">
                {skill.name}
              </Badge>
            ))}
          </div>
          <div className="flex space-x-16 animate-loop-scroll" aria-hidden="true">
            {SKILLS.map((skill) => (
              <Badge key={skill.name} variant="secondary" className="min-w-max h-10 text-lg py-1 px-3">
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
