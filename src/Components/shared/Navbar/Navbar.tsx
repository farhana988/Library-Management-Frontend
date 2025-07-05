import { useState } from "react";
import NavLinks from "./NavLinks";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className="bg-primary  p-4 sticky top-0 z-50 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between">
        <Link to={"/"} className=" text-2xl font-bold italic tracking-wider">
          ReadMate
        </Link>
        <button className=" lg:hidden" onClick={toggleMenu}>
          {/* hamburger */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex space-x-6">
          <NavLinks />
        </div>

        {/* Mobile Navbar */}
        {isOpen && (
          <div
            className="lg:hidden absolute bg-primary top-16 right-0 p-4
           space-y-4 w-1/2 md:w-1/3 text-center flex flex-col"
          >
            <NavLinks />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
