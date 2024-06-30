import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChartLine, FaChalkboardTeacher, FaUsers, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <motion.aside
      initial={{ x: -250 }}
      animate={{ x: isOpen ? 0 : -250 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="bg-white bg-opacity-60 backdrop-blur-lg fixed top-0 left-0 h-full w-64 p-6 shadow-lg z-20 "
    >
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 text-gray-700 hover:text-blue-500 md:hidden"
      >
        <FaTimes />
      </button>
      <nav className="space-y-4 mt-10">
        <Link to="/" className="flex items-center text-gray-700 hover:text-blue-500">
          <FaHome className="mr-3" />
          Home
        </Link>
        <Link to="/dashboard" className="flex items-center text-gray-700 hover:text-blue-500">
          <FaChartLine className="mr-3" />
          Dashboard
        </Link>
        <Link to="/about" className="flex items-center text-gray-700 hover:text-blue-500">
          <FaChalkboardTeacher className="mr-3" />
          About Us
        </Link>
        <Link to="/contact" className="flex items-center text-gray-700 hover:text-blue-500">
          <FaUsers className="mr-3" />
          Contact Us
        </Link>
      </nav>
    </motion.aside>
  );
};

export default Sidebar;
