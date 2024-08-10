import React from "react";
import Grid from "../../UI/Grid";

const Courses = () => {
  const items = [
    { title: "Item 1", content: "This is the content for item 1." },
    { title: "Item 2", content: "This is the content for item 2." },
    { title: "Item 3", content: "This is the content for item 3." },
  ];
  return (
    <div className="bg-white h-screen p-10  items-center justify-between">
      <div className="  ">
        <h1 className=" text-2xl text-[#bb80b8] text-center sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-5 ">
          Our
          <span className="bg-[#a553a1] pb-1 text-white rounded-full px-2 sm:px-3 lg:px-4 mx-1">
            popular
          </span>
          courses
        </h1>

        <Grid items={items} />
      </div>
    </div>
  );
};

export default Courses;
