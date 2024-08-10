import React from "react";

const SuccessStoryCard = ({ icon, title, description }) => {
  return (
    <div className="bg-yellow-200 rounded-[30px] p-8 flex flex-col items-center text-center shadow-md">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const Story = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-8 py-16 bg-yellow-100">
      {/* Text Section */}
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h2 className="text-4xl font-bold text-[#1e1e5c] mb-4">
          About our success story
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
          debitis, quisquam quia explicabo dicta, alias culpa itaque sunt
          quibusdam animi, beatae ratione ex veritatis natus fugiat eius
          accusamus expedita optio.
        </p>
      </div>
      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-1/2">
        <SuccessStoryCard
          icon="🏆"
          title="40 years of great success"
          description=""
        />
        <SuccessStoryCard
          icon="📚"
          title="All courses are well designed"
          description=""
        />
        <SuccessStoryCard
          icon="🎓"
          title="10K+ certified learners"
          description=""
        />
        <SuccessStoryCard
          icon="⭐"
          title="50+ programs are top rated"
          description=""
        />
      </div>
    </div>
  );
};

export default Story;
