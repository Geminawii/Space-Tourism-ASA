import React, { useState } from "react";

const crew = [
  {
    role: "COMMANDER",
    name: "DOUGLAS HURLEY",
    image: "/img/image-douglas-hurley.png",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    role: "MISSION SPECIALIST",
    name: "MARK SHUTTLEWORTH",
    image: "/img/image-mark-shuttleworth.png",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind Ubuntu. He became the first South African in space as a space tourist in 2002.",
  },
  {
    role: "PILOT",
    name: "VICTOR GLOVER",
    image: "/img/image-victor-glover.png",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy and a veteran of four spacewalks.",
  },
  {
    role: "FLIGHT ENGINEER",
    name: "ANOUSHEH ANSARI",
    image: "/img/image-anousheh-ansari.png",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS.",
  },
];

const Crew: React.FC = () => {
  const [active, setActive] = useState(crew[0]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white flex flex-col">
      <div className="absolute inset-0">
        <img
          src="/img/background-crew-desktop.jpg"
          alt="Space"
          className="h-full w-full object-cover"
        />
      </div>

      <main className="relative z-10 flex flex-col md:flex-col lg:flex-row items-center lg:items-center justify-between px-6 sm:px-10 md:px-16 lg:px-20 pt-24 pb-10 flex-grow">
   
        <h2 className="uppercase tracking-widest text-gray-300 text-base sm:text-lg mb-8 md:mb-12 lg:mb-0 lg:absolute lg:left-20 lg:top-20">
          <span className="font-bold opacity-40">02</span>{" "}
          <span className="ml-2">Meet your crew</span>
        </h2>

        <div className="order-3 md:order-2 lg:order-2 w-full mt-8 md:mt-10 lg:mt-0 lg:flex-1 flex justify-center items-end relative">
          <img
            src={active.image}
            alt={active.name}
            className="h-56 sm:h-96 md:h-96 lg:h-[28rem] object-contain relative z-10"
          />
    
          <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none block lg:hidden" />
        </div>

  
        <div className="order-2 md:order-3 lg:order-3 flex gap-4 mt-8 md:mt-12 lg:mt-20 lg:hidden">
          {crew.map((member) => (
            <button
              key={member.name}
              onClick={() => setActive(member)}
              className={`h-3 w-3 rounded-full transition ${
                active.name === member.name
                  ? "bg-white"
                  : "bg-gray-500 hover:bg-gray-300"
              }`}
            />
          ))}
        </div>

    
        <div className="order-1 md:order-1 lg:order-1 lg:flex-1 max-w-xl text-center lg:text-left">
          <div className="space-y-4 md:space-y-6">
            <p className="uppercase text-gray-400 text-base md:text-xl font-belle tracking-wider">
              {active.role}
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-belle">
              {active.name}
            </h1>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg px-2 md:px-0">
              {active.bio}
            </p>
          </div>

     
          <div className="hidden lg:flex gap-6 mt-12">
            {crew.map((member) => (
              <button
                key={member.name}
                onClick={() => setActive(member)}
                className={`h-4 w-4 rounded-full transition ${
                  active.name === member.name
                    ? "bg-white"
                    : "bg-gray-500 hover:bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Crew;
