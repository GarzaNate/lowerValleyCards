import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Store Information */}
          <div className="text-sm">
            <p>
              &copy; {new Date().getFullYear()} Lower Valley Cards. All rights reserved.
            </p>
            <p>1805 S 1st St Ste B, Sunnyside, WA 98944</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/people/Lower-Valley-Cards/61567735154491/"
              className="text-white text-3xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/lowervalleycards/"
              className="text-white text-3xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
