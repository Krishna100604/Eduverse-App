import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Chatbot from "./chatbot";
import Spinner from "../Spinner/Spinner";
import homeImg from "../../images/home/home-5.png";
import aboutImg from "../../images/home/about.jpg";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Grid from "../UI/Grid";
import Story from "./HomeSections/Story";
import Testimonial from "./HomeSections/Testimonial";
import Features from "./HomeSections/Features";
import About from "./HomeSections/About";
import Courses from "./HomeSections/Courses";

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

      <div className="bg-[#f5ffee]  justify-center items-center w-full h-1/4 lg:h-screen flex flex-col md:flex-row">
        <div className=" hidden sm:block md:w-1/2 ">
          <img src={homeImg} alt="" />
        </div>
        <div className=" md:w-1/2 p-5 ">
          <h1 className="text-2xl  sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-5 ">
            Develop
            <span className="bg-[#1da8e2] text-white rounded-full px-2 sm:px-3 lg:px-4 mx-1">
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

      <About />

      <Features />

      <Courses />

      {/* <Story /> */}

      <Testimonial />

      <Chatbot />
    </>
  );
};

export default MainContent;
