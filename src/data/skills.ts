import type { ISkillCategory } from "@/interfaces";

export const SKILL_CATEGORIES: ISkillCategory[] = [
  {
    key: "frontend",
    skills: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TailwindCSS", icon: "tailwindcss" },
    ],
  },
  {
    key: "backend",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Nest.js", icon: "nestjs" },
    ],
  },
  {
    key: "databases",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "Prisma", icon: "prisma" },
    ],
  },
  {
    key: "devops",
    skills: [
      { name: "Docker", icon: "docker" },
      { name: "Nginx", icon: "nginx" },
      { name: "n8n", icon: "n8n" },
      { name: "Git/GitHub", icon: "github" },
    ],
  },
];
