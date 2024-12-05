import React, { useState, useEffect } from "react";
import productsData from "../data/products.js";

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  // useEffect to set products state to productsData
  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <section id="products" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="h-60 w-full flex justify-center items-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-4 flex flex-col items-center text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.title}
                </h3>
                {/* <p className="text-xl text-blue-600 font-bold">${product.price.toFixed(2)}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
