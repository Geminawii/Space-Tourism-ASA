import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden">
      <div className="absolute inset-0 max-h-full">
        <picture>
          <source
            media="(max-width: 639px)"
            srcSet="/img/background-home-mobile.jpg"
          />
          <source
            media="(max-width: 1023px)"
            srcSet="/img/background-home-tablet.jpg"
          />
          <img
            src="/img/background-home-desktop.jpg"
            alt="Earth Desktop"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </picture>
      </div>

      <main className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 sm:px-10 md:px-20 gap-12 md:gap-20">
        <div className="max-w-lg text-center md:text-left space-y-6 mt-12 md:mt-20">
          <p className="uppercase tracking-widest text-gray-300 text-sm">
            So, you want to travel to
          </p>
          <h1 className="text-[5rem] sm:ext-[6rem] md:text-9xl font-light font-belle">
            SPACE
          </h1>
          <p className="text-gray-300 leading-relaxed">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div>
          <div className="h-32 w-32 sm:h-40 sm:w-40 md:h-56 md:w-56 mt-12 sm:mt-20 rounded-full bg-white flex items-center justify-center font-belle text-black text-xl md:text-2xl font-light cursor-pointer transition-all hover:scale-105">
            EXPLORE
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
