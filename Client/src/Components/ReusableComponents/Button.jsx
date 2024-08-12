import React from "react";

const Button = ({ description, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative mt-2 text-sm md:text-base bg-[#1da8e2] text-white font-bold py-2 px-4 rounded-full transform hover:scale-105 transition-transform"
      style={{
        boxShadow: "0px 4px 0px #F97316, 2px 7px 0px #6B21A8", // orange shadow first, then purple
      }}
    >
      <p className="text-sm md:text-base"> {description}</p>
    </button>
  );
};

export default Button;
