import React from "react";

const Grid = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-sky-100 p-5 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <h2 className="text-xl font-bold mb-2">{item.title}</h2>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Grid;
