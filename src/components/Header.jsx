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
        {/* Center: Desktop Navigation */}
        <div className="flex absolute items-center justify-center w-full space-x-6">
          <nav className="hidden text-neutral-black md:flex items-center text-lg space-x-8">
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
        {/* Right: Location and Store Hours */}
        <div className="hidden md:flex flex-col items-center space-x-6">
          <p>Mon: Closed</p>
          <p>Tues-Fri: 11:00 AM - 5:30 PM</p>
          <p>Sat-Sun: 11:00 AM - 4:00 PM</p>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-32 left-0 w-full bg-white shadow-md md:hidden">
            <nav className="flex flex-col items-center space-y-4 py-4">
              <NavLink
                to="/"
                className="text-gray-800 hover:text-blue-600 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/contact"
                className="text-gray-800 hover:text-blue-600 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
              <NavLink
                to="/about"
                className="text-gray-800 hover:text-blue-600 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
