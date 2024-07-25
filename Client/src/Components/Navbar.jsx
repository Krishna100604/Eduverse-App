// src/Components/Navbar.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
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

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const closeProfileMenu = () => {
    setIsProfileMenuOpen(false);
  };
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "just", stiffness: 100 }}
      className="bg-blue-500 py-2 fixed top-0 left-0 w-full z-10 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center space-x-2 text-white">
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
        <div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white hover:text-gray-200"
            style={{ textDecoration: "none" }}
          >
            <Link
              to="/"
              className="text-white"
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
              className="text-white"
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
              className="text-white"
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
      </div>
    </motion.header>
  );
};

export default Navbar;
