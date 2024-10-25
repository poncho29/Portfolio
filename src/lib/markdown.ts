import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

export async function getMarkdownContent(slug: string) {
  const filePath = path.join(process.cwd(), 'content', 'blogs', `${slug}.md`);

  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Mediante gray-matter se separa la metadata del contenido
  const { data: metadata, content } = matter(fileContent);

  return {
    metadata,
    content,
  };
}