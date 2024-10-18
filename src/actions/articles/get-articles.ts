import { ArticleResponse } from "@/interfaces";
import { query } from "@/lib/strapi";

const STRAPI_HOST = process.env.STRAPI_HOST;

const URL = 'articles?populate[cover][fields][0]=url&populate=author';

export async function getArticles() {
  const { data, meta, error }: ArticleResponse = await query(URL);

  if (data && !error) {
    const articles = data.map((article) => {
      return {
        ...article,
        cover: `${STRAPI_HOST}${article.cover.url}`
      }
    });
  
    return { data: articles, meta, error: null };
  }

  return { data: [], meta: {}, error };
}