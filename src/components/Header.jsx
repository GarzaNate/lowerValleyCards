import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="top-0 z-50 bg-white shadow-lg w-full">
      <div className="flex items-center justify-between h-32 px-4 sm:px-6 lg:px-8">
        {/* Left: Logo */}
        <div className="flex items-center">
          <NavLink to="/" className="cursor-pointer">
            <img
              src={logo}
              alt="Lower Valley Cards"
              className="h-24 object-contain"
            />
          </NavLink>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className="text-gray-800 hover:text-blue-600 transition-all duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-800 hover:text-blue-600 transition-all duration-300"
          >
            Contact
          </NavLink>
          {/* <NavLink
            to="/about"
            className="text-gray-800 hover:text-blue-600 transition-all duration-300"
          >
            About
          </NavLink> */}
        </nav>

        {/* Right: Store Hours and Social Icons */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/people/Lower-Valley-Cards/61567735154491/"
              className="text-4xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/lowervalleycards/"
              className="text-4xl"
            >
              <FaInstagram />
            </a>
          </div>
          {/* Store Hours */}
          <div className="text-bold text-sm">
            <p>Mon: Closed</p>
            <p>Tues-Fri: 11:00 AM - 5:30 PM</p>
            <p>Sat-Sun: 11:00 AM - 4:00 PM</p>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
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
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
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
