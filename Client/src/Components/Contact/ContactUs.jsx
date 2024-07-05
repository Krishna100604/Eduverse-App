// src/Components/ContactUs.jsx
import React from "react";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaBars } from "react-icons/fa";

const ContactUs = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto  px-4 py-10"
    >
      {/* Toggle button for sidebar */}
      <button
        onClick={toggleSidebar}
        className="text-2xl p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none z-50"
      >
        <FaBars />
      </button>

      {/* Sidebar component */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="bg-white bg-opacity-70 rounded-lg shadow-lg p-8 mb-8 backdrop-blur-md"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          Contact Us
        </h1>
        <p className="text-gray-600 leading-relaxed text-center mb-8">
          We're here to help! Reach out to us via any of the following methods.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <FaPhone className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-600">+1 234 567 890</p>
          </div>
          <div className="text-center">
            <FaEnvelope className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600">info@eduverse.com</p>
          </div>
          <div className="text-center">
            <FaMapMarkerAlt className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Address</h3>
            <p className="text-gray-600">
              123 Eduverse Lane, Knowledge City, Edu 45678
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="bg-white bg-opacity-70 rounded-lg shadow-lg p-8 backdrop-blur-md"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Send Us a Message
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </motion.section>
    </motion.div>
  );
};

export default ContactUs;
