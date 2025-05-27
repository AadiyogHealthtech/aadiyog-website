import React, { useState, useEffect } from "react";
import leftArrow from "../assets/leftArrow.svg";
import rightArrow from "../assets/rightArrow.svg";
const TestimonialComponent = () => {
  const testimonials = [
    {
      id: 1,
      text: "I've tried various wellness programs before, but this one is different. The combination of naturopathy and yoga has helped me connect with my body and mind on a deeper level. I feel more grounded and at peace.",
      author: "Preeti",
      location: "Kota, Rajasthan",
      image:
        "https://img.freepik.com/premium-photo/smiling-brunette-sitting-lotus-pose-looking-camera_13339-175763.jpg?w=1380", // Sample image
    },
    {
      id: 2,
      text: "The holistic approach to wellness changed my perspective completely. After just a month, I noticed significant improvements in my energy levels and overall health.",
      author: "Rahul",
      location: "Mumbai, Maharashtra",
      image:
        "https://img.freepik.com/free-photo/focused-young-indian-man-meditating-lotus-pose_1262-12658.jpg?t=st=1741445191~exp=1741448791~hmac=b4f9b76deb35ed6ad54416261e35f843c75d2fbe434dee11f14239aa28a710a1&w=1380", // Sample image
    },
    {
      id: 3,
      text: "As someone who was skeptical about alternative wellness practices, I'm now a true believer. The personalized program addressed my specific needs and the results speak for themselves.",
      author: "Anjali",
      location: "Bangalore, Karnataka",
      image:
        "https://img.freepik.com/free-photo/woman-digital-disconnecting-home-by-doing-yoga_23-2150037475.jpg?t=st=1741445109~exp=1741448709~hmac=216ad02983fa987d8ff1b3eac8026aff36025d1792b6509212ab6563543afd48&w=1380", // Sample image
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToPrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 300); // Match this with transition duration
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 300); // Match this with transition duration
  };

  const goToIndex = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  // Automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 4000); // Changed to 2 seconds for better visibility of transition

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="w-full mx-auto px-4 py-12 md:p-4 md:px-14 md:h-screen flex flex-col md:justify-center font-sans">
      {/* Mobile view */}
      <div className="md:hidden mx-1">
        {/* Navigation dots and arrows */}
        <div className="flex justify-between items-center mb-6">
          {/* Indicator dots */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 ${
                  index === currentIndex ? "bg-black" : "bg-gray-300"
                } rounded-full cursor-pointer`}
                onClick={() => goToIndex(index)}
              ></div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex space-x-3">
            <button
              className="h-10 w-10 rounded-full bg-orange-500 text-white flex items-center justify-center cursor-pointer"
              onClick={goToNext}
            >
              <img src={leftArrow} className="w-4 h-5" />
            </button>
            <button
              className="h-10 w-10 rounded-full bg-orange-500 text-white flex items-center justify-center cursor-pointer"
              onClick={goToNext}
            >
              <img src={rightArrow} className="w-4 h-5" />
            </button>
          </div>
        </div>

        {/* Stars */}
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-xl text-black">
              ★
            </span>
          ))}
        </div>

        {/* Testimonial text */}
        <div
          className={`transition-opacity duration-300 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <blockquote className="mb-4">
            <p className="text-base font-bold">"{currentTestimonial.text}"</p>
          </blockquote>

          <div className="mb-6">
            <p className="font-medium">{currentTestimonial.author}</p>
            <p className="text-sm text-gray-700">
              {currentTestimonial.location}
            </p>
          </div>

          {/* Image */}
          <div className="bg-gray-200 w-full h-64">
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.author}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:flex flex-col max-w-8xl">
        <div className="flex flex-row w-full h-[450px]">
          {/* Image section with smooth transition */}
          <div
            className={`w-1/2 h-full transition-opacity duration-300 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.author}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Testimonial content with smooth transition */}
          <div
            className={`w-1/2 h-full p-8 flex flex-col justify-center overflow-y-auto transition-opacity duration-300 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="flex mb-8">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-xl text-black">
                  ★
                </span>
              ))}
            </div>

            <blockquote className="mb-12">
              <p className="text-base font-bold">"{currentTestimonial.text}"</p>
            </blockquote>

            <div>
              <p className="font-medium">{currentTestimonial.author}</p>
              <p className="text-sm">{currentTestimonial.location}</p>
            </div>
          </div>
        </div>

        {/* Navigation section - Now placed below content */}
        <div className="flex items-center justify-between mt-4 px-4 py-2">
          <div className="flex space-x-1">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 ${
                  index === currentIndex ? "bg-gray-700" : "bg-gray-300"
                } rounded-full cursor-pointer`}
                onClick={() => goToIndex(index)}
              ></div>
            ))}
          </div>

          <div className="flex space-x-2">
            <button
              className="h-10 w-10 rounded-full bg-orange-500 text-white flex items-center justify-center cursor-pointer"
              onClick={goToPrevious}
            >
              <img src={leftArrow} alt="" className="w-4 h-5" />
            </button>
            <button
              className="h-10 w-10 rounded-full bg-orange-500 text-white flex items-center justify-center cursor-pointer"
              onClick={goToNext}
            >
              <img src={rightArrow} alt="" className="w-4 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
