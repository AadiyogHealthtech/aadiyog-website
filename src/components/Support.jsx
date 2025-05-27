import React from "react";
import img1 from "../assets/startup-india.png";
import img2 from "../assets/StartupMP.svg";
import img3 from "../assets/STPI.svg";
import neuronlogo from "../assets/neuron_logo.png";
import wadhwani from "../assets/Wadhwani_Foundation.jpg";

function Support() {
  const logos = [img1, img2, img3, wadhwani, neuronlogo];

  return (
    <section className="py-16 px-4  md:px-8 bg-white overflow-hidden">
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-150px * ${logos.length} - 10rem * ${
          logos.length - 1
        }));
            }
          }
          
          .scroller-container {
            position: relative;
            width: 100%;
            overflow: hidden;
          }
          
          .scroller {
            display: flex;
            width: max-content;
            animation: scroll 20s linear infinite;
          }
          
          .scroller-inner {
            display: flex;
            gap: 10rem;
            align-items: center;
            padding-right: 10rem; /* Add padding equal to gap to maintain spacing between sets */
          }
          
          .logo-item {
            flex-shrink: 0;
            width: 150px;
            height: 80px;
            object-fit: contain;
          }
          
          .section-heading {
            font-size: 1rem;
            font-weight: bold;
            color: #333;
            text-align: center;
            margin-bottom: 2rem;
          }
          
          /* Media query for mobile (max-width: 768px) */
          @media (max-width: 768px) {
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-100px * ${logos.length} - 4rem * ${
          logos.length - 1
        }));
              }
            }
            
            .scroller-inner {
              gap: 4rem;
              padding-right: 4rem; /* Add padding equal to gap for mobile */
            }
            
            .logo-item {
              width: 100px;
              height: 80px;
            }
          }
        `}
      </style>

      <h2 className="section-heading font-sans">We are Supported by</h2>
      <div className="scroller-container">
        <div className="scroller">
          {/* First set of logos */}
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

          {/* Second set of logos (exact duplicate) */}
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
      </div>
    </section>
  );
}

export default Support;
