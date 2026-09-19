import { cn } from "@/lib/utils";

interface Props {
  eyebrow: string;
  heading: string;
  className?: string;
}

/**
 * Consistent section heading treatment: a small uppercase eyebrow label,
 * the heading itself, and a short accent rule underneath.
 */
export const SectionHeading = ({ eyebrow, heading, className }: Props) => (
  <div className={cn("mb-8", className)}>
    <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
      {eyebrow}
    </span>
    <h2 className="mt-2 text-3xl font-bold tracking-tight">{heading}</h2>
    <span aria-hidden="true" className="mt-3 block h-1 w-12 rounded-full bg-brand" />
  </div>
);
