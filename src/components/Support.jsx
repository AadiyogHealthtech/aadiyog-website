import React from "react";
import img1 from "../assets/img1.svg";
import img2 from "../assets/StartupMP.svg";
import img3 from "../assets/STPI.svg";
import img4 from "../assets/sVyasa.svg";
import img5 from "../assets/Wadhwani.svg";
import img6 from "../assets/STPI2.svg";
import img7 from "../assets/AIIA.svg";
import wadhwani from "../assets/Wadhwani_Foundation.jpg";

function Support() {
  const logos = [img1, img2, img3, img4, wadhwani, img6, img7];

  return (
    <section className="py-16 px-4 md:px-8 bg-white overflow-hidden">
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0); /* Start at the right */
            }
            100% {
              transform: translateX(-50%); /* Move to the left */
            }
          }
          
          .scroller {
            display: flex;
            width: max-content;
            animation: scroll 20s linear infinite;
            gap: 7rem; /* Match the gap of scroller-inner for desktop */
          }
          
          .scroller-inner {
            display: flex;
            gap: 7rem; /* Default gap for desktop */
            align-items: center; /* Vertically center the logos */
          }
          
          .logo-item {
            flex-shrink: 0;
            width: 150px; /* Default width for desktop */
            height: 80px; /* Default height */
            object-fit: contain;
          }
          
          .section-heading {
            font-size: 1rem; /* Adjust as needed */
            font-weight: bold;
            color: #333; /* Adjust color as needed */
            text-align: center;
            margin-bottom: 2rem; /* Space between heading and scroller */
          }

          /* Media query for mobile (max-width: 768px) */
          @media (max-width: 768px) {
            .scroller {
              gap: 4rem; /* Match the reduced gap for mobile */
            }
            .scroller-inner {
              gap: 4rem; /* Reduced gap for mobile to show ~2.5 images */
            }
            .logo-item {
              width: 100px; /* Slightly smaller width for mobile */
              height: 80px; /* Adjusted height for mobile */
            }
          }
        `}
      </style>

      <h2 className="section-heading font-sans">We are Supported by</h2>
      <div className="scroller">
        {/* Original set of logos */}
        <div className="scroller-inner">
          {logos.map((logo, index) => (
            <img
              key={`logo-${index}`}
              src={logo}
              alt={`Company logo ${index + 1}`}
              className="logo-item"
            />
          ))}
        </div>
        {/* Duplicated set of logos */}
        <div className="scroller-inner">
          {logos.map((logo, index) => (
            <img
              key={`logo-duplicate-${index}`}
              src={logo}
              alt={`Company logo ${index + 1}`}
              className="logo-item"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Support;
