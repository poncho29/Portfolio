export interface Project {
  id: string;
  name: string;
  /** One or two screenshots. The first one is the cover. */
  images: string[];
  stack: string[];
  url: string;
}
