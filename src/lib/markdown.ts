import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

import { IBlogPost } from '@/interfaces';

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

export function getAllBlogs(): IBlogPost[] {
  const blogsDirectory = path.join(process.cwd(), 'content', 'blogs');
  const fileNames = fs.readdirSync(blogsDirectory);

  const blogs: IBlogPost[] = fileNames.map(fileName => {
    const fullPath = path.join(blogsDirectory, fileName);
    const fileContent = fs.readFileSync(fullPath, 'utf8');
    const { data: metadata } = matter(fileContent);

    return {
      slug: fileName.replace(/\.md$/, ''),
      metadata: {
        title: metadata.title || '',
        date: metadata.date || '',
        author: metadata.author || '',
        tags: metadata.tags || [],
        description: metadata.description || '',
        image: metadata.image || '',
      }
    };
  });

  blogs.sort((a, b) => {
    const dateA = new Date(a.metadata.date);
    const dateB = new Date(b.metadata.date);
    
    // Comprobar si las fechas son válidas
    if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
      console.error('Fecha inválida en:', a.metadata.date, b.metadata.date);
      return 0;
    }
    
    return dateB.getTime() - dateA.getTime(); // Orden descendente
  });

  return blogs;
}