import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-32">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <img src={logo} alt="Lower Valley Cards" className="h-24 object-contain" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-gray-800 hover:text-blue-600 transition-all duration-300 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="products"
            smooth={true}
            duration={500}
            className="text-gray-800 hover:text-blue-600 transition-all duration-300 cursor-pointer"
          >
            Products
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-gray-800 hover:text-blue-600 transition-all duration-300 cursor-pointer"
          >
            Contact
          </Link>
        </nav>

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
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="text-gray-800 hover:text-blue-600 transition-all duration-300 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="products"
                smooth={true}
                duration={500}
                className="text-gray-800 hover:text-blue-600 transition-all duration-300 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-gray-800 hover:text-blue-600 transition-all duration-300 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
