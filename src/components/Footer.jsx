import React from "react";
import mainLogo from "../assets/mainLogo.svg";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-900 pt-16 mt-32 font-sans">
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column One */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold mb-4">Column One</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Column Two */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold mb-4">Column Two</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Community Forum
                </a>
              </li>
            </ul>
          </div>

          {/* Column Three */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center border-t border-gray-900 py-8">
          <div className="flex items-center space-x-2">
            <div className="flex items-center text-orange-500 cursor-pointer">
              <img src={mainLogo} alt="Logo" className="w-10 h-10" />
              <span className="ml-2 text-2xl font-medium text-orange-500">
                आदियोग
              </span>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-4 md:mt-0">
            © 2025 Aadiyog Healthtech Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
