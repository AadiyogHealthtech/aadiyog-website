import React from "react";
import HeroImage from "../assets/HeroImage.png";

const LOGIN_URL = "https://aadiyog-client.netlify.app/login";

function HeroSection() {
  const goToLogin = () => {
    window.location.href = LOGIN_URL;
  };

  return (
    <section className="flex flex-col bg-white h-screen mb-2 font-sans">
      {/* Mobile view content */}
      <div className="md:hidden">
        <div className="p-4 mx-2">
          <h1 className="text-4xl font-bold mb-4">
            Transform Your Yoga Practice with AI Insights
          </h1>

          <div className="flex gap-2 place-content-start mb-1">
            <button
              onClick={goToLogin}
              className="bg-orange-500 text-white px-6 py-3 hover:bg-orange-600 transition cursor-pointer"
            >
              Download Now
            </button>
            <button
              onClick={goToLogin}
              className="border border-gray-800 text-gray-950 px-6 py-2 hover:bg-gray-100 transition cursor-pointer"
            >
              Try It
            </button>
          </div>
        </div>

        {/* Image for mobile view */}
        <div className="relative w-full h-full">
          <img
            src={HeroImage}
            alt="Person practicing yoga on beach at sunset with phone showing AI feedback"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Desktop view layout */}
      <div className="hidden md:flex h-screen">
        {/* Left content for desktop */}
        <div className="w-2/5 p-14 flex flex-col justify-center relative">
          <h1 className="text-5xl font-bold text-orange-500 mb-6">
            Transform Your Yoga Practice with
            <span className="block">AI Insights</span>
          </h1>

          <p className="text-gray-700 mb-4">
            Experience personalized yoga sessions with real-time feedback tailored to your needs.
          </p>

          <p className="mb-8">
            Join <span className="font-bold">Aadiyog</span> and elevate your practice today!
          </p>

          <div className="flex flex-row gap-4">
            <button
              onClick={goToLogin}
              className="bg-orange-500 text-white px-6 py-3 hover:bg-orange-600 transition cursor-pointer"
            >
              Download Now
            </button>
            <button
              onClick={goToLogin}
              className="border border-gray-700 text-gray-950 px-6 py-3 hover:bg-gray-100 transition cursor-pointer"
            >
              Try It Out
            </button>
          </div>

          {/* Down arrow */}
          <div className="absolute bottom-8 left-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-400 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Right image for desktop */}
        <div className="w-3/5">
          <img
            src={HeroImage}
            alt="Person practicing yoga on beach at sunset with phone showing AI feedback"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
