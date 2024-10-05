'use client';

import Link from 'next/link';

import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

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
        'flex items-center justify-between p-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-sky',
        {
          'font-bold bg-sky': pathname.includes(href),
        }
      )}
    >
      {label}
    </Link>
  )
}
