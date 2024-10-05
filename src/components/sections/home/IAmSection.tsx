import Image from 'next/image';
import Link from 'next/link';

import { Linkedin, Github } from 'lucide-react';

import { DownloadButton } from '@/components/common';
import { Button } from '@/components/ui';

export const IAmSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 my-10">
      <div className="space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Hola, soy Sebasti&aacute;n Meneses
        </h1>

        <p className="max-w-3xl text-xl text-muted-foreground">
          Desarrollador Web con más de 2 años de experiencia especializado en Front-end con ReactJS y NextJS.
        </p>

        <div className="flex flex-col gap-y-6 sm:gap-x-4 sm:flex-row">
          <div className="flex gap-x-4">
            <Button asChild>
              <Link href="#contact">Cont&aacute;ctame</Link>
            </Button>

            <DownloadButton
              urlFile='/cv-sebastian-meneses.pdf'
              fileName='cv-sebastian-meneses.pdf'
              buttonText='Descargar CV'
            />
          </div>

          <div className="flex items-center gap-x-4">
            <Link href="https://www.linkedin.com/in/sebastianmeneses29/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="https://github.com/poncho29" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>

      <Image
        src="/sebastian-profile-300.webp"
        alt="Sebastian Meneses"
        width={300}
        height={300}
        className="rounded-full shadow-2xl shadow-black/50"
        priority
      />
    </section>
  )
}
