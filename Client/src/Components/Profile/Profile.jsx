import React from "react";
import { Link } from "react-router-dom";

import {
  FaBars,
  FaBook,
  FaChartLine,
  FaChevronLeft,
  FaDashcube,
  FaGem,
  FaLightbulb,
  FaTrophy,
} from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar"; // Import the Sidebar component
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "../Loading/Spinner";
import { AiFillThunderbolt } from "react-icons/ai";

const Profile = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  if (isLoading) {
    return (
      <div>
        <Spinner />{" "}
      </div>
    );
  }

  console.log(user);

  const defaultName = "Guest User";
  const defaultPicture = "https://via.placeholder.com/150";

  return (
    <div className="flex flex-col min-h-screen bg-[#fbf8f6] text-black  p-5">
      <div className="flex items-center mb-5">
        <button
          className="text-2xl p-2 bg-gray-200 rounded-full hover:bg-gray-300 w-fit focus:outline-none"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>
        {/* Sidebar component */}
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />{" "}
        {/* User Info Section */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 ml-6 ">
          My Profile
        </h1>
      </div>

      <section className="bg-[#f3ebe5] shadow-md rounded-lg p-6 mb-6">
        <div className="flex items-center space-x-6">
          <img
            className="h-15 rounded-full mr-2 "
            src={(isAuthenticated && user.picture) || defaultPicture}
            alt={(isAuthenticated && user.name) || defaultName}
          />
          <div>
            <h2 className="text-2xl font-bold">
              {(isAuthenticated && user.name) || defaultName}
            </h2>
            {isAuthenticated && <p className="text-gray-600">{user.email}</p>}
          </div>
        </div>
        <div className=" mt-5 flex ">
          <div className="flex items-center bg-white w-fit rounded-2xl px-4 py-2  mr-4">
            <div className="bg-teal-100 p-1 rounded-lg">
              <FaBook className="text-2xl text-teal-700" />
            </div>
            <p className="ml-2 font-semibold">Enrolled Courses</p>
          </div>
          <div className="flex items-center bg-white w-fit rounded-2xl px-4 py-2 mr-4">
            <div className="bg-blue-100 p-1 rounded-lg">
              {" "}
              <AiFillThunderbolt className="text-2xl text-blue-500 " />
            </div>

            <p className="ml-2 font-semibold">10 Day Streak</p>
          </div>
          <div className="flex items-center bg-white w-fit rounded-2xl px-4 py-2  mr-4">
            <div className="bg-amber-100 p-1 rounded-lg">
              <FaTrophy className="text-2xl text-yellow-500 " />
            </div>
            <p className="ml-2 font-semibold">Ranked 1 at {}</p>
          </div>
          <div className="flex items-center bg-white w-fit rounded-2xl px-4 py-2  mr-4">
            <div className="bg-pink-200 p-1 rounded-lg">
              <FaGem className="text-2xl text-pink-700 " />
            </div>
            <p className="ml-2 font-semibold">Points Collected</p>
          </div>
        </div>
      </section>
      {/* Enrolled Courses Section */}
      <section className="bg-[#f3ebe5] shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-xl font-bold mb-4">Enrolled Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold">Course Title 1</h4>
            <p className="text-gray-700">
              Description of the course goes here.
            </p>
            <p className="text-gray-600">Progress: 70%</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold">Course Title 2</h4>
            <p className="text-gray-700">
              Description of the course goes here.
            </p>
            <p className="text-gray-600">Progress: 40%</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold">Course Title 3</h4>
            <p className="text-gray-700">
              Description of the course goes here.
            </p>
            <p className="text-gray-600">Progress: 90%</p>
          </div>
        </div>
      </section>
      {/* Achievements Section */}
      <section className="bg-[#f3ebe5] shadow-md rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Achievements</h3>
        <ul className="list-disc list-inside">
          <li className="text-gray-700">Completed Course A with 95% marks</li>
          <li className="text-gray-700">
            Achieved 'Top Performer' badge in Course B
          </li>
          <li className="text-gray-700">Participated in Coding Hackathon</li>
        </ul>
      </section>
    </div>
  );
};

export default Profile;
