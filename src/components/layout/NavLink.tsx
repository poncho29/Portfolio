import Link from 'next/link';

import { cn } from '@/lib/utils';

interface Props {
  href: string;
  label: string;
}

export const NavLink = ({ href, label }: Props) => {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center justify-between p-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-accent hover:text-accent-foreground'
      )}
    >
      {label}
    </Link>
  )
}
