import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import PersonalizedSection from "./components/PersonalizedSection";
import TestimonialComponent from "./components/TestimonialComponent";
import Support from "./components/Support";
import PricingPlans from "./components/PricingPlans";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
// Add this CSS to your global styles or create a new file
const scrollBehaviorStyle = `
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px; /* Adjust based on your header height */
  }
`;

function App() {
  return (
    <div className="min-h-screen flex flex-col min-w-screen">
      <style>{scrollBehaviorStyle}</style>
      <Header />
      <main className="flex-grow">
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
      </main>
      <footer className="min-h-300px">
        <Footer />
      </footer>
      <ScrollToTop />
    </div>
  );
}

export default App;
