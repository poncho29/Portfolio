import type { Project } from "@/interfaces";

export const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Fundación Vincent',
    urlImage: '/projects/proyecto-fundacion-vincent.webp',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Nest.js', 'TypeORM', 'PostgreSQL'],
    isPrivate: true,
    urlDemo: 'https://fundacionvincent.vercel.app/',
    urlCode: 'https://github.com/poncho29/vincent-app',
    urlDemoVideo: 'https://res.cloudinary.com/dow9vjgzp/video/upload/v1731029988/videos/demo-vincent_sozqgk.mp4'
  },
  {
    id: '2',
    name: 'Portafolio de Diseñadora',
    urlImage: '/projects/proyecto-portafolio-desing.webp',
    stack: ['React.js', 'TypeScript', 'Tailwind'],
    isPrivate: false,
    urlDemo: 'https://laura-design.vercel.app/',
    urlCode: 'https://github.com/poncho29/laura-design',
  },
  {
    id: '3',
    name: 'Mini Apps con React.js',
    urlImage: '/projects/proyecto-youtube-tutorials.webp',
    stack: ['React.js', 'JavaScript', 'Tailwind'],
    isPrivate: false,
    urlDemo: 'https://miniappsreact.vercel.app/',
    urlCode: 'https://github.com/poncho29/youtube-tutorials',
  }
];
