import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Chatbot from "./chatbot";
import homeImg from "../../images/home/home-5.png";
import Button from "../ReusableComponents/Button";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import About from "./HomeSections/About";
import Features from "./HomeSections/Features";
import Courses from "./HomeSections/Courses";
import Testimonial from "./HomeSections/Testimonial";
import ContentSkeleton from "../Loading/Skeleton/ContentSkeleton";
import ImageSkeleton from "../Loading/Skeleton/ImageSkeleton";

const MainContent = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const handleClick = () => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      loginWithRedirect();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />

      {/* Welcome Section */}
      <div className="bg-[#f5ffee] justify-center items-center w-full h-1/4 lg:h-screen flex flex-col md:flex-row">
        <div className="hidden sm:block md:w-1/2">
          {loading ? <ImageSkeleton /> : <img src={homeImg} alt="Home" />}
        </div>
        <div className="md:w-1/2 p-5">
          {loading ? (
            <ContentSkeleton width={500} height={50} />
          ) : (
            <>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-5">
                Develop
                <span className="bg-[#1da8e2] text-white rounded-full px-2 sm:px-3 lg:px-4 mx-1">
                  skills
                </span>
                from the best source
              </h1>
              <p className="my-3 text-sm">
                Our platform transforms traditional learning into an engaging
                and rewarding experience by combining the best educational
                content with innovative gamification techniques.
              </p>
              <Button onClick={handleClick} description={"Get Started"} />
            </>
          )}
        </div>
      </div>

      <About />
      <Features />
      <Courses />
      <Testimonial />
      <Chatbot />
    </>
  );
};

export default MainContent;
