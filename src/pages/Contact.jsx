import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // Your EmailJS service ID
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Your EmailJS template ID
        e.target,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY // Your EmailJS public API key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log("Email sent:", result.text);
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error("Error:", error.text);
        }
      );

    e.target.reset();
  };


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
            onSubmit={sendEmail}
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
            <div className="flex space-x-4 justify-center lg:justify-start">
            <a href="https://www.facebook.com/people/Lower-Valley-Cards/61567735154491/" className="text-3xl">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/lowervalleycards/" className="text-3xl">
                <FaInstagram />
              </a>
              <a href="https://www.tiktok.com/@lowervalleycards" className="text-3xl">
                <AiFillTikTok />
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
