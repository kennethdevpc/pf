'use client';

import Image from 'next/image';

import { MotionTransition } from './transition-component';

export function Avatar() {
  return (
    <MotionTransition position="bottom" className="bottom-0 right-0  md:inline-block fixed  ">
      <Image
        src="/profilek2.png"
        width="100"
        height="100"
        className="w-full h-full  md:w-[200px] md:h-[200px]"
        alt="profile "
      />
    </MotionTransition>
  );
}
