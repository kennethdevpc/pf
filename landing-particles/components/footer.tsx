import React from 'react';
import { MotionTransition } from './transition-component';
import Link from 'next/link';
import { socialNetworks } from '@/data';

function Footer() {
  return (
    <MotionTransition
      position="bottom"
      className="absolute z-40 inline-block w-full bottom-20 right-10 md:bottom-10 px-60 flex"
    >
      <div className="flex items-center justify-center gap-7 flex-col pl-10">
        {socialNetworks.map(({ logo, src, id, title }) => (
          <Link
            title={title}
            key={id}
            href={src}
            target="_blank"
            className="transition-all duration-300 hover:text-secondary aling-self-left"
          >
            {logo}
          </Link>
        ))}
      </div>
    </MotionTransition>
  );
}

export default Footer;