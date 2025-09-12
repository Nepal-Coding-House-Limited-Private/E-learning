import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';


function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
  ];

  const buttons = [{ name: "Courses", path: "/courses" }];

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md font-inter">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        {/* Left Side: Logo */}
        <div className="flex items-center gap-3">
          <h2 className="text-lg md:text-xl font-bold text-white px-3 py-1 rounded bg-[#0D7332] shadow-md transition-transform duration-300 hover:scale-105">
            NCH
          </h2>
          <div className="leading-tight">
            <h1 className="text-base md:text-lg font-semibold text-gray-800 hover:text-[#0D7332] transition-colors duration-300 tracking-wide">
              Nepal Coding House
            </h1>
            <p className="text-xs md:text-sm text-gray-500 tracking-wide">
              Software Education Innovation
            </p>
          </div>
        </div>

        {/* Center: Desktop Nav Links */}
        <div className="hidden md:flex flex-1 justify-center gap-6 font-medium text-gray-700">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="relative px-3 py-1 rounded hover:bg-gray-100 hover:text-[#0D7332] transition-all duration-300"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-[#0D7332] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Right Side: Desktop Buttons */}
        <div className="hidden md:flex gap-2">
          {buttons.map((btn, index) => (
            <Link
              key={index}
              to={btn.path}
              className="px-4 py-1 rounded-lg bg-[#0D7332] text-white font-medium hover:bg-[#0B5C28] hover:scale-105 transition-transform duration-300 shadow-sm tracking-wide text-sm"
            >
              {btn.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {mobileOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col gap-2 px-6 py-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="px-3 py-2 rounded hover:bg-gray-100 hover:text-[#0D7332] transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
            {buttons.map((btn, index) => (
              <Link
                key={index}
                to={btn.path}
                className="px-3 py-2 rounded-lg bg-[#0D7332] text-white font-medium hover:bg-[#0B5C28] transition-colors duration-300"
              >
                {btn.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
