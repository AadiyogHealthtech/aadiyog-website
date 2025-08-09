import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const PricingPlans = () => {
  // State for billing frequency (Monthly, Quarterly, Yearly)
  const [billingFrequency, setBillingFrequency] = useState("Monthly");

  // State for plan type (Individual, Couple, Family)
  const [planType, setPlanType] = useState("Family");

  // State for Pro plan consultations
  const [proConsultations, setProConsultations] = useState(1);

  // Monthly prices for each plan type
  const monthlyPrices = {
    Individual: {
      Basic: 0,
      Plus: 299,
      Pro: {
        1: 599,
        2: 999,
        4: 1599,
      },
    },
    Couple: {
      Basic: 39,
      Plus: 349,
      Pro: {
        1: 749,
        2: 1249,
        4: 1749,
      },
    },
    Family: {
      Basic: 0,
      Plus: 299,
      Pro: {
        1: 999,
        2: 1499,
        4: 1999,
      },
    },
  };

  // Discount factors for billing frequencies
  const discountFactor = {
    Monthly: 1,
    Quarterly: 0.95, // 5% discount
    Yearly: 0.9, // 10% discount
  };

  // Function to calculate the displayed effective monthly price
  const getDisplayedPrice = (plan) => {
    let monthlyPrice;
    if (plan === "Pro") {
      monthlyPrice = monthlyPrices[planType].Pro[proConsultations];
    } else {
      monthlyPrice = monthlyPrices[planType][plan];
    }
    const discount = discountFactor[billingFrequency];
    return {
      originalPrice: monthlyPrice,
      discountedPrice: Math.round(monthlyPrice * discount),
    };
  };

  // Function to calculate total price for Quarterly and Yearly
  const getTotalPrice = (monthlyPrice) => {
    switch (billingFrequency) {
      case "Quarterly":
        return monthlyPrice * 3;
      case "Yearly":
        return monthlyPrice * 12;
      default:
        return monthlyPrice;
    }
  };

  // Render price with original and discounted prices if applicable
  const renderPrice = (plan) => {
    const { originalPrice, discountedPrice } = getDisplayedPrice(plan);

    if (billingFrequency === "Monthly") {
      return `₹${discountedPrice}/mo`;
    }

    const totalOriginalPrice = getTotalPrice(originalPrice);
    const totalDiscountedPrice = getTotalPrice(discountedPrice);

    return (
      <div>
        <span className="line-through text-gray-400 mr-2">
          ₹{totalOriginalPrice}
        </span>
        <span>
          ₹{totalDiscountedPrice}/
          {billingFrequency === "Quarterly" ? "qtr" : "yr"}
        </span>
      </div>
    );
  };

  return (
    <div className="w-full max-w-8xl mx-auto md:px-14 p-4 mt-32 font-sans">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-md mb-2 font-bold text-gray-800">Affordable</h2>
        <h1 className="text-4xl font-bold mb-3">Subscription Plans</h1>
        <p className="text-gray-600">
          Choose the plan that fits your wellness journey
        </p>
      </div>

      {/* Billing Frequency Toggle */}
      <div className="flex justify-center mb-4">
        <div className="flex p-1">
          {["Monthly", "Quarterly", "Yearly"].map((frequency) => (
            <button
              key={frequency}
              className={`px-4 py-2 border-1 border-black font-medium ${
                billingFrequency === frequency
                  ? "bg-orange-500 text-white"
                  : "text-gray-600"
              }`}
              onClick={() => setBillingFrequency(frequency)}
            >
              {frequency}
            </button>
          ))}
        </div>
      </div>

      {/* Plan Type Toggle */}
      {/* <div className="flex justify-center mb-8">
        <div className="flex p-1">
          {["Individual", "Couple", "Family"].map((type) => (
            <button
              key={type}
              className={`px-4 py-2 border-1 border-black font-medium ${
                planType === type ? "bg-orange-500 text-white" : "text-gray-600"
              }`}
              onClick={() => setPlanType(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div> */}

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Basic Plan */}
        <div className="border p-6 flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-2">Basic</h3>
          <p className="text-3xl font-bold mb-4">{renderPrice("Basic")}</p>
          <ul className="text-left mb-6 space-y-2 flex-grow">
            <li className="flex items-center">
              <FaCheck className="text-black mr-2" /> Limited Post-Workout
              Analysis
            </li>
            <li className="flex items-center">
              <FaCheck className="text-black mr-2" /> Community sharing
            </li>
            <li className="flex items-center">
              <FaCheck className="text-black mr-2" /> Wellness Tips
            </li>
          </ul>
          <button className="w-full bg-orange-500 text-white py-2 hover:bg-orange-600 border-1 border-black cursor-pointer">
            Get started
          </button>
        </div>

        {/* Plus Plan */}
        <div className="border p-6 flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-2">Plus</h3>
          <p className="text-3xl font-bold mb-4">{renderPrice("Plus")}</p>
          <ul className="text-left mb-6 space-y-2 flex-grow">
            <li className="flex items-center">
              <FaCheck className="text-black mr-2" /> Everything in Basic
              (family for 1 account)
            </li>
            <li className="flex items-center">
              <FaCheck className="text-black mr-2" /> Real-time Yoga Feedback &
              Correction
            </li>
            <li className="flex items-center">
              <FaCheck className="text-black mr-2" /> Detailed Workout Analytics
            </li>
            <li className="flex items-center">
              <FaCheck className="text-black mr-2" /> Performance grading
            </li>
            <li className="flex items-center">
              <FaCheck className="text-black mr-2" /> AI-based Diet & Workout
              generator
            </li>
          </ul>
          <button className="w-full bg-orange-500 text-white py-2 hover:bg-orange-600 border-1 border-black cursor-pointer">
            Get started
          </button>
        </div>

        {/* Pro Plan */}
        <div className="border p-6 flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-2">Pro</h3>
          <p className="text-3xl font-bold mb-4">{renderPrice("Pro")}</p>

          {/* Consultations Toggle */}
          {/* <div className="flex space-x-2 mb-4">
            {[1, 2, 4].map((num) => (
              <button
                key={num}
                className={`px-3 py-1 border ${
                  proConsultations === num
                    ? "bg-orange-500 text-white border-orange-500"
                    : "border-gray-300 text-gray-900 text-md"
                }`}
                onClick={() => setProConsultations(num)}
              >
                {num} {num === 1 ? "call" : "calls"} / month
              </button>
            ))}
          </div> */}

          <ul className="text-left mb-6 space-y-2 flex-grow">
            <li className="flex items-center">
              <FaCheck className="text-black mr-2" /> Everything in Plus (family
              for 4 accounts)
            </li>

            <li className="flex items-center">
              <FaCheck className="text-black mr-2" />Live Yoga Classes
            </li>
            <li className="flex items-center">
              <FaCheck className="text-black mr-2" /> Personalized Diet Guidance
            </li>
            <li className="flex items-center">
              <FaCheck className="text-black mr-2" /> 24/7 support
            </li>
            <li className="flex items-center">
              <FaCheck className="text-black mr-2" />  Health Dashboard
            </li>
          </ul>
          <button className="w-full bg-orange-500 text-white py-2 hover:bg-orange-600 border-1 border-black cursor-pointer">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
