import Image from "next/image";
import Link from "next/link";

import { AlertCircle } from "lucide-react";

import { getArticles } from "@/actions";

import { Button } from "@/components/ui";

export default async function BlogPage() {

  const { data, error } = await getArticles();

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded" role="alert">
          <div className="flex items-center">
            <AlertCircle className="h-6 w-6 mr-2" />
            <p className="font-bold">Error</p>
          </div>
          <p>{error.message}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <section className="my-8">
      <h1 className="text-3xl font-bold mb-12 text-center">Aprendamos Juntos</h1>

      {data.length === 0 ? (
        <p className="text-center text-gray-600">No articles found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={article.cover}
                alt={article.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="h-12 text-xl leading-5 font-semibold mb-1">{article.title}</h2>
                <p className="h-12 text-gray-600 leading-5 mb-4">{article.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                  <span>{new Date('2024-10-18T01:28:20.301Z').toLocaleDateString('es-ES')}</span>
                  <span>{article.author.name}</span>
                </div>
                <Button asChild>
                  <Link href={`/blog/${article.id}`}>
                    Ver más
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}