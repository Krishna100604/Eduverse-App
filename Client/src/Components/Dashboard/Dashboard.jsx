import React, { useState } from "react";
import Box from "@mui/material/Box";

import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useAuth0 } from "@auth0/auth0-react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import StarIcon from "@mui/icons-material/Star";
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
import {
  FaBullhorn,
  FaBook,
  FaTrophy,
  FaBars,
  FaTimes,
  FaCommentMedical,
} from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import Alert from "@mui/material/Alert";

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

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const userName = user.name || "user";
  // Example progress data
  const progress = 55; // 75% complete

  // Data for Line Chart
  const lineData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Learning Hours",
        data: [5, 10, 15, 20],
        fill: false,
        backgroundColor: "#bff0db",
        borderColor: "#bff0db",
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
        backgroundColor: "#d5d2fe",
        borderColor: "#d5d2fe",
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
    <div className="flex min-h-screen px-5 bg-[#fbf8f6] relative">
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

        <div className="flex items-center justify-between mt-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl  font-semibold text-gray-800 mb-8 text-center">
            Your Dashboard
          </h1>
          <div className="h-10 bg-purple-300 rounded-3xl p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              {userName}!
            </h2>
          </div>
        </div>

        {/* Welcome Card */}

        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                centered
                textColor="secondary"
                indicatorColor="secondary"
                value={value}
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Overview" value="1" />
                <Tab label="Recommended Courses" value="2" />
                <Tab label="Achievements" value="3" />
              </Tabs>
            </Box>
            <TabPanel value="1">
              {" "}
              {/* Announcement Banner */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-8"
              >
                <div className="flex">
                  <FaBullhorn className="text-2xl mr-4" />
                  <p className="text-sm md:text-base">
                    New courses have been added! Check out the "Recommended
                    Courses" section.
                  </p>
                </div>
              </motion.div>
              <div className="items-center justify-center">
                {/* <h3>Your enrolled courses</h3> */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <div className="grid grid-cols-2 gap-4 p-2 rounded-3xl ">
                    <div className="bg-[#f3c5c5] rounded-3xl p-6 shadow-md">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center ">
                          <div className=" bg-white p-1 rounded-full ">
                            <FaBook />
                          </div>
                          <p className="text-xs ml-1">course category</p>
                        </div>

                        <div className="flex items-center text-xs bg-white p-1 rounded-3xl">
                          <StarIcon fontSize="10px" />
                          4.5
                        </div>
                      </div>
                      <h2 className="text-xl font-bold mt-2">Course Name</h2>
                      <p className="mt-4  text-xs"> 800+ students enrolled.</p>
                    </div>
                    <div className="bg-[#fae0c1] rounded-3xl p-6 shadow-md">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center ">
                          <div className=" bg-white p-1 rounded-full ">
                            <FaBook />
                          </div>
                          <p className="text-xs ml-1">course category</p>
                        </div>

                        <div className="flex items-center text-xs bg-white p-1 rounded-3xl">
                          <StarIcon fontSize="10px" />
                          4.5
                        </div>
                      </div>
                      <h2 className="text-xl font-bold mt-2">Course Name</h2>
                      <p className="mt-4  text-xs"> 800+ students enrolled.</p>
                    </div>
                    <div className="bg-[#d5d2fe] rounded-3xl p-6 shadow-md">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center ">
                          <div className=" bg-white p-1 rounded-full ">
                            <FaBook />
                          </div>
                          <p className="text-xs ml-1">course category</p>
                        </div>

                        <div className="flex items-center text-xs bg-white p-1 rounded-3xl">
                          <StarIcon fontSize="10px" />
                          4.5
                        </div>
                      </div>
                      <h2 className="text-xl font-bold mt-2">Course Name</h2>
                      <p className="mt-4  text-xs"> 800+ students enrolled.</p>
                    </div>
                    <div className="bg-[#bff0db] rounded-3xl p-6 shadow-md">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center ">
                          <div className=" bg-white p-1 rounded-full ">
                            <FaBook />
                          </div>
                          <p className="text-xs ml-1">course category</p>
                        </div>

                        <div className="flex items-center text-xs bg-white p-1 rounded-3xl">
                          <StarIcon fontSize="10px" />
                          4.5
                        </div>
                      </div>
                      <h2 className="text-xl font-bold mt-2">Course Name</h2>
                      <p className="mt-4  text-xs"> 800+ students enrolled.</p>
                    </div>
                  </div>

                  <div className="bg-[#f3ebe5] rounded-3xl  flex justify-center items-center h-full">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateRangeCalendar calendars={1} />
                    </LocalizationProvider>
                  </div>

                  {/* Progress Overview */}

                  <motion.div
                    custom={0.4}
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    className="bg-[#f3ebe5] rounded-3xl  p-4"
                  >
                    <h2 className="text-base md:text-xl text-center font-bold  mb-4">
                      Progress Overview
                    </h2>
                    <div className="flex justify-center h-1/2">
                      <CircularProgressbar
                        value={progress}
                        text={`${progress}%`}
                        styles={buildStyles({
                          textSize: "16px",
                          pathColor: `rgba(62, 152, 199, ${progress / 100})`,
                          textColor: "black",
                          trailColor: "#d6d6d6",
                          backgroundColor: "#3e98c7",
                        })}
                      />
                    </div>
                    {/* <p className="text-gray-600 leading-relaxed mt-4">
                Track your progress and see how far you've come.
              </p> */}
                  </motion.div>
                </div>
              </div>
              {/* Visualize Your Learning */}
              <motion.section
                custom={0.8}
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                className="bg-white rounded-lg shadow-lg p-8 mt-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold  mb-4">Learning Hours</h3>
                    <Line data={lineData} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Completion Rate</h3>
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
                <h2 className="text-2xl font-bold mb-4">Recent Activities</h2>
                <ul className="text-gray-600 leading-relaxed">
                  <li>
                    Completed:{" "}
                    <strong>Module 5: Machine Learning Basics</strong>
                  </li>
                  <li>
                    Started: <strong>Course 2: Advanced JavaScript</strong>
                  </li>
                  <li>
                    Joined: <strong>Study Group: React Developers</strong>
                  </li>
                </ul>
              </motion.section>
            </TabPanel>
            <TabPanel value="2">
              {" "}
              <div className=" bg-[#f3ebe5]  p-5  rounded-xl mt-10 text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-8 ">
                <h2 className="text-center my-5">
                  Recommended Courses For You
                </h2>

                <div className="grid grid-cols-2 gap-4 p-2 rounded-3xl ">
                  <div className="bg-[#f3c5c5] rounded-3xl p-6 shadow-md">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center ">
                        <div className=" bg-white p-1 rounded-full ">
                          <FaBook />
                        </div>
                        <p className="text-xs ml-1">course category</p>
                      </div>

                      <div className="flex items-center text-xs bg-white p-1 rounded-3xl">
                        <StarIcon fontSize="10px" />
                        4.5
                      </div>
                    </div>
                    <h2 className="text-xl font-bold mt-2">Course Name</h2>
                    <p className="mt-4  text-xs"> 800+ students enrolled.</p>
                  </div>
                  <div className="bg-[#fae0c1] rounded-3xl p-6 shadow-md">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center ">
                        <div className=" bg-white p-1 rounded-full ">
                          <FaBook />
                        </div>
                        <p className="text-xs ml-1">course category</p>
                      </div>

                      <div className="flex items-center text-xs bg-white p-1 rounded-3xl">
                        <StarIcon fontSize="10px" />
                        4.5
                      </div>
                    </div>
                    <h2 className="text-xl font-bold mt-2">Course Name</h2>
                    <p className="mt-4  text-xs"> 800+ students enrolled.</p>
                  </div>
                  <div className="bg-[#d5d2fe] rounded-3xl p-6 shadow-md">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center ">
                        <div className=" bg-white p-1 rounded-full ">
                          <FaBook />
                        </div>
                        <p className="text-xs ml-1">course category</p>
                      </div>

                      <div className="flex items-center text-xs bg-white p-1 rounded-3xl">
                        <StarIcon fontSize="10px" />
                        4.5
                      </div>
                    </div>
                    <h2 className="text-xl font-bold mt-2">Course Name</h2>
                    <p className="mt-4  text-xs"> 800+ students enrolled.</p>
                  </div>
                  <div className="bg-[#bff0db] rounded-3xl p-6 shadow-md">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center ">
                        <div className=" bg-white p-1 rounded-full ">
                          <FaBook />
                        </div>
                        <p className="text-xs ml-1">course category</p>
                      </div>

                      <div className="flex items-center text-xs bg-white p-1 rounded-3xl">
                        <StarIcon fontSize="10px" />
                        4.5
                      </div>
                    </div>
                    <h2 className="text-xl font-bold mt-2">Course Name</h2>
                    <p className="mt-4  text-xs"> 800+ students enrolled.</p>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="3">
              {/* Achievements */}
              <div className="bg-[#f3ebe5] p-5">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Achievements
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <FaTrophy className="text-4xl text-yellow-500 mb-4" />
                    <h3 className="text-lg font-bold text-gray-700">
                      Top Performer
                    </h3>
                    <p className="text-gray-600">
                      Achieved the highest score in the recent assessments.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <FaTrophy className="text-4xl text-yellow-500 mb-4" />
                    <h3 className="text-lg font-bold text-gray-700">
                      Course Completion
                    </h3>
                    <p className="text-gray-600">
                      Completed 5 courses with a 90%+ score.
                    </p>
                  </div>
                </div>
              </div>
            </TabPanel>
          </TabContext>
        </Box>
      </motion.main>
    </div>
  );
};

export default Dashboard;
