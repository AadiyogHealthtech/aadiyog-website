import React from "react";
import bars from "../assets/bar-chart.svg";
import activity from "../assets/activity.svg";
import community from "../assets/community.svg";
import arrow from "../assets/chevron-right.svg";

function FeaturesSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white font-sans">
      <div className="">
        {/* Section heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-left">
          Experience Real-Time Feedback with Our
          <br className="hidden md:block" />
          Advanced AI Yoga Technology
        </h2>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-[100%]">
          {/* Feature 1 */}
          <div className="flex flex-col items-start">
            {/* Orange icon */}
            <div className="text-orange-500 mb-6">
              <img src={bars} alt="" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-left">
              Step-by-Step Guidance for Your Personalized Yoga Journey
            </h3>
            <p className="text-gray-700 mb-4 text-left">
              Our AI analyzes your movements and provides instant feedback to
              improve your practice.
            </p>
            <a
              href="#"
              className="text-gray-700 font-medium flex items-center hover:text-gray-800"
            >
              Learn More
              <img src={arrow} alt="" className="ml-1 mt-1" />
            </a>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-start">
            {/* Orange icon */}
            <div className="text-orange-500 mb-6">
              <img src={community} alt="" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-left">
              Join the Community for Shared Progress and Motivation
            </h3>
            <p className="text-gray-700 mb-4 text-left">
              Connect with fellow yogis and share your progress to stay
              motivated.
            </p>
            <a
              href="#"
              className="text-gray-700 font-medium flex justify-center items-center hover:text-gray-800"
            >
              <div> Sign Up</div>
              <img src={arrow} alt="" className="ml-1 mt-1" />
            </a>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-start">
            {/* Orange icon */}
            <div className="text-orange-500 mb-6">
              <img src={activity} alt="" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-left">
              Track Your Progress with Our Comprehensive Analytics
            </h3>
            <p className="text-gray-700 mb-4 text-left">
              Monitor your improvements over time with detailed analytics and
              insights.
            </p>
            <a
              href="#"
              className="text-gray-700 font-medium flex items-center hover:text-gray-800"
            >
              Get Started
              <img src={arrow} alt="" className="ml-1 mt-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
