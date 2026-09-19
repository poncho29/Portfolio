import type { Project } from "@/interfaces";

export const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Vasetec',
    images: ['/projects/vasetec-1.webp', '/projects/vasetec-2.webp'],
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma', 'PostgreSQL', 'NextAuth', 'Docker'],
    url: 'https://vasetec.net',
  },
  {
    id: '2',
    name: 'Vaseprint',
    images: ['/projects/vaseprint-1.webp', '/projects/vaseprint-2.webp'],
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma', 'PostgreSQL', 'NextAuth', 'Docker'],
    url: 'https://vaseprint.net',
  },
  {
    id: '3',
    name: 'Vafinca',
    images: ['/projects/vafinca-1.webp', '/projects/vafinca-2.webp'],
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma', 'PostgreSQL', 'Docker'],
    url: 'https://vafinca.com',
  },
  {
    id: '4',
    name: 'SECOP Alertas',
    images: ['/projects/secop-1.webp', '/projects/secop-2.webp'],
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma', 'PostgreSQL', 'Telegram API', 'Docker'],
    url: 'https://secopalertas.vaseprint.net/auth/login',
  },
  {
    id: '5',
    name: 'Legado Grupo IC',
    images: ['/projects/legado-1.webp', '/projects/legado-2.webp'],
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma', 'PostgreSQL', 'Resend', 'Docker'],
    url: 'https://legadogrupoic.com/',
  },
  {
    id: '6',
    name: 'Colfood',
    images: ['/projects/colfood-1.webp'],
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Resend', 'Docker'],
    url: 'https://www.colfood.com/',
  },
  {
    id: '7',
    name: 'Portafolio de Diseñadora',
    images: ['/projects/proyecto-portafolio-desing.webp'],
    stack: ['React', 'TypeScript', 'Vite', 'Bootstrap'],
    url: 'https://laura-design.vercel.app/',
  },
];
