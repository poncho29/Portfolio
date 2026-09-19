import type { IMenu } from "@/interfaces";
import type { Dictionary } from "@/i18n/dictionaries/en";

export const getMenuLinks = (dict: Dictionary): IMenu[] => [
  { id: 1, label: dict.nav.experience, href: "#experience" },
  { id: 2, label: dict.nav.projects, href: "#projects" },
  { id: 3, label: dict.nav.skills, href: "#skills" },
  { id: 4, label: dict.nav.education, href: "#education" },
  { id: 5, label: dict.nav.contact, href: "#contact" },
];
