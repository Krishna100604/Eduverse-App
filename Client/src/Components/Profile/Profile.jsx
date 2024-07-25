// import React from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaChartLine, FaChevronLeft, FaDashcube } from "react-icons/fa";
// import Sidebar from "../Sidebar/Sidebar"; // Import the Sidebar component

// const Profile = () => {
//   const [isOpen, setIsOpen] = React.useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100 text-black  p-5">
//       <button
//         className="text-2xl p-2 bg-gray-200 rounded-full hover:bg-gray-300 w-fit focus:outline-none"
//         onClick={toggleSidebar}
//       >
//         <FaBars />
//       </button>
//       {/* Sidebar component */}
//       <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />{" "}
//       {/* User Info Section */}
//       <section className="bg-white shadow-md rounded-lg p-6 mb-6">
//         <div className="flex items-center space-x-6">
//           <img
//             src="https://via.placeholder.com/150"
//             alt="Profile"
//             className="w-24 h-24 rounded-full"
//           />
//           <div>
//             <h2 className="text-2xl font-bold">User</h2>
//             <p className="text-gray-600">user@example.com</p>
//             <p className="text-gray-600">San Francisco, CA</p>
//           </div>
//         </div>
//       </section>
//       {/* Enrolled Courses Section */}
//       <section className="bg-white shadow-md rounded-lg p-6 mb-6">
//         <h3 className="text-xl font-bold mb-4">Enrolled Courses</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           <div className="bg-blue-100 p-4 rounded-lg">
//             <h4 className="font-bold">Course Title 1</h4>
//             <p className="text-gray-700">
//               Description of the course goes here.
//             </p>
//             <p className="text-gray-600">Progress: 70%</p>
//           </div>
//           <div className="bg-blue-100 p-4 rounded-lg">
//             <h4 className="font-bold">Course Title 2</h4>
//             <p className="text-gray-700">
//               Description of the course goes here.
//             </p>
//             <p className="text-gray-600">Progress: 40%</p>
//           </div>
//           <div className="bg-blue-100 p-4 rounded-lg">
//             <h4 className="font-bold">Course Title 3</h4>
//             <p className="text-gray-700">
//               Description of the course goes here.
//             </p>
//             <p className="text-gray-600">Progress: 90%</p>
//           </div>
//         </div>
//       </section>
//       {/* Achievements Section */}
//       <section className="bg-white shadow-md rounded-lg p-6">
//         <h3 className="text-xl font-bold mb-4">Achievements</h3>
//         <ul className="list-disc list-inside">
//           <li className="text-gray-700">Completed Course A with 95% marks</li>
//           <li className="text-gray-700">
//             Achieved 'Top Performer' badge in Course B
//           </li>
//           <li className="text-gray-700">Participated in Coding Hackathon</li>
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default Profile;

import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="flex items-center">
        <img
          className="h-8 rounded-full mr-2 "
          src={user.picture}
          alt={user.name}
        />
        <p className="text-white mr-2">{user.name}</p>
        {/* <p>{user.email}</p> */}
      </div>
    )
  );
};

export default Profile;
