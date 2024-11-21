const Contact = () => {
  return (
    <section id="contact" className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-gray-800">Contact Us</h2>
          <form className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded"
              rows={4}
            />
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Stay Connected</h2>
          <p className="text-gray-600">
            Email: <a href="mailto:info@collectorshaven.com" className="text-blue-600">info@collectorshaven.com</a>
          </p>
          <p className="text-gray-600">Phone: +1 234 567 890</p>
          <div className="flex mt-4 space-x-4">
            {/* Social Media Links */}
            <a href="#" className="text-blue-600">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-blue-600">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-blue-600">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;