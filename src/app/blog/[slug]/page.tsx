
import { Metadata } from 'next';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import { getMarkdownContent } from '@/lib';

import styles from './blog.module.css';

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { metadata } = await getMarkdownContent(params.slug);

  return {
    title: metadata.title,
    description: metadata.description || '',
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { metadata, content } = await getMarkdownContent(params.slug);

  return (
    <>
      <div className='max-w-5xl mx-auto text-center mb-8 border-b-[1px] border-gray-200'>
        <h1 className='text-4xl font-bold mb-2'>{metadata.title}</h1>
        <p className='text-gray-600 mb-2'>Escrito por {metadata.author} el {metadata.date}</p>
      </div>

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        className={styles.blogContent}
      >
        {content}
      </ReactMarkdown>
    </>
  );
}