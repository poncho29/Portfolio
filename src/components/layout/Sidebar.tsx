'use client';

import { FolderOpenDot, House } from 'lucide-react';

import { cn } from '@/lib/utils';

import { LogoutButton } from './LogoutButton';
import { LinkSidebar } from './LinkSidebar';

type Props = {
  toggleSidebar: boolean;
  onToggle: () => void;
}

export const Sidebar = ({ toggleSidebar, onToggle }: Props) => {
  return (
    <div
      className={cn(
        'hidden h-screen flex-col p-4 bg-slate-200',
        {
          'w-80 flex md:w-20': toggleSidebar
        }
      )}
    >
      <div className='flex items-center justify-between pb-8 border-b border-gray-200'>
        <h4
          className={cn(
            'text-xl font-bold md:text-3xl',
            {
              'block md:hidden': toggleSidebar
            }
          )}
        >
          Menú
        </h4>

        <button
          className={`block size-7 rounded-md bg-slate-100 md:hidden ${!toggleSidebar && 'hidden'}`}
          onClick={() => onToggle()}
        >
          X
        </button>
        
        <button
          className='hidden size-7 rounded-md bg-slate-100 md:block'
          onClick={() => onToggle()}
        >
          {'<<'}
        </button>
      </div>

      <ul className='flex flex-col gap-2'>
        <LinkSidebar href="/admin" text="Home" icon={<House />} />
        <LinkSidebar href="/admin/proyectos" text="Proyectos" icon={<FolderOpenDot />} />
      </ul>

      <div className=' mt-auto'>
        <LogoutButton />
      </div>
    </div>
  )
}
