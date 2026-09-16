import Image from 'next/image';
import Link from 'next/link';

import { MapPin } from 'lucide-react';

import { DownloadButton, SocialLinks } from '@/components/common';
import { Button } from '@/components/ui';

import { getDictionary } from '@/i18n/get-dictionary';
import type { Locale } from '@/i18n/config';

interface Props {
  lang: Locale;
}

export const IAmSection = ({ lang }: Props) => {
  const dict = getDictionary(lang);

  return (
    <section className="relative isolate py-10">
      <div aria-hidden="true" className="hero-aurora" />

      <div className="flex w-full flex-col-reverse items-center justify-between gap-10 md:flex-row">
        <div className="w-full min-w-0 space-y-6 md:w-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur-sm">
            <MapPin aria-hidden="true" focusable="false" className="h-3.5 w-3.5 text-brand" />
            {dict.hero.location}
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            {dict.hero.heading}
          </h1>

          <p className="max-w-3xl text-xl text-muted-foreground">
            {dict.hero.subtitle}
          </p>

          <div className="flex flex-col gap-y-6 sm:flex-row sm:gap-x-4">
            <div className="flex gap-x-4">
              <Button asChild>
                <Link href="#contact">{dict.hero.contactButton}</Link>
              </Button>

              <DownloadButton
                urlFile='/cv-sebastian-meneses.pdf'
                fileName='cv-sebastian-meneses.pdf'
                buttonText={dict.hero.downloadButton}
              />
            </div>

            <SocialLinks linkedinLabel="LinkedIn" githubLabel="GitHub" />
          </div>
        </div>

        <div className="hero-photo-frame shrink-0">
          <Image
            src="/sebastian-brisbane-800.webp"
            alt={dict.hero.imageAlt}
            width={300}
            height={300}
            sizes="(max-width: 640px) 220px, 300px"
            className="rounded-full border-4 border-background shadow-2xl shadow-black/30"
            priority
          />
        </div>
      </div>
    </section>
  )
}
