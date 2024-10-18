import { ErrorStrapi, Meta } from "./strapi.interface";

export interface ArticleResponse {
  data: ArticleData[] | null;
  meta: Meta;
  error: ErrorStrapi | null;
}

export interface ArticleData {
  id:          number;
  documentId:  string;
  title:       string;
  description: string;
  slug:        string;
  cover:       Cover;
  author:      Author;
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
}

export interface Cover {
  id:         number;
  documentId: string;
  url:        string;
}

export interface Author {
  id: number;
  documentId: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}
