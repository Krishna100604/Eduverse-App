import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaChartLine,
  FaChalkboardTeacher,
  FaUsers,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { motion } from "framer-motion";
import LogoutButton from "../Auth/LogOut";
import { IoLogOut } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <motion.aside
      initial={{ x: -250 }}
      animate={{ x: isOpen ? 0 : -250 }}
      transition={{ type: "just", stiffness: 100 }}
      className="bg-white bg-opacity-60 backdrop-blur-lg fixed top-0 left-0 h-full w-64 p-6 shadow-lg z-20 "
    >
      {/* Close button */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 text-gray-700 hover:text-blue-500"
      >
        <FaTimes />
      </button>

      {/* Navigation links */}
      <nav className="space-y-4 mt-10">
        <Link
          to="/"
          className="flex items-center text-gray-700 hover:text-blue-500"
        >
          <FaHome className="mr-3" />
          Home
        </Link>
        <Link
          to="/dashboard"
          className="flex items-center text-gray-700 hover:text-blue-500"
        >
          <FaChartLine className="mr-3" />
          Dashboard
        </Link>
        <Link
          to="/about"
          className="flex items-center text-gray-700 hover:text-blue-500"
        >
          <FaChalkboardTeacher className="mr-3" />
          About Us
        </Link>
        <Link
          to="/contact"
          className="flex items-center text-gray-700 hover:text-blue-500"
        >
          <FaUsers className="mr-3" />
          Contact Us
        </Link>
        <Link
          to="/profile"
          className="flex items-center text-gray-700 hover:text-blue-500"
        >
          <FaUser className="mr-3" />
          Profile
        </Link>

        <div className="flex items-center text-gray-700 hover:text-blue-500">
          {/* <CiLogout size={17} className="mr-3" /> */}
          <IoLogOut size={20} className="mr-2" /> <LogoutButton />
        </div>
      </nav>
    </motion.aside>
  );
};

export default Sidebar;
