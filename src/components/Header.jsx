import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="top-0 z-50 bg-neutral-light shadow-lg w-full">
      <div className="flex items-center justify-between h-32 px-4 sm:px-6 lg:px-8">
        {/* Left: Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-primary-light"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <HiX className="w-8 h-8" />
          ) : (
            <HiMenu className="w-8 h-8" />
          )}
        </button>

        {/* Center: Desktop Navigation */}
        <div className="flex-grow flex items-center justify-center space-x-6">
          <nav className="hidden md:flex items-center text-lg space-x-8">
            <NavLink
              to="/about"
              className="hover:text-primary-dark transition-all duration-300 hover:scale-105"
            >
              About
            </NavLink>
            <NavLink to="/" className="cursor-pointer">
              <img
                src={logo}
                alt="Lower Valley Cards"
                className="h-24 object-contain"
              />
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:text-primary-dark transition-all duration-300 hover:scale-105"
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
  <div className="absolute top-0 left-0 w-full bg-neutral-light shadow-md z-[9999] md:hidden">
    <div className="flex justify-between items-center p-4">
      <button
        className="text-neutral-black hover:text-primary-light transition-all duration-300"
        onClick={() => setIsMenuOpen(false)}
      >
        <HiX className="w-6 h-6" />
      </button>
    </div>
    <nav className="flex flex-col items-center space-y-4 py-4">
      <NavLink
        to="/"
        className="text-neutral-black hover:text-primary-light transition-all duration-300"
        onClick={() => setIsMenuOpen(false)}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="text-neutral-black hover:text-primary-light transition-all duration-300"
        onClick={() => setIsMenuOpen(false)}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className="text-neutral-black hover:text-primary-light transition-all duration-300"
        onClick={() => setIsMenuOpen(false)}
      >
        Contact
      </NavLink>
    </nav>
  </div>
)}

    </header>
  );
};

export default Header;
