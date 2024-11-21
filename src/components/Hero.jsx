import insideStore from "../assets/insideStore.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center">
        {/* Left Side: Image */}
        <div className="lg:w-1/2">
          <img
            src={insideStore}
            alt="Our Store"
            className="rounded-lg shadow-lg object-cover w-full h-64 lg:h-80"
          />
        </div>

        {/* Right Side: Introduction */}
        <div className="lg:w-1/2 lg:pl-10 text-center lg:text-left mt-8 lg:mt-0">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome to [Store Name]!
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Your destination for trading cards, collectibles, and more.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Located at 123 Main Street, Springfield. Open Mon-Sat, 9 AM - 6 PM.
          </p>
          <div className="mt-6">
            <a
              href="#products"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Explore Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
