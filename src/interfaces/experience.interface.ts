import type { Locale } from "@/i18n/config";

export interface IExperience {
  id: number;
  company: string;
  logoKey?: string;
  date: Record<Locale, string>;
  href?: string;
}
