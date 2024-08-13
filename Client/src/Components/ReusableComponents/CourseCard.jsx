import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { FaBook } from "react-icons/fa";

const CourseCard = ({
  bgColor,
  courseCategory,
  rating,
  courseName,
  studentsEnrolled,
  icon,
}) => {
  return (
    <div
      className={`rounded-3xl p-4 shadow-md ${bgColor} h-full flex flex-col justify-between`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center ">
          <div className="bg-white p-1 rounded-full">
            {icon || <FaBook size={16} />}
          </div>
          <p className="text-xs ml-1">{courseCategory}</p>
        </div>
        <div className="flex items-center text-xs bg-white p-1 rounded-3xl">
          <StarIcon fontSize="10px" className="text-yellow-300" />
          {rating}
        </div>
      </div>
      <h2 className="text-xl font-bold mt-2">{courseName}</h2>
      <p className="mt-4 text-xs">{studentsEnrolled} students enrolled.</p>
    </div>
  );
};

export default CourseCard;
