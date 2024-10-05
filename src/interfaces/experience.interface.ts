export interface IExperience {
  id: number;
  title: string;
  company: string;
  logoCompany?: () => JSX.Element;
  date: string;
  description: string[];
  href: string;
}
