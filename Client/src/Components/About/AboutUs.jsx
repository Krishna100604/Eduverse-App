// src/Components/AboutUs.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaBook, FaChartLine } from 'react-icons/fa';

const AboutUs = () => {
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
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">About Us</h1>
        <p className="text-gray-600 leading-relaxed text-center mb-8">
          Learn more about our mission, vision, and the team behind Eduverse.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <FaUsers className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To provide personalized learning experiences for students and professionals worldwide.
            </p>
          </div>
          <div className="text-center">
            <FaBook className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To become the leading platform for adaptive learning and educational resources.
            </p>
          </div>
          <div className="text-center">
            <FaChartLine className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Team</h3>
            <p className="text-gray-600">
              A group of dedicated educators, developers, and content creators committed to revolutionizing education.
            </p>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default AboutUs;
