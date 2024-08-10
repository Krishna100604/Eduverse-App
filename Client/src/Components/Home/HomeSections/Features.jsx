import React from "react";
import Button from "../../UI/Button";
import Grid from "../../UI/Grid";

const Features = () => {
  const items = [
    { title: "Item 1", content: "This is the content for item 1." },
    { title: "Item 2", content: "This is the content for item 2." },
    { title: "Item 3", content: "This is the content for item 3." },
  ];
  return (
    <div>
      <div className="bg-[#f5ffee] h-screen p-10  items-center ">
        <div className="flex ">
          <div>
            <h2 className="text-xl w-2/4 sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-relaxed ">
              Special features just for you
            </h2>
          </div>
          <div className="w-2/4">
            <p className="text-sm mb-5">
              With Eduverse, you can earn points, unlock achievements, and
              compete with friends as you explore a vast array of learning
              materials tailored to your needs. Whether you're looking to master
              new skills, prepare for exams, or simply satisfy your curiosity,
              our interactive environment ensures that learning is not just
              effective but also fun.
            </p>
          </div>
        </div>

        <Grid items={items} />
      </div>
    </div>
  );
};

export default Features;
