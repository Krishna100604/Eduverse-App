import React, { useEffect, useState } from "react";
import ContentSkeleton from "../../Loading/Skeleton/ContentSkeleton";
import CardSkeleton from "../../Loading/Skeleton/CardSkeleton";

const TestimonialCard = ({
  name,
  title,
  imageUrl,
  review,
  rating,
  bgColor,
  loading,
}) => {
  return (
    <div
      className={`relative ${
        loading ? "" : `bg-${bgColor}`
      } p-6 rounded-[20px] shadow-lg border border-gray-200  max-w-sm mx-auto`}
    >
      <div className="absolute top-0 left-0 w-full h-full rounded-[20px] clip-testimonial-pattern border border-black"></div>
      <div className="relative">
        {loading ? (
          <ContentSkeleton />
        ) : (
          <>
            <p className="text-gray-800 text-base mb-4 leading-relaxed">
              {review}
            </p>
            <div className="flex items-center">
              <img
                src={imageUrl}
                alt={name}
                className="w-12 h-12 rounded-full object-cover border-2 border-white"
              />
              <div className="ml-4">
                <h3 className="font-bold text-lg">{name}</h3>
                <p className="text-gray-600 text-sm">{title}</p>
              </div>
            </div>
            <div className="flex mt-4">
              {Array.from({ length: rating }, (_, i) => (
                <span key={i} className="text-yellow-500 text-lg">
                  ⭐
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const Testimonial = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      name: "Maria Resbet",
      title: "Learner from Job skills",
      imageUrl: "https://via.placeholder.com/50",
      review:
        "With high social media impact levels, video content has become extremely popular among users. People of almost all age groups and interests have become used to video content.",
      rating: 5,
      bgColor: "blue-100",
    },
    {
      name: "Maria Resbet",
      title: "Learner from Job skills",
      imageUrl: "https://via.placeholder.com/50",
      review:
        "With high social media impact levels, video content has become extremely popular among users. People of almost all age groups and interests have become used to video content.",
      rating: 5,
      bgColor: "green-100",
    },
    {
      name: "Maria Resbet",
      title: "Learner from Job skills",
      imageUrl: "https://via.placeholder.com/50",
      review:
        "With high social media impact levels, video content has become extremely popular among users. People of almost all age groups and interests have become used to video content.",
      rating: 5,
      bgColor: "yellow-100",
    },
  ];

  return (
    <div className="text-center px-8 py-16 bg-white">
      {loading ? (
        <ContentSkeleton />
      ) : (
        <>
          <h2 className="text-2xl text-[#1e1e5c] sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-5">
            We are loved by
            <span className="bg-[#1e1e5c] text-white rounded-full px-2 sm:px-3 lg:px-4 mx-1">
              2000+
            </span>{" "}
            learners
          </h2>
          <p className="text-gray-700 leading-relaxed mb-12 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facere
            quibusdam quia hic fugiat unde illum autem, laudantium eius suscipit
            est ipsum dignissimos quod corporis et eaque beatae! Ipsa, minus?
          </p>
        </>
      )}

      {loading ? (
        <CardSkeleton />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              loading={loading} // Pass the loading state to each card
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Testimonial;
