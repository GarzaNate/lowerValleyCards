import React, { useRef } from "react";

const ProductSection = ({ products = [] }) => {
  const categories = [
    { name: "Trading Cards", key: "cards" },
    { name: "Funkos", key: "funkos" },
    { name: "Collectibles", key: "collectibles" },
  ];

  return (
    <section id="products" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => {
            const filteredProducts = products.filter(
              (p) => p.category === category.key
            );
            return (
              <div
                key={category.key}
                className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {category.name}
                </h3>
                <div className="flex space-x-4 overflow-x-auto scrollbar-hide mt-4">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.slice(0, 3).map((product) => (
                      <div
                        key={product.id}
                        className="flex-shrink-0 w-32 bg-white rounded-md shadow-sm p-2"
                      >
                        <img
                          src={product.image || "/placeholder.jpg"}
                          alt={product.name || "Product"}
                          className="h-20 object-cover rounded mb-2"
                        />
                        <p className="text-sm text-gray-700">
                          {product.name || "Unnamed Product"}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">
                      No products available.
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
