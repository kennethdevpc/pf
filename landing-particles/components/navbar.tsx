'use client';

import Link from 'next/link';

import { itemsNavbar } from '@/data';

import { MotionTransition } from './transition-component';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const router = usePathname(); //---permite obtener la ruta actual en la que se encuentra el usuario
  const [isHovered, setIsHovered] = useState(0);
  return (
    <MotionTransition
      position="right"
      className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max md:bottom-auto md:top-10 bottom-10"
    >
      <nav>
        <div className="flex items-center justify-center gap-2 px-4 py-1 mt-10 rounded-full bg-black/15 background-blur-sm">
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-bermuda ${
                router === item.link && 'bg-secondary'
              }`}
              data-tooltip-target="tooltip-default"
              title={item.title}
              onMouseEnter={() => setIsHovered(item.id)}
              onMouseLeave={() => setIsHovered(0)}
            >
              <Link href={item.link}>{item.icon} </Link>
              <div className="relative group ">
                <span
                  className={`w-23 absolute left-1/2 transform -translate-x-1/2 -translate-y-2 mt-2 bg-gray-800 text-white text-sm rounded px-1 py-1 transition-opacity ${
                    isHovered == item.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </nav>
    </MotionTransition>
  );
};

export default Navbar;
