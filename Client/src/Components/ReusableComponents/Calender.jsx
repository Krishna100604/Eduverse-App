import React from "react";

const Calendar = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1); // Example for a month with 30 days

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">August 2024</h2>
      <div className="grid grid-cols-7 gap-4 text-center">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-gray-500 font-medium">
            {day}
          </div>
        ))}
        {daysInMonth.map((day) => (
          <div
            key={day}
            className="bg-blue-100 rounded-lg p-2 text-center text-gray-700 hover:bg-blue-200"
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
