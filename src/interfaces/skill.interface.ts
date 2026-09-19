import type { TechIconName } from "@/components/icons";

export type SkillCategoryKey = "frontend" | "backend" | "databases" | "devops";

export interface ISkill {
  name: string;
  icon: TechIconName;
}

export interface ISkillCategory {
  key: SkillCategoryKey;
  skills: ISkill[];
}
