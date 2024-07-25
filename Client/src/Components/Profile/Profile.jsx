import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaChartLine, FaChevronLeft, FaDashcube } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar"; // Import the Sidebar component
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const defaultName = "Guest User";
  const defaultPicture = "https://via.placeholder.com/150";

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-black  p-5">
      <button
        className="text-2xl p-2 bg-gray-200 rounded-full hover:bg-gray-300 w-fit focus:outline-none"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>
      {/* Sidebar component */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />{" "}
      {/* User Info Section */}
      <section className="bg-white shadow-md rounded-lg p-6 mb-6">
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
      </section>
      {/* Enrolled Courses Section */}
      <section className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-xl font-bold mb-4">Enrolled Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h4 className="font-bold">Course Title 1</h4>
            <p className="text-gray-700">
              Description of the course goes here.
            </p>
            <p className="text-gray-600">Progress: 70%</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg">
            <h4 className="font-bold">Course Title 2</h4>
            <p className="text-gray-700">
              Description of the course goes here.
            </p>
            <p className="text-gray-600">Progress: 40%</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg">
            <h4 className="font-bold">Course Title 3</h4>
            <p className="text-gray-700">
              Description of the course goes here.
            </p>
            <p className="text-gray-600">Progress: 90%</p>
          </div>
        </div>
      </section>
      {/* Achievements Section */}
      <section className="bg-white shadow-md rounded-lg p-6">
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
