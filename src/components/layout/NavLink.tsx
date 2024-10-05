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
        'flex items-center justify-between p-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-sky',
        {
          'font-bold bg-sky': pathname === href,
        }
      )}
    >
      {label}
    </Link>
  )
}
