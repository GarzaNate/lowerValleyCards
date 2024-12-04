import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            Have questions or inquiries? Fill out the form below, and we’ll get
            back to you shortly.
          </p>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              // EmailJS logic goes here
              alert("Message sent!");
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Store Information */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Our Store</h3>
            <p className="text-gray-600">
              <strong>Address:</strong> 1805 S 1st St Ste B, Sunnyside, WA 98944
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> +1 (509) 515-0134
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:lowervalleycards@gmail.com"
                className="text-blue-600 hover:underline"
              >
                lowervalleycards@gmail.com
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Connect with Us
            </h3>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-all duration-300"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-all duration-300"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
