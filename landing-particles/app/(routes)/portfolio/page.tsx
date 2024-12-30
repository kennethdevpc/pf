// import Image from 'next/image'; //----necesito crearlo
// import Link from 'next/link'; //----necesito crearlo

import { dataPortfolio } from '@/data';

import CircleImage from '@/components/circle-image';
import TransitionPage from '@/components/transition-page';
import ContainerPage from '@/components/container-page';
import PortfolioBox from '@/components/portfolio-box'; //----necesito crearlo
import AvatarPortfolio from '@/components/avatar-portfolio'; //----necesito crearlo

const PortfolioPage = () => {
  return (
    <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover ">
      <ContainerPage>
        <TransitionPage />
        <CircleImage />
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
            Last <span className="font-bold text-secondary">projects</span>
          </h1>

          <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 sm:grid-cols-2 md:grid-cols-3">
            {dataPortfolio.map((data) => (
              <PortfolioBox key={data.id} data={data} />
            ))}
          </div>
        </div>
      </ContainerPage>
    </div>
  );
};

export default PortfolioPage;
