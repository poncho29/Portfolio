'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { cn } from '@/lib/utils';

interface Props {
  href: string;
  label: string;
}

export const NavLink = ({ href, label }: Props) => {
  const pathname = usePathname();
  
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center justify-between p-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-accent hover:text-accent-foreground',
        {
          'font-bold bg-secondary text-secondary-foreground': pathname === href,
        }
      )}
    >
      {label}
    </Link>
  )
}
