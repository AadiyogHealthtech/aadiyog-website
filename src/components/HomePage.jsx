import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import PersonalizedSection from "../components/PersonalizedSection";
import TestimonialComponent from "../components/TestimonialComponent";
import Support from "../components/Support";
import PricingPlans from "../components/PricingPlans";
import GetInTouch from "../components/GetInTouch";

function HomePage() {
  return (
    <>
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <FeaturesSection />
        <PersonalizedSection />
      </div>
      <div id="testimonials">
        <TestimonialComponent />
      </div>
      <div id="support">
        <Support />
      </div>
      <div id="pricing">
        <PricingPlans />
      </div>
      <div id="contact">
        <GetInTouch />
      </div>
    </>
  );
}

export default HomePage;
