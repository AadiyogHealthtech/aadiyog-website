import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./components/HomePage";               
import PrivacyPolicy from "./components/PrivacyPolicy";    

const scrollBehaviorStyle = `
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px; /* Adjust based on your header height */
  }
`;

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col min-w-full ">
        <style>{scrollBehaviorStyle}</style>

        {/* <Header /> */}

        <main className="flex-grow">
          <Routes>
            {/* Home route: your current single-page sections */}
            <Route path="/" element={<HomePage />} />

            {/* Privacy policy page route */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </main>

        {/* <footer className="min-h-300px">
          <Footer />
        </footer> */}

        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
