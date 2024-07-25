import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { MdDashboard } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const ProfileMenu = ({ isOpen, onClose }) => {
  const { logout } = useAuth0();
  const dropdownRef = useRef(null);

  // logic to close menu when cliked anywhere outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20"
    >
      <ul className="py-1">
        <li>
          <Link
            to="/profile"
            className="flex items-center  hover:text-blue-500 px-4 py-2 text-gray-800 hover:bg-gray-100"
            onClick={onClose}
          >
            <FaUser className="mr-3" />
            My Profile
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            className="flex items-center  hover:text-blue-500 px-4 py-2 text-gray-800 hover:bg-gray-100"
            onClick={onClose}
          >
            <MdDashboard size={18} className="mr-3" />
            Dashboard
          </Link>
        </li>
        <li>
          <button
            onClick={() => {
              logout({ returnTo: window.location.origin });
              onClose();
            }}
            className="w-full flex  hover:text-blue-500 items-center text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            <IoLogOut size={20} className="mr-2" />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProfileMenu;
