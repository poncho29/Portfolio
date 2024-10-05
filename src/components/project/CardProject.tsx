import Image from 'next/image';

import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui';

import { Project } from '@/interfaces';
import Link from 'next/link';

interface Props {
  project: Project;
}

export const CardProject = ({ project }: Props) => {
  const { name, description, urlImage, stack, urlDemo, urlCode } = project

  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <Image
          src={urlImage}
          alt={`Project ${name}`}
          width={400}
          height={200}
          className="rounded-md mb-4 mx-auto border border-slate-200"
        />
        
        <div className="h-14 flex flex-wrap gap-2 mb-4">
          {stack.map((item) => (
            <Badge key={item} className='h-6'>{item}</Badge>
          ))}
        </div>
        
        <div className='flex gap-4'>
          <Button asChild>
            <Link href={urlDemo} target='_blank'>Ver proyecto</Link>
          </Button>
          <Button asChild>
            <Link href={urlCode} target='_blank'>Ver Codigo</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
