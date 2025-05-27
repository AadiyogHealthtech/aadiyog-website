import React from "react";
// import mainLogo from "../assets/mainLogo.svg";
import mainLogo1 from "../assets/aadiyog-website-logo.png";
function Footer() {
  return (
    <footer className="bg-white  pt-16 mt-32 font-sans ">
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-black pt-12">
          {/* Column One */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold mb-4">Details</h3>
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
            <h3 className="text-lg font-semibold mb-4">Terms</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Terms of Use
                </a>
              </li>
              {/* <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Community Forum
                </a>
              </li> */}
            </ul>
          </div>

          {/* Column Three */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.instagram.com/aadiyog__/" className="text-gray-600 hover:text-gray-900">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://x.com/Aadiyog___" className="text-gray-600 hover:text-gray-900">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/aadiyog-healthtech" className="text-gray-600 hover:text-gray-900">
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
              <img src={mainLogo1} alt="Logo" className="w-38 h-12" />
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
