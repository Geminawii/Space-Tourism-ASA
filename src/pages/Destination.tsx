import React, { useState } from "react";

const destinations = [
  {
    name: "MOON",
    image: "/img/image-moon.png",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    travel: "3 DAYS",
  },
  {
    name: "MARS",
    image: "/img/image-mars.png",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. KM",
    travel: "9 MONTHS",
  },
  {
    name: "EUROPA",
    image: "/img/image-europa.png",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug winter cabin.",
    distance: "628 MIL. KM",
    travel: "3 YEARS",
  },
  {
    name: "TITAN",
    image: "/img/image-titan.png",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of Saturn’s rings.",
    distance: "1.6 BIL. KM",
    travel: "7 YEARS",
  },
];

const Destination: React.FC = () => {
  const [active, setActive] = useState(destinations[0]);

  return (
    <div className="relative h-full w-full overflow-hidden text-white">
      <div className="absolute inset-0">
        <img
          src="/img/background-destination-desktop.jpg"
          alt="Space"
          className="max-h-full w-full object-"
        />
      </div>

      <main className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 md:px-20 pt-20 md:pt-20">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="uppercase tracking-widest text-gray-300 text-lg mb-10 md:mb-20">
            <span className="font-bold opacity-40">01</span> Pick your
            destination
          </h2>
          <img
            src={active.image}
            alt={active.name}
            className="h-48 w-48 md:h-96 md:w-96 object-contain"
          />
        </div>

        <div className="max-w-xl text-center md:text-left mt-10 md:mt-0 space-y-6">
          <div className="flex justify-center md:justify-start gap-6 uppercase tracking-widest text-sm">
            {destinations.map((d) => (
              <button
                key={d.name}
                onClick={() => setActive(d)}
                className={`pb-2 border-b-2 transition-colors ${
                  active.name === d.name
                    ? "border-white text-white"
                    : "border-transparent text-gray-400 hover:text-white"
                }`}
              >
                {d.name}
              </button>
            ))}
          </div>

          <h1 className="text-6xl md:text-7xl font-belle">{active.name}</h1>
          <p className="text-gray-300 leading-relaxed">{active.description}</p>

          <div className="border-b border-gray-600 my-6"></div>

          <div className="flex flex-col md:flex-row gap-8 uppercase tracking-widest text-sm">
            <div>
              <p className="text-gray-400">Avg. Distance</p>
              <p className="text-2xl md:text-3xl font-belle">
                {active.distance}
              </p>
            </div>
            <div>
              <p className="text-gray-400">Est. Travel Time</p>
              <p className="text-2xl md:text-3xl font-belle">{active.travel}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Destination;
