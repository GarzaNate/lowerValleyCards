import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-neutral-dark text-neutral-light py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-sm">+1 509 515 0134</p>
            <p className="text-sm"> lowervalleycards@gmail.com </p>
            <p className="text-sm">1805 S 1st St Ste B, Sunnyside, WA 98944</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Our Socials</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/Lower-Valley-Cards/61567735154491/"
                className="text-3xl"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/lowervalleycards/"
                className="text-3xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@lowervalleycards"
                className="text-3xl"
              >
                <AiFillTikTok />
              </a>
            </div>
          </div>
          <div className="text-center mt-8 sm:mt-0 md:mt-0">
            <h3 className="text-xl font-bold mb-4">Lower Valley Cards</h3>
            <p className="text-sm">
              Copyright © {currentYear} Lower Valley Cards. All Rights Reserved.
            </p>
            <p className="text-xs mt-2">
              Designed and Developed by{" "}
              <span className="font-bold">J.N. Garza</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
