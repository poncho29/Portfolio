import Link from "next/link";

import { ChevronRight } from "lucide-react";

import { Button } from "../ui";

import { IExperience } from "@/interfaces";

interface Props {
  experience: IExperience;
}

export const CardExperience = ({ experience }: Props) => {
  const { title, company, logoCompany, date, description, href } = experience;

  return (      
    <div
      className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block
      before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-['']
      md:grid-cols-5 md:gap-10 md:space-x-4]"
    >
      <div className="relative pb-12 md:col-span-2">
        <div className="sticky top-0">
          <span className="text-black -left-[42px] absolute rounded-full text-5xl">&bull;</span>

          <h3 className="text-xl font-bold mb-1 lg:text-2xl dark:text-yellow-200">{title}</h3>

          {!logoCompany ? (
            <h4 className="font-semibold text-xl text-gray-600 dark:text-white">{company}</h4>
          ) : (
            logoCompany()
          )}

          <time className="p-0 m-0 text-sm text-muted-foreground dark:text-white/80">{date}</time>
        </div>
      </div>

      <div className="relative flex flex-col gap-2 pb-4  md:col-span-3">
        {description.map((item, index) => (
          <p
            key={index}
            className="text-muted-foreground dark:text-gray-300"
          >
            {item}
          </p>
        ))}
        {/* <p className="text-muted-foreground dark:text-gray-300">{description}</p> */}

        {href && (
          <Button asChild variant="outline">
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-32"
            >
              Saber más&nbsp;
              <ChevronRight />
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}