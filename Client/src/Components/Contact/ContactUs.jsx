// src/Components/ContactUs.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto mt-20 px-4 py-10"
    >
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="bg-white bg-opacity-70 rounded-lg shadow-lg p-8 mb-8 backdrop-blur-md"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Contact Us</h1>
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
            <p className="text-gray-600">123 Eduverse Lane, Knowledge City, Edu 45678</p>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ContactUs;
