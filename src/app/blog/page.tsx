import Image from "next/image";
import Link from "next/link";

import { getAllBlogs } from "@/lib";

import { Button } from "@/components/ui";

export default async function BlogPage() {
  const blogs = getAllBlogs();

  return (
    <section className="my-8">
      <h1 className="text-3xl font-bold text-center">Artículos</h1>
      <hr className="w-14 h-1 mt-2 mb-4 mx-auto bg-black" />

      <h4 className="max-w-3xl mx-auto text-center">
        Estos son algunos artículos sobre diversos temas relacionados con el desarrollo web, encontrarás guías, tutoriales, códigos y algunas reflexiones personales.
      </h4>

      <div className="grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <article key={blog.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={blog.metadata.image || ""}
              alt={blog.metadata.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="h-12 text-xl leading-5 font-semibold mb-1">{blog.metadata.title}</h2>
              <p className="h-12 text-gray-600 leading-5 mb-4">{blog.metadata.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                <span>{blog.metadata.date}</span>
                <span>{blog.metadata.author}</span>
              </div>
              <Button asChild>
                <Link href={`/blog/${blog.slug}`}>
                  Ver más
                </Link>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}