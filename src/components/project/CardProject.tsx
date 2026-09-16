import Image from 'next/image';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui';

import type { Project } from '@/interfaces';

interface Props {
  project: Project;
  description: string;
  labels: {
    viewProject: string;
    viewDemo: string;
    viewCode: string;
  };
}

export const CardProject = ({ project, description, labels }: Props) => {
  const { name, urlImage, stack, isPrivate, urlDemo, urlCode, urlDemoVideo } = project

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="relative mb-4 overflow-hidden rounded-md border border-border/60">
          <Image
            src={urlImage}
            alt={`Project ${name}`}
            width={400}
            height={200}
            className="mx-auto transition-transform duration-300 group-hover:scale-105"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>

        <div className="h-14 flex flex-wrap gap-2 mb-4">
          {stack.map((item) => (
            <Badge
              key={item}
              variant="outline"
              className="h-6 border-border/70 bg-muted/40 transition-colors duration-200 hover:bg-muted"
            >
              {item}
            </Badge>
          ))}
        </div>

        <div className='flex gap-4'>
          <Button asChild>
            <Link href={urlDemo} target='_blank'>{labels.viewProject}</Link>
          </Button>
          {isPrivate && urlDemoVideo ? (
            <Button asChild>
              <Link href={urlDemoVideo} target='_blank'>{labels.viewDemo}</Link>
            </Button>
          ) : (
            <Button asChild>
              <Link href={urlCode} target='_blank'>{labels.viewCode}</Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
