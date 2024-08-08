import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import LoginButton from "./Auth/Login";
import { useAuth0 } from "@auth0/auth0-react";

import NavProfile from "./Auth/NavProfile";
import ProfileMenu from "./Profile/ProfileMenu";
// import Logo from "../assets/Images/Eduverse-logo.png";

const Navbar = () => {
  const location = useLocation();
  const hideSignIn =
    location.pathname === "/login" || location.pathname === "/signup";

  const { isAuthenticated } = useAuth0();

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const closeProfileMenu = () => {
    setIsProfileMenuOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "just", stiffness: 100 }}
      className="bg-[#f5ffee] py-2 fixed top-0 left-0 w-full z-10 "
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center space-x-2 text-[#1da8e2]">
          {/* <img src={Logo} alt="Eduverse" className="h-15 w-12 size-15 " /> */}
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold"
            style={{ textDecoration: "none" }}
          >
            Eduverse
          </motion.h1>
        </Link>
        <div className="hidden md:flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white hover:text-gray-200"
            style={{ textDecoration: "none" }}
          >
            <Link
              to="/"
              className="text-[#1da8e2]"
              style={{ textDecoration: "none" }}
            >
              Home
            </Link>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white hover:text-gray-200"
            style={{ textDecoration: "none" }}
          >
            <Link
              to="/about"
              className="text-[#1da8e2]"
              style={{ textDecoration: "none" }}
            >
              About Us
            </Link>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white hover:text-gray-200"
            style={{ textDecoration: "none" }}
          >
            <Link
              to="/contact"
              className="text-[#1da8e2]"
              style={{ textDecoration: "none" }}
            >
              Contact
            </Link>
          </motion.button>

          {isAuthenticated ? (
            <div className="mt-2">
              <button onClick={toggleProfileMenu}>
                <NavProfile />
              </button>
              <ProfileMenu
                isOpen={isProfileMenuOpen}
                onClose={closeProfileMenu}
              />
            </div>
          ) : (
            <LoginButton />
          )}
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleDropdown} className="text-white text-xl">
            {isDropdownOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="md:hidden bg-[#f5ffee] flex flex-col items-start space-y-4 pl-4 py-4">
          <Link
            to="/"
            className="text-[#1da8e2]  hover:text-blue-600"
            onClick={toggleDropdown}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-[#1da8e2]  hover:text-blue-600"
            onClick={toggleDropdown}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-[#1da8e2] hover:text-blue-600"
            onClick={toggleDropdown}
          >
            Contact
          </Link>

          {isAuthenticated ? (
            <div className="mt-2">
              <button onClick={toggleProfileMenu}>
                <NavProfile />
              </button>
              <ProfileMenu
                isOpen={isProfileMenuOpen}
                onClose={closeProfileMenu}
              />
            </div>
          ) : (
            <LoginButton />
          )}
        </div>
      )}
    </motion.header>
  );
};

export default Navbar;
