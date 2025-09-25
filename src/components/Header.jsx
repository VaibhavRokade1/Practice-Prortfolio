import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sections = ["home", "about", "projects", "contact"];

  return (
    <header className="fixed w-full top-0 left-0 bg-white backdrop-blur-md shadow-lg z-50 transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 cursor-pointer hover:scale-105 transition-transform duration-300">
          Vaibhav Rokade
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium items-center">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="relative group uppercase text-sm md:text-base hover:text-indigo-600 transition-colors duration-300"
            >
              {section}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-6">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={() => setIsOpen(false)}
                  className="uppercase text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-300"
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
