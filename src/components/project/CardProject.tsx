import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui';
import { ProjectGallery } from './ProjectGallery';

import type { Project } from '@/interfaces';

interface Props {
  project: Project;
  description: string;
  labels: {
    viewProject: string;
    screenshotAlt: string;
    screenshotNavLabel: string;
  };
}

export const CardProject = ({ project, description, labels }: Props) => {
  const { name, images, stack, url } = project;

  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="leading-relaxed">{description}</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col">
        <ProjectGallery
          name={name}
          images={images}
          labels={{
            screenshotAlt: labels.screenshotAlt,
            screenshotNavLabel: labels.screenshotNavLabel,
          }}
        />

        <div className="mb-6 mt-5 flex flex-wrap gap-2">
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

        <Button asChild className="mt-auto w-full sm:w-auto sm:self-start">
          <Link href={url} target="_blank" rel="noopener noreferrer">
            {labels.viewProject}
            <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
