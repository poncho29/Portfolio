import Link from 'next/link';

import { Linkedin, Github } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Sebastian Meneses</h2>
            <p className="text-sm text-muted-foreground">
              Desarrollador Web con más de 2 años de experiencia especializado en Front-end con ReactJS y NextJS.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Enlaces</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Redes Sociales</h2>
            <div className="flex space-x-4">
              <a href="https://github.com/poncho29" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/sebastianmeneses29/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sebastian Meneses. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}