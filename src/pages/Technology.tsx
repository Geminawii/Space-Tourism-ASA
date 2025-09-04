import React, { useState } from "react";

const technology = [
  {
    name: "Launch vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    imagePortrait: "/img/image-launch-vehicle-portrait.jpg",
    imageLandscape: "/img/image-launch-vehicle-landscape.jpg",
  },
  {
    name: "Spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching or receiving spacecraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    imagePortrait: "/img/image-spaceport-portrait.jpg",
    imageLandscape: "/img/image-spaceport-landscape.jpg",
  },
  {
    name: "Space capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    imagePortrait: "/img/image-space-capsule-portrait.jpg",
    imageLandscape: "/img/image-space-capsule-landscape.jpg",
  },
];

const Technology: React.FC = () => {
  const [active, setActive] = useState(technology[0]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      <div className="absolute inset-0">
        <img
          src="/img/background-technology-desktop.jpg"
          alt="Space background"
          className="h-full w-full object-cover"
        />
      </div>

      <main className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-12 md:px-20 pt-24 gap-10 text-center lg:text-left">
        <div className="flex-1 flex flex-col items-center lg:items-start justify-between w-full">
          <h2 className="uppercase tracking-widest text-gray-300 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 md:mb-40 ">
            <span className="font-bold opacity-40">03</span> Space launch 101
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start w-full">
            <div className="flex sm:gap-6 lg:flex-col sm:flex-row gap-4">
              {technology.map((t, index) => (
                <button
                  key={t.name}
                  onClick={() => setActive(t)}
                  className={`h-12 w-12 sm:h-16 sm:w-16 rounded-full border text-lg font-belle font-bold transition flex items-center justify-center ${
                    active.name === t.name
                      ? "bg-white text-black"
                      : "border-gray-500 text-white hover:bg-gray-500/30"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <div className="max-w-xl space-y-4 sm:space-y-6">
              <p className="uppercase text-gray-400 text-sm sm:text-lg tracking-wider font-belle">
                The terminology...
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-belle uppercase">
                {active.name}
              </h1>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {active.description}
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <picture className="w-full">
            <source media="(max-width: 767px)" srcSet={active.imageLandscape} />

            <source media="(min-width: 768px)" srcSet={active.imagePortrait} />

            <img
              src={active.imageLandscape}
              alt={active.name}
              className="w-full object-contain max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[26rem] mx-auto"
            />
          </picture>
        </div>
      </main>
    </div>
  );
};

export default Technology;
