import React from "react";
import "../../styles/support.css";
import img1 from "../../assets/sVyasa.svg";
import img3 from "../../assets/STPI.svg";
import neuronlogo from "../../assets/neuron_logo.png";
import wadhwani from "../../assets/Wadhwani_Foundation.jpg";
import iim from "../../assets/iim_mumbai.jpeg";

function Support() {
  const logos = [img1, iim, img3, wadhwani, neuronlogo];

  return (
    <section className="support-section">
      <h2 className="section-heading">We are Supported by</h2>

      <div className="support-marquee">
        <div className="support-track">
          <div className="support-set">
            {logos.map((logo, index) => (
              <div key={index} className="support-logo-wrapper">
                <img src={logo} className="support-logo" />
              </div>
            ))}
          </div>

          <div className="support-set">
            {logos.map((logo, index) => (
              <div key={`dup-${index}`} className="support-logo-wrapper">
                <img src={logo} className="support-logo" />
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </section>
  );
}

export default Support;
