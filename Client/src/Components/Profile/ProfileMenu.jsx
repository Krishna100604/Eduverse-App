// src/Components/Auth/ProfileDropdown.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { MdDashboard } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const ProfileMenu = ({ isOpen, onClose }) => {
  const { logout } = useAuth0();

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
      <ul className="py-1">
        <li>
          <Link
            to="/profile"
            className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200"
            onClick={onClose}
          >
            <FaUser className="mr-3" />
            My Profile
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200"
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
            className="w-full flex items-center  text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
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
