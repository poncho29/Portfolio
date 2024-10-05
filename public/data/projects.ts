import { Project } from "@/interfaces";

export const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Fundación Vincent',
    description: 'Sitio web de la Fundación vincent, que busca promover la adopción de animales.',
    urlImage: '/projects/proyecto-fundacion-vincent.webp',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Nest.js', 'TypeORM', 'PostgreSQL'],
    urlDemo: 'https://vincent-app-pi.vercel.app/',
    urlCode: 'https://github.com/poncho29/vincent-app',
  },
  {
    id: '2',
    name: 'Portafolio de Diseñadora',
    description: 'Pagina web y portafolio para la diseñadora Laura Martinez.',
    urlImage: '/projects/proyecto-portafolio-desing.webp',
    stack: ['React.js', 'TypeScript', 'Tailwind'],
    urlDemo: 'https://laura-design.vercel.app/',
    urlCode: 'https://github.com/poncho29/laura-design',
  },
  {
    id: '3',
    name: 'Tutoriales de Youtube',
    description: 'Este proyecto recopila el codigo de los tutoriales de youtube enfocado en React.js.',
    urlImage: '/projects/proyecto-youtube-tutorials.webp',
    stack: ['React.js', 'JavaScript', 'Tailwind'],
    urlDemo: 'https://youtube-tutorials-steel.vercel.app/',
    urlCode: 'https://github.com/poncho29/youtube-tutorials',
  }
];
