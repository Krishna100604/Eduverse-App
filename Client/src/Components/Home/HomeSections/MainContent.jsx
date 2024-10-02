import React, { useState, useEffect } from "react";
import Navbar from "./../../Navbar";
import Chatbot from "../chatbot";
import homeImg from "../../../images/home/home-5.png";
import Button from "../../ReusableComponents/Button";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import About from "./About";
import Features from "./Features";
import Courses from "./Courses";
import Testimonial from "./Testimonial";
import ContentSkeleton from "../../Loading/Skeleton/ContentSkeleton";
import ImageSkeleton from "../../Loading/Skeleton/ImageSkeleton";

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
      <div className="bg-[#f5ffee] justify-center items-center w-full h-2/4 lg:h-screen flex flex-col md:flex-row">
        <div className=" sm:block md:w-1/2">
          {loading ? <ImageSkeleton /> : <img src={homeImg} alt="Home" />}
        </div>
        <div className="md:w-1/2 p-5 mt-10">
          {loading ? (
            <ContentSkeleton width={500} height={50} />
          ) : (
            <>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold  mb-4 sm:mb-5">
                Develop
                <span className="bg-[#1da8e2] text-white rounded-full px-2 sm:px-3 lg:px-4 mx-1 ">
                  skills
                </span>
                <br />
                <div className="mt-2"> from the best source</div>
              </h1>
              <p className="my-3 text-xs md:text-sm">
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
