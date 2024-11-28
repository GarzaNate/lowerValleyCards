import insideStore from "../assets/insideStore.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${insideStore})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Lower Valley Cards</h1>
          <p className="text-lg mb-6">
            Your one-stop shop for all things trading cards, Funkos, and exclusive collectibles.
          </p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded shadow-lg">
            Explore Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;