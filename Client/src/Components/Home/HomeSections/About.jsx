import React, { useEffect, useState } from "react";
import ImageSkeleton from "../../Loading/Skeleton/ImageSkeleton";
import ContentSkeleton from "../../Loading/Skeleton/ContentSkeleton";

const About = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="bg-[#f1cffe] h-screen px-10 py-5 flex items-center justify-between">
        <div className="md:w-1/2">
          {loading ? (
            <ContentSkeleton />
          ) : (
            <>
              <h1 className="text-2xl text-[#bb80b8] sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-5">
                We provide
                <span className="bg-[#a553a1] text-white rounded-full px-2 sm:px-3 lg:px-4 mx-1">
                  smart
                </span>
                online education
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestiae, quasi sint et accusamus labore nulla reiciendis
                maxime possimus ratione alias totam deleniti eius optio tempore
                id! Dolorem rem asperiores fugiat?
              </p>
            </>
          )}
        </div>
        <div className="md:w-1/2">{/* <img src={aboutImg} alt="" /> */}</div>
      </div>
    </>
  );
};

export default About;
