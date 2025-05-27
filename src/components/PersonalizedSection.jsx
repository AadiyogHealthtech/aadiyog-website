import React from "react";
import HeroImage from "../assets/HeroImage.png";
import arrow from "../assets/chevron-right.svg";
function PersonalizedSection() {
  const handleRedirect = () => {
    window.location.href = "https://aadiyog-client.netlify.app/";
  };
  return (
    <section className="py-16 mx-4 md:px-8 font-sans ">
      {/* Mobile view */}
      <div className="md:hidden">
        <span className="text-md text-gray-700 tracking-wider font-semibold">
          Transform
        </span>

        <h2 className="text-3xl font-bold mt-3 mb-6">
          Unlock Your Full Potential with Yoga
        </h2>

        <p className="text-gray-900 mb-8 font-semibold">
          Experience personalized yoga sessions that adapt to your needs. Join a
          vibrant community and elevate your practice together.
        </p>

        {/* Personalized Diet */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3">Persnoalized Diet</h3>
          <p className="text-gray-900 font-semibold">
            Our experts craft a evidence backed customized diet plan,
            progressing you towards a healthier tomorrow.
          </p>
        </div>

        {/* Personalized Yoga */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3">Personalized Yoga</h3>
          <p className="text-gray-900 font-semibold">
            Get personalized yoga workouts tailored to your unique needs and say
            goodbye to aches and pains.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex space-x-4 mt-8 mb-8">
          <button
            className="bg-orange-500 text-white px-6 py-3 hover:bg-orange-600 transition cursor-pointer"
            onClick={handleRedirect}
          >
            Sign Up
          </button>
          <button className="flex items-center text-gray-700 hover:text-gray-800 cursor-pointer transition">
            Know More
            <img src={arrow} alt="" className="ml-1 mt-1" />
          </button>
        </div>

        {/* Image for mobile view */}
        <div className="w-full h-64 bg-gray-200">
          <img
            src={HeroImage}
            alt="Yoga practice and healthy diet"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:block container min-w-full px-5">
        <div className="flex flex-row justify-center items-center h-full">
          {/* Left content */}
          <div className="w-1/2 pr-12">
            <span className="text-sm text-gray-700 tracking-wider">
              Transform
            </span>

            <h2 className="text-4xl font-bold mt-3 mb-6">
              Unlock Your Full Potential with Yoga
            </h2>

            <p className="text-gray-700 mb-8">
              Experience personalized yoga sessions that adapt to your needs.
              Let our experts craft a workout and a diet plan customized for
              you.
            </p>

            <div className="flex space-x-6">
              {/* Personalized Diet */}
              <div className="w-1/2">
                <h3 className="text-xl font-bold mb-3">Personalized Diet</h3>
                <p className="text-gray-700 mb-2">
                  Our experts craft a evidence backed customized diet plan,
                  progressing you towards a healthier tomorrow.
                </p>
              </div>

              {/* Personalized Yoga */}
              <div className="w-1/2">
                <h3 className="text-xl font-bold mb-3">Personalized Yoga</h3>
                <p className="text-gray-700 mb-4">
                  Get personalized yoga workouts tailored to your unique needs
                  and say goodbye to aches and pains.
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex space-x-4 mt-8">
              <button className="bg-orange-500 text-white px-6 py-2 hover:bg-orange-600 transition cursor-pointer">
                Sign Up
              </button>
              <button className="flex items-center text-gray-700 hover:text-gray-800 cursor-pointer transition">
                Know More
                <img src={arrow} alt="" className="ml-1 mt-1 " />
              </button>
            </div>
          </div>

          {/* Right image */}
          <div className="w-1/2 h-[600px] lg:h-[700px]">
            <img
              src={HeroImage}
              alt="Yoga practice and healthy diet"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PersonalizedSection;
