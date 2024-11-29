import React, { useState } from "react";
import funkoWall1 from "../assets/funkoWall1.jpg";
import funkoWall2 from "../assets/funkoWall2.jpg";
import collectibles from "../assets/collectibles1.jpg";
import pokemon1 from "../assets/pokemonCards1.jpg";
import dragonBall from "../assets/dragonBallCards.jpg";
import tops3 from "../assets/tops3.jpg";
import hotwheel1 from "../assets/hotwheelWall1.jpg";
import startinglineup from "../assets/startingLineup.jpg";
import startinglineup1 from "../assets/startingLineup1.jpg";

const ProductSection = () => {
  const categories = [
    {
      name: "Trading Cards",
      description: "Explore a variety of collectible trading cards.",
      images: [pokemon1, dragonBall, tops3],
    },
    {
      name: "Funkos",
      description: "Discover your favorite Funko Pop! figures.",
      images: [funkoWall1, funkoWall2, collectibles],
    },
    {
      name: "Collectibles",
      description: "Find unique collectibles for every fan.",
      images: [hotwheel1, startinglineup, startinglineup1],
    },
  ];

  return (
    <section id="products" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Featured Categories
        </h2>

        <div className="space-y-12">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              {/* Category Header */}
              <div className="p-6 bg-blue-600 text-white">
                <h3 className="text-2xl font-semibold">{category.name}</h3>
                <p className="mt-2 text-sm">{category.description}</p>
              </div>

              {/* Images */}
              <div className="flex flex-wrap justify-center p-6 gap-4">
                {category.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${category.name} product ${index + 1}`}
                    className="h-80 w-80 object-cover rounded-lg shadow-md"
                  />
                ))}
              </div>

              {/* View More Button */}
              <div className="text-center p-6">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  View More {category.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
