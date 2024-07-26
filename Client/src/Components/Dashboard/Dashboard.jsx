import React, { useState } from "react";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FaBullhorn, FaBook, FaTrophy, FaBars, FaTimes } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();
  // Example progress data
  const progress = 75; // 75% complete

  // Data for Line Chart
  const lineData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Learning Hours",
        data: [5, 10, 15, 20],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  // Data for Bar Chart
  const barData = {
    labels: ["Course 1", "Course 2", "Course 3", "Course 4"],
    datasets: [
      {
        label: "Completion Rate (%)",
        data: [70, 80, 90, 60],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <div className="flex min-h-screen bg-gray-100 relative">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(false)}
      />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`flex-1 p-8 transition-all duration-300 
          
        }`}
      >
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-2xl p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none"
        >
          <FaBars />
        </button>
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Dashboard
        </h1>

        {/* Announcement Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-8"
        >
          <div className="flex">
            <FaBullhorn className="text-2xl mr-4" />
            <p className="text-lg">
              New courses have been added! Check out the latest offerings in the
              "Recommended Courses" section.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Welcome Card */}
          <motion.div
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Welcome Back, {user.name}!
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Here's a brief overview of your learning progress and recent
              activities.
            </p>
          </motion.div>

          {/* Progress Overview */}
          <motion.div
            custom={0.4}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Progress Overview
            </h2>
            <div className="flex justify-center">
              <CircularProgressbar
                value={progress}
                text={`${progress}%`}
                styles={buildStyles({
                  textSize: "16px",
                  pathColor: `rgba(62, 152, 199, ${progress / 100})`,
                  textColor: "#3e98c7",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
            <p className="text-gray-600 leading-relaxed mt-4">
              Track your progress and see how far you've come in your learning
              journey.
            </p>
          </motion.div>

          {/* Recommended Courses */}
          <motion.div
            custom={0.6}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Recommended Courses
            </h2>
            <ul className="text-gray-600 leading-relaxed">
              <li>
                <FaBook className="inline mr-2" /> Course 1: Introduction to
                Data Science
              </li>
              <li>
                <FaBook className="inline mr-2" /> Course 2: Advanced JavaScript
              </li>
              <li>
                <FaBook className="inline mr-2" /> Course 3: Web Development
                Bootcamp
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Visualize Your Learning */}
        <motion.section
          custom={0.8}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="bg-white rounded-lg shadow-lg p-8 mt-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Visualize Your Learning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-700 mb-4">
                Learning Hours
              </h3>
              <Line data={lineData} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-700 mb-4">
                Completion Rate
              </h3>
              <Bar data={barData} />
            </div>
          </div>
        </motion.section>

        {/* Recent Activities */}
        <motion.section
          custom={1.0}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="bg-gray-200 rounded-lg shadow-lg p-8 mt-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Recent Activities
          </h2>
          <ul className="text-gray-600 leading-relaxed">
            <li>
              Completed: <strong>Module 5: Machine Learning Basics</strong>
            </li>
            <li>
              Started: <strong>Course 2: Advanced JavaScript</strong>
            </li>
            <li>
              Joined: <strong>Study Group: React Developers</strong>
            </li>
          </ul>
        </motion.section>

        {/* Achievements */}
        <motion.section
          custom={1.2}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="bg-white rounded-lg shadow-lg p-8 mt-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 rounded-lg p-4">
              <FaTrophy className="text-4xl text-yellow-500 mb-4" />
              <h3 className="text-lg font-bold text-gray-700">Top Performer</h3>
              <p className="text-gray-600">
                Achieved the highest score in the recent assessments.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <FaTrophy className="text-4xl text-yellow-500 mb-4" />
              <h3 className="text-lg font-bold text-gray-700">
                Course Completion
              </h3>
              <p className="text-gray-600">
                Completed 5 courses with a 90%+ score.
              </p>
            </div>
          </div>
        </motion.section>
      </motion.main>
    </div>
  );
};

export default Dashboard;
