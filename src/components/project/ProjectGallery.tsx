'use client';

import { useState } from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

interface Props {
  name: string;
  images: string[];
  labels: {
    screenshotAlt: string;
    screenshotNavLabel: string;
  };
}

/**
 * Replaces {placeholders} in a dictionary string so copy stays in the
 * translation files instead of being concatenated in the component.
 */
const format = (template: string, values: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ''));

export const ProjectGallery = ({ name, images, labels }: Props) => {
  const [active, setActive] = useState(0);

  const hasMultiple = images.length > 1;

  return (
    <div>
      <div className="relative aspect-[2916/1414] overflow-hidden rounded-md border border-border/60 bg-muted/30">
        {images.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt={format(labels.screenshotAlt, {
              project: name,
              index: index + 1,
              total: images.length,
            })}
            fill
            sizes="(min-width: 1280px) 560px, (min-width: 768px) 45vw, 92vw"
            aria-hidden={index !== active}
            className={cn(
              'object-cover object-top transition-[opacity,transform] duration-500 group-hover:scale-[1.03]',
              index === active ? 'opacity-100' : 'opacity-0'
            )}
          />
        ))}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>

      {hasMultiple && (
        <div className="mt-3 flex items-center justify-center gap-1">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActive(index)}
              aria-label={format(labels.screenshotNavLabel, { index: index + 1 })}
              aria-current={index === active}
              className="group/dot flex h-6 w-7 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <span
                className={cn(
                  'block h-2 rounded-full transition-all duration-200',
                  index === active
                    ? 'w-5 bg-primary'
                    : 'w-2 bg-muted-foreground/40 group-hover/dot:bg-muted-foreground/70'
                )}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
