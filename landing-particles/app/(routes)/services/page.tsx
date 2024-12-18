import AvatarServices from '@/components/avatar-services';
import CircleImage from '@/components/circle-image';
import SliderServices from '@/components/slider-services';
import TransitionPage from '@/components/transition-page';

const ServicesPage = () => {
  return (
    <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
      <TransitionPage />
      <CircleImage />
      <AvatarServices />
      <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
        <div className="max-w-[450px] mt-20 pt-10 md:mt-0">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
            Technologies <span className="font-bold text-secondary"> Tools</span>
          </h1>
          <p className="mb-3 text-xl text-gray-300 p-4 text-justify">
            Here are the technologies I’ve worked with. I started my career in industrial electronic
            systems programming, which helped me adapt quickly to new and emerging technologies.
          </p>
        </div>

        {/* SLIDER */}
        <div>{<SliderServices />}</div>
      </div>
    </div>
  );
};

export default ServicesPage;
