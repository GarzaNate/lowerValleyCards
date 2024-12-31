import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8">
            Have questions? We'd love to hear from you! Fill out the form below
            and we’ll respond as soon as we can.
          </p>
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Your message has been sent!");
            }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full mt-1 px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full mt-1 px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message"
                rows="5"
                required
                className="w-full mt-1 px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Store Information */}
        <div className="flex flex-col space-y-8">
          {/* Address and Contact Info */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Store</h3>
            <ul className="text-gray-600 space-y-3">
              <li>
                <strong>Address:</strong> 1805 S 1st St Ste B, Sunnyside, WA
                98944
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+15095150134"
                  className="text-blue-600 hover:underline"
                >
                  +1 (509) 515-0134
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:lowervalleycards@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  lowervalleycards@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Connect with Us
            </h3>
            <p className="text-gray-600 mb-6">
              Follow us on social media to stay updated with the latest
              arrivals, events, and more!
            </p>
            <div className="flex space-x-6 justify-center lg:justify-start">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-dark"
              >
                <FaFacebook className="w-8 h-8" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-dark"
              >
                <FaInstagram className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Store Hours
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li>Mon: Closed</li>
              <li>Tues-Fri: 11:00 AM - 5:30 PM</li>
              <li>Sat-Sun: 11:00 AM - 4:00 PM</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
