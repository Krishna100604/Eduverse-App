import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Chatbot from "./chatbot";

const MainContent = () => {
  return (
    <>
      <Navbar />
      <Sidebar />

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto mt-20 px-4 pt-7"
      >
        {/* Welcome Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg p-8 mb-8"
        >
          <h1 className="text-4xl font-bold mb-4 text-center">
            Welcome to Eduverse!
          </h1>
          <p className="leading-relaxed text-center">
            Your ultimate learning assistant, designed to personalize your
            educational journey.
          </p>
        </motion.section>

        {/* What is Eduverse Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            What is Eduverse?
          </h2>
          <p className="text-gray-600 leading-relaxed font-bold">
            Eduverse is your personalized learning assistant that adapts to your
            learning style and helps you discover educational resources tailored
            to your needs.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4 font-bold">
            Whether you're a student preparing for exams, a professional seeking
            to upskill, or an educator looking to enhance teaching methods,
            Eduverse offers a platform designed to meet your learning goals.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4 font-bold">
            With Eduverse, you get access to a vast library of educational
            content, interactive tools, and personalized learning paths that
            make learning more effective and enjoyable.
          </p>
        </motion.section>

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

        {/* Start Your Learning Journey Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="bg-gradient-to-r from-purple-500 to-yellow-500 text-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold mb-4">
            Start Your Learning Journey
          </h2>
          <p className="leading-relaxed">
            Ready to experience personalized learning with Eduverse? Sign up now
            and explore a world of knowledge tailored to your needs.
          </p>
          <Link to="/signup">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-500 px-4 py-2 rounded-lg mt-4 hover:bg-gray-100"
            >
              Sign Up Now
            </motion.button>
          </Link>
        </motion.section>

        {/* Chatbot Section */}
        <Chatbot />
      </motion.main>
    </>
  );
};

export default MainContent;
