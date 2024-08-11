import React, { useEffect, useState } from "react";
import Grid from "../../UI/Grid";
import Button from "../../UI/Button";
import ContentSkeleton from "../../Loading/Skeleton/ContentSkeleton";
import CardSkeleton from "../../Loading/Skeleton/CardSkeleton";

const Courses = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const items = [
    {
      imgSrc: "https://via.placeholder.com/150",
      heading: "Card 1",
      description:
        "This is a description for Card 1. It contains brief details about the content.",
      buttonText: "Learn More",
    },
    {
      imgSrc: "https://via.placeholder.com/150",
      heading: "Card 2",
      description:
        "This is a description for Card 2. It contains brief details about the content.",
      buttonText: "Learn More",
    },
    {
      imgSrc: "https://via.placeholder.com/150",
      heading: "Card 3",
      description:
        "This is a description for Card 3. It contains brief details about the content.",
      buttonText: "Learn More",
    },
  ];

  return (
    <div className="bg-yellow-100 h-screen p-10  items-center justify-between ">
      <div className=" ">
        {loading ? (
          <ContentSkeleton />
        ) : (
          <h1 className=" text-2xl text-[#f1aa2b]  text-center sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-5 ">
            Our
            <span className="bg-yellow-300 pb-1 text-white rounded-full px-2 sm:px-3 lg:px-4 mx-1">
              popular
            </span>
            courses
          </h1>
        )}
      </div>
      <div className="container mx-auto pt-10">
        {loading ? (
          <CardSkeleton />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg border border-gray-400  transform hover:scale-105 transition-transform  rounded-lg "
                >
                  <img
                    src={item.imgSrc}
                    alt={item.heading}
                    className="mb-5 w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h2 className="text-xl font-semibold mb-3">
                      {item.heading}
                    </h2>
                    <p className="text-gray-600 mb-5">{item.description}</p>
                    <button className="bg-[#f1aa2b] text-white px-4 py-2 rounded hover:bg-amber-600">
                      {item.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      {/* <Button onClick={""} description={"View all courses"} /> */}
    </div>
  );
};

export default Courses;
