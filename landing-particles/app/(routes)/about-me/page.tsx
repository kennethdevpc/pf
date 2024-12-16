'use client';

import TransitionPage from '@/components/transition-page';

// import { Avatar } from '@/components/avatar';
import ContainerPage from '@/components/container-page';
import { Avatar } from '@/components/avatar';
import CounterServices from '@/components/counter-services';
// import TimeLine from '@/components/time-line';
// import TransitionPage from '@/components/transition-page';

const AboutMePage = () => {
  return (
    <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
      <TransitionPage />
      <ContainerPage>
        <Avatar />
        <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
          Background <span className="font-bold text-secondary">Experience</span>
        </h1>

        <CounterServices />

        {/* <TimeLine /> */}
      </ContainerPage>
    </div>
  );
};

export default AboutMePage;
