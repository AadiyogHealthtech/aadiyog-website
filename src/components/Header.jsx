import React, { useState } from "react";
import HeaderLogo from "../assets/HeaderLogo1.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isDropdownOpen) setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNavClick = () => {
    // Close the mobile menu when a nav item is clicked
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const handleRedirect = () => {
    window.location.href = "https://aadiyog-client.netlify.app/";
  };

  return (
    <header className="flex flex-col bg-white shadow border-b border-b-gray-300 font-sans">
      {/* Mobile Header */}
      <div className="flex items-center justify-between px-4 py-3 md:hidden">
        <div className="flex items-center text-orange-500 cursor-pointer">
          <img src={HeaderLogo} alt="Logo" className="w-40 h-12" />
        </div>
        <button
          onClick={toggleMenu}
          className="text-gray-600 focus:outline-none"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mx-2 flex flex-col h-screen">
          <a
            href="#home"
            onClick={handleNavClick}
            className="px-4 py-3 text-black hover:text-orange-500 font-semibold"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={handleNavClick}
            className="px-4 py-3 text-black hover:text-orange-500 font-semibold"
          >
            About Us
          </a>
          <a
            href="#pricing"
            onClick={handleNavClick}
            className="px-4 py-3 text-black hover:text-orange-500 font-semibold"
          >
            Pricing
          </a>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="w-full flex items-center justify-between px-4 py-3 text-black hover:text-orange-500 font-semibold"
            >
              More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 ml-1 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="bg-orange-500 mx-4 text-white">
                <a
                  href="#contact"
                  onClick={handleNavClick}
                  className="block px-4 py-3 hover:bg-orange-600"
                >
                  Contact Us
                </a>
                <a
                  href="#testimonials"
                  onClick={handleNavClick}
                  className="block px-4 py-3 hover:bg-orange-600"
                >
                  Testimonials
                </a>
                <a
                  href="#support"
                  onClick={handleNavClick}
                  className="block px-4 py-3 hover:bg-orange-600"
                >
                  Support
                </a>
              </div>
            )}
          </div>
          {/* <div className="p-4 space-y-2">
            <button
              onClick={handleRedirect}
              className="w-full px-4 py-2 mb-6 border-black border-2 hover:bg-gray-100 text-black"
            >
              Log In
            </button>
            <button
              onClick={handleRedirect}
              className="w-full px-4 py-2 bg-orange-500 text-white hover:bg-orange-600"
            >
              Sign Up
            </button>
          </div> */}
        </div>
      )}

      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-between px-10 py-3">
        <div className="flex items-center">
          <div className="flex items-center text-orange-500 cursor-pointer">
            <img src={HeaderLogo} alt="Logo" className="w-35 h-12" />
          </div>
        </div>

        <div className="flex items-center">
          <nav className="flex space-x-6 ">
            <a href="#home" className="text-black hover:text-orange-500">
              Home
            </a>
            <a href="#about" className="text-black hover:text-orange-500">
              About Us
            </a>
            <a href="#pricing" className="text-black hover:text-orange-500">
              Pricing
            </a>
            <div className="relative group">
              <button className="flex items-center text-black hover:text-orange-500">
                More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block bg-orange-500 text-white w-48 mt-2 py-2 z-10">
                <a
                  href="#contact"
                  className="block px-4 py-2 hover:bg-orange-600"
                >
                  Contact Us
                </a>
                <a
                  href="#testimonials"
                  className="block px-4 py-2 hover:bg-orange-600"
                >
                  Testimonials
                </a>
                <a
                  href="#support"
                  className="block px-4 py-2 hover:bg-orange-600"
                >
                  Support
                </a>
              </div>
            </div>
          </nav>

          {/* <div className="flex items-center space-x-2">
            <button
              onClick={handleRedirect}
              className="px-4 py-2 border-black border-2 hover:bg-gray-100 text-black cursor-pointer"
            >
              Log In
            </button>
            <button
              onClick={handleRedirect}
              className="px-4 py-2 cursor-pointer bg-orange-500 text-white hover:bg-orange-600"
            >
              Sign Up
            </button>
          </div> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
