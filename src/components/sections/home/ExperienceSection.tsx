import { CardExperience } from "@/components/experience";

import { AntPackIcon } from "@/components/icons";

import { IExperience } from "@/interfaces";

export const EXPERIENCE: IExperience[] = [
  {
    id: 1,
    title: "Desarrollador Front-end",
    company: "AntPack",
    logoCompany: () => <AntPackIcon width={160} />,
    description: [
      "En Antpack, me encargo de maquetar interfaces gráficas responsivas, optimizando tanto la experiencia de usuario como el rendimiento de la página o aplicación. También realizo integraciones con servicios REST o GraphQL utilizando tecnologías como ReactJS y NextJS.",
      "La página web de Antpack es un ejemplo de mi trabajo que puede ver dando click en el siguiente botón."
    ],
    date: "2022 - Presente",
    href: "https://antpack.co/es"
  }
];

export const ExperienceSection = () => {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-8">Experiencia laboral</h2>

      <ol className="relative">
        {EXPERIENCE.map((item) => (
          <li key={item.id}>
            <CardExperience experience={item} />
          </li>
        ))}          
      </ol>
    </section>
  )
}
