import React from "react";
// import outsideStore from "../assets/images/outsideStore.jpg";
import outsideStore2 from "../assets/images/outsideStore2.jpg";

const About = () => {
  return (
    <section id="about" className="py-16 px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 mb-6">
          Welcome to Lower Valley Cards, your ultimate destination for sports cards, collectibles, and memorabilia! Whether you're a seasoned collector or just starting out, we're here to celebrate your passion and help you find that perfect treasure. We can't wait to welcome you. God bless.
          </p>
          {/* <p className="text-gray-600">
          Whether you're a seasoned collector or just starting out, we're here to celebrate your passion and help you find that perfect treasure. We can't wait to welcome you. God bless.
          </p> */}
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={outsideStore2}
            alt="Outside of Lower Valley Cards"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
