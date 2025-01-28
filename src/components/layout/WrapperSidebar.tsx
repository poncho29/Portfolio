'use client';

import React, { useState } from 'react';

import { Sidebar } from './Sidebar';
import { House } from 'lucide-react';

type Props = {
  children: React.ReactNode;
}

export const WrapperSidebar = ({ children }: Props) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <>
      <Sidebar
        toggleSidebar={toggleSidebar}
        onToggle={() => setToggleSidebar(!toggleSidebar)}
      />
      
      <div className="w-full h-full p-4 overflow-x-auto">
        <div className="flex items-center justify-between gap-2 mb-8">
          <div className='flex items-center gap-2'>
            <House strokeWidth={2.5} className='size-7' />
            <h1 className='text-2xl font-bold'>Vista del Home</h1>
          </div>

          <button
            className={`size-6 rounded-md bg-slate-100 ${toggleSidebar && 'hidden'}`}
            onClick={() => setToggleSidebar(!toggleSidebar)}
          >
            X
          </button>
        </div>

        { children }
      </div>
    </>
  )
}
