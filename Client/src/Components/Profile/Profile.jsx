import React from "react";
import { Link } from "react-router-dom";
import { FaChartLine, FaChevronLeft, FaDashcube } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-black pt-20 p-5">
      <button>
        {" "}
        <Link
          to="/dashboard"
          className="flex items-center text-gray-700 hover:text-blue-500"
        >
          <FaChevronLeft className="mr-3" />
          Dashboard
        </Link>
      </button>
      {/* User Info Section */}
      <section className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="flex items-center space-x-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-24 h-24 rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold">User</h2>
            <p className="text-gray-600">user@example.com</p>
            <p className="text-gray-600">San Francisco, CA</p>
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
