import Image from "next/image";
import Link from "next/link";

import { ChevronRight } from "lucide-react";

import { Button } from "../ui";

import { AntPackIcon } from "@/components/icons";

import type { IExperience } from "@/interfaces";
import type { Locale } from "@/i18n/config";

interface Props {
  experience: IExperience;
  lang: Locale;
  title: string;
  bullets: string[];
  learnMoreLabel: string;
}

// Both marks render inside the same light chip so they share one visual scale
// and stay legible in dark mode — the VASEprint PNG is black on transparency.
const LOGO_MAP: Record<string, () => JSX.Element> = {
  antpack: () => <AntPackIcon className="h-auto w-24" aria-label="AntPack" role="img" />,
  vaseprint: () => (
    <Image
      src="/logo-vaseprint.png"
      alt="VASEprint"
      width={148}
      height={62}
      className="h-auto w-24"
    />
  ),
};

export const CardExperience = ({ experience, lang, title, bullets, learnMoreLabel }: Props) => {
  const { company, logoKey, date, href } = experience;
  const Logo = logoKey ? LOGO_MAP[logoKey] : undefined;

  return (
    <div className="relative mx-12 pb-12">
      <span
        aria-hidden="true"
        className="absolute -left-[35px] top-0 h-full w-[2px] bg-black/20 dark:bg-white/15"
      />
      <span
        aria-hidden="true"
        className="absolute -left-[43px] top-6 h-4 w-4 rounded-full border-4 border-background bg-brand ring-2 ring-brand/30"
      />

      <div className="grid gap-6 rounded-xl border border-border/60 bg-card/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:grid-cols-5 md:gap-10 lg:p-8">
        <div className="md:col-span-2">
          <div className="sticky top-20">
            <h3 className="mb-3 text-xl font-bold lg:text-2xl">{title}</h3>

            {!Logo ? (
              <h4 className="text-xl font-semibold text-foreground">{company}</h4>
            ) : (
              <div className="flex h-14 w-fit items-center rounded-lg border border-border/40 bg-white px-3 shadow-sm">
                {Logo()}
              </div>
            )}

            <time className="mt-3 block text-sm text-muted-foreground">{date[lang]}</time>
          </div>
        </div>

        <div className="flex flex-col gap-2 md:col-span-3">
          {bullets.map((item, index) => (
            <p
              key={index}
              className="text-muted-foreground dark:text-gray-300"
            >
              {item}
            </p>
          ))}

          {href && (
            <Button asChild variant="outline">
              <Link
                href={href[lang]}
                target="_blank"
                rel="noopener noreferrer"
                className="w-32"
              >
                {learnMoreLabel}&nbsp;
                <ChevronRight aria-hidden="true" focusable="false" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
