export interface Project {
  id: string;
  name: string;
  urlImage: string;
  stack: string[];
  isPrivate: boolean;
  urlDemo: string;
  urlCode: string;
  urlDemoVideo?: string;
}
