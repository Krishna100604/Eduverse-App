import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Chatbot from "./chatbot";
import Spinner from "../Spinner/Spinner";
import homeImg from "../../images/home/home-5.png";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const MainContent = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const handleClick = () => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      loginWithRedirect();
    }
  };
  return (
    <>
      <Navbar />
      {/* Welcome Section */}

      <div className="bg-[#f5ffee] justify-center items-center w-full h-screen flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <img
            className="h-64 md:h-screen w-full object-contain"
            src={homeImg}
            alt=""
          />
        </div>
        <div className="w-full md:w-1/2 p-5">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold leading-relaxed mb-5">
            Develop
            <span className="bg-[#1da8e2] text-white rounded-full mx-1 px-2 md:px-4">
              skills
            </span>
            from the best source
          </h1>
          <p className="my-3 text-sm ">
            Our platform transforms traditional learning into an engaging and
            rewarding experience by combining the best educational content with
            innovative gamification techniques.
          </p>

          <Button onClick={handleClick} description={"Get Started"} />
        </div>
      </div>

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto mt-20 px-4 pt-7"
      >
        {/* Why Choose Eduverse Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold mb-4">Why Choose Eduverse?</h2>
          <ul className="list-disc list-inside leading-relaxed font-bold">
            <li>Adaptive learning based on your progress</li>
            <li>Curated content from reputable sources</li>
            <li>Interactive exercises and simulations</li>
            <li>Progress tracking and performance analytics</li>
            <li>Community support and collaboration</li>
            <li>Access to expert advice and Q&A sessions</li>
          </ul>
          <p className="leading-relaxed mt-4">
            Eduverse is designed to provide you with the tools and resources you
            need to succeed in your educational journey, no matter your level or
            field of study.
          </p>
        </motion.section>

        {/* Key Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Key Features
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Eduverse offers a range of features to enhance your learning
            experience:
          </p>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed mt-4 font-bold">
            <li>Personalized learning paths</li>
            <li>Interactive lessons and quizzes</li>
            <li>Community forums and study groups</li>
            <li>Resource library with articles, videos, and tutorials</li>
            <li>Performance analytics and progress reports</li>
            <li>Gamified learning experience with rewards and achievements</li>
          </ul>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="bg-gradient-to-r from-gray-500 to-teal-500 text-white rounded-lg shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-100 rounded-lg p-4"
            >
              <p className="text-gray-800 leading-relaxed">
                "Eduverse has transformed my learning experience. The
                personalized approach and engaging content have helped me stay
                motivated and achieve my goals."
              </p>
              <p className="text-gray-900 font-medium mt-2">- John Doe</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-100 rounded-lg p-4"
            >
              <p className="text-gray-800 leading-relaxed">
                "As an educator, Eduverse has been an invaluable tool in
                creating interactive lessons and tracking student progress. It's
                easy to use and highly effective."
              </p>
              <p className="text-gray-900 font-medium mt-2">
                - Jane Smith, Educator
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Add the Chatbot Component */}
        <Chatbot />
      </motion.main>
    </>
  );
};

export default MainContent;
