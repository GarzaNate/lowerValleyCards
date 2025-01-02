import insideStore from "../assets/images/insideStore.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${insideStore})` }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Lower Valley Cards</h1>
          <Link to="/contact" className="text-lg text-blue-300 hover:underline">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded shadow-lg">
              Get In Touch
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
