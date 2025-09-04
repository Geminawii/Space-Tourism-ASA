import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { path: "/", label: "Home", number: "00" },
    { path: "/destination", label: "Destination", number: "01" },
    { path: "/crew", label: "Crew", number: "02" },
    { path: "/technology", label: "Technology", number: "03" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50">
  
      <div className="flex items-center gap-2">
        <img src="/img/logo.svg" alt="Logo" className="h-10 w-10" />
        <img
          src="/img/line.png"
          alt="Logo line"
          className="hidden md:block h-px w-full object-contain"
        />
      </div>

      <nav className="hidden md:flex gap-20 bg-white/10 px-10 py-4 backdrop-blur-md uppercase tracking-wider text-sm">
        {links.map(({ path, label, number }) => (
          <Link
            key={path}
            to={path}
            className={`relative ${
              location.pathname === path ? "font-bold" : "hover:opacity-80"
            }`}
          >
            <span className="font-bold">{number}</span> {label}
            {location.pathname === path && (
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white"></span>
            )}
          </Link>
        ))}
      </nav>


      <div className="md:hidden z-50">
        {!menuOpen ? (
          <button onClick={() => setMenuOpen(true)}>
            <img src="/img/icon-hamburger.svg" alt="Menu" className="h-6 w-6" />
          </button>
        ) : (
          <button onClick={() => setMenuOpen(false)}>
            <img src="/img/icon-close.svg" alt="Close" className="h-6 w-6" />
          </button>
        )}
      </div>


      {menuOpen && (
        <div className="fixed top-0 right-0 h-full w-[70%] sm:w-[60%] bg-white/5 backdrop-blur-2xl p-8 flex flex-col gap-8 uppercase tracking-wider text-white text-lg transition-all duration-300 ease-in-out">
          <div className="mt-20 flex flex-col gap-6">
            {links.map(({ path, label, number }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)} 
                className={`${
                  location.pathname === path
                    ? "font-bold text-white"
                    : "text-gray-300 hover:opacity-80"
                }`}
              >
                <span className="font-bold">{number}</span> {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
