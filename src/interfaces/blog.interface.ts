export interface IBlogMetadata {
  title: string;
  date: string;
  author: string;
  tags: string[];
  description: string;
  image?: string; 
}

export interface IBlogPost {
  slug: string;
  metadata: IBlogMetadata;
}