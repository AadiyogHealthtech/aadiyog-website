import React, { useState } from "react";
import { MdMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    termsAccepted: false,
  });

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isLoading1, setIsLoading1] = useState(false); // For contact form
  const [isLoading2, setIsLoading2] = useState(false); // For newsletter
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showDialog1, setShowDialog1] = useState(false); // For contact form
  const [showDialog2, setShowDialog2] = useState(false); // For newsletter

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleNewsletterChange = (e) => {
    setNewsletterEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    setIsLoading1(true);
    setShowDialog1(true);

    try {
      const response = await fetch(
        "https://aadiyog-new-website-backend.onrender.com/api/contact/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit form");
      }

      setSuccess(data.message);
      setFormData({ name: "", email: "", message: "", termsAccepted: false });

      setTimeout(() => {
        setShowDialog1(false);
      }, 2000);
    } catch (err) {
      setError(err.message);
      setShowDialog1(false);
    } finally {
      setIsLoading1(false);
    }
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading2(true);
    setShowDialog2(true);

    try {
      const response = await fetch(
        "https://aadiyog-new-website-backend.onrender.com/api/contact/newsletter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: newsletterEmail }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to subscribe - email might already exist"
        );
      }

      setSuccess(data.message || "Successfully subscribed to newsletter!");
      setNewsletterEmail("");

      setTimeout(() => {
        setShowDialog2(false);
      }, 2000);
    } catch (err) {
      setError(err.message);
      setShowDialog2(false);
    } finally {
      setIsLoading2(false);
    }
  };

  return (
    <div className="w-full bg-white py-16 px-4 min-h-screen font-sans">
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
          }
          .spinner {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #f97316;
            border-radius: 50%;
            width: 48px;
            height: 48px;
            animation: spin 1s linear infinite;
          }
          .dialog {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 50;
            animation: fadeIn 0.3s ease-in;
          }
          .dialog-content {
            background: white;
            padding: 24px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            text-align: center;
          }
          .success-message {
            animation: fadeOut 0.5s ease-out 1.5s forwards;
          }
        `}
      </style>

      {/* Contact Form Dialog */}
      {showDialog1 && (
        <div className="dialog">
          <div className="dialog-content">
            {isLoading1 ? (
              <div>
                <div
                  className="spinner"
                  style={{ margin: "0 auto 16px" }}
                ></div>
                <p style={{ color: "#111827" }}>Submitting your message...</p>
              </div>
            ) : (
              <div className="success-message">
                <p style={{ color: "#ff6900", fontSize: "18px" }}>
                  Thanks for contacting us!
                </p>
                <p style={{ color: "black" }}>We will get back to you soon.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Newsletter Dialog */}
      {showDialog2 && (
        <div className="dialog">
          <div className="dialog-content">
            {isLoading2 ? (
              <div>
                <div
                  className="spinner"
                  style={{ margin: "0 auto 16px" }}
                ></div>
                <p style={{ color: "#111827" }}>Subscribing to newsletter...</p>
              </div>
            ) : (
              <div className="success-message">
                <p style={{ color: "#ff6900", fontSize: "18px" }}>
                  Subscription Successful!
                </p>
                <p style={{ color: "black" }}>
                  Welcome to our newsletter community!
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile View */}
      <div className="md:hidden h-full flex flex-col pt-6 px-4">
        <h3 className="font-semibold text-sm mb-1">Connect</h3>
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-sm text-gray-900 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center">
            <MdMailOutline className="text-black" />
            <a
              href="mailto:care@aadiyog.in"
              className="text-gray-900 text-sm ml-2"
            >
              care@aadiyog.in
            </a>
          </div>
          <div className="flex items-center">
            <FiPhone className="text-black" />
            <span className="text-gray-900 text-sm ml-2">+91 83059 09208</span>
          </div>
          <div className="flex items-center">
            <SlLocationPin className="text-black" />
            <span className="text-gray-900 text-sm ml-2">
              123 Sample St, Sydney NSW 2000 AU
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div>
            <label className="text-sm text-black">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-900 mt-1"
              required
            />
          </div>
          <div>
            <label className="text-sm text-gray-900">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-900 mt-1"
              required
            />
          </div>
          <div>
            <label className="text-sm text-gray-900">Message</label>
            <textarea
              name="message"
              value={formData.message}
              placeholder="Type your message..."
              onChange={handleChange}
              className="w-full p-2 border border-gray-900 h-24 mt-1"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading1}
            className={`border-1 border-black bg-orange-500 text-white py-2 px-4 hover:bg-orange-600 transition-colors mt-3 ${
              isLoading1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading1 ? "Submitting..." : "Submit"}
          </button>
        </form>

        <div className="mt-20">
          <h3 className="text-lg font-semibold mb-2">Join our newsletter</h3>
          <p className="text-sm text-gray-900 mb-4">
            Stay updated with our latest yoga tips and offers!
          </p>
          <form onSubmit={handleNewsletterSubmit} className="space-y-2">
            <input
              type="email"
              value={newsletterEmail}
              onChange={handleNewsletterChange}
              placeholder="Enter your email"
              className="w-full p-2 border-1 border-black"
              required
            />

            <button
              type="submit"
              disabled={isLoading2}
              className={`w-full bg-orange-500 border-1 border-black text-white py-2 hover:bg-orange-600 transition-colors ${
                isLoading2 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading2 ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
          <p className="text-xs text-gray-900 mt-2">
            By subscribing you agree to our Privacy Policy
          </p>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block min-w-full">
        <div className="mx-8  flex flex-row justify-between items-start">
          <div className="w-1/2 mb-8">
            <h3 className="font-bold mb-1">Connect</h3>
            <h2 className="text-[40px] font-bold mb-4 leading-tight">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-base mb-6">
              Fill the form and we'll contact you
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <MdMailOutline />
                <a
                  href="mailto:care@aadiyog.in"
                  className="text-black text-base ml-3"
                >
                  care@aadiyog.in
                </a>
              </div>
              <div className="flex items-center">
                <FiPhone />
                <span className="text-black text-base ml-3">
                  +91 83059 09208
                </span>
              </div>
              {/* <div className="flex items-center">
                <SlLocationPin />
                <span className="text-black text-base ml-3">
                  17/1 M I G Bhargave Nagar, Nagpur, M.P India
                </span>
              </div> */}
            </div>
          </div>

          <div className="w-5/12">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-black">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full p-3 border border-gray-900 rounded-none text-base placeholder-gray-400 focus:outline-none focus:ring-0 mt-2"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-black">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full p-3 border border-gray-900 rounded-none text-base placeholder-gray-400 focus:outline-none focus:ring-0 mt-2"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-black">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message..."
                  className="w-full p-3 border border-gray-900 rounded-none text-base placeholder-gray-400 h-32 resize-none focus:outline-none focus:ring-0 mt-2"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading1}
                className={`w-fit p-6 bg-orange-500 text-white py-3 text-base font-medium rounded-none hover:bg-orange-600 transition-colors border-1 border-black cursor-pointer ${
                  isLoading1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading1 ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>

        <div className="mx-8  flex justify-between mt-32">
          <div>
            <h3 className="text-2xl font-bold mb-4">Join our newsletter</h3>
            <p className="text-gray-700 text-base mb-6">
              Stay updated with our latest yoga tips and offers!
            </p>
          </div>
          <div>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <input
                type="email"
                value={newsletterEmail}
                onChange={handleNewsletterChange}
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-900 rounded-none text-base placeholder-gray-400 focus:outline-none focus:ring-0 mr-4"
                required
              />
              <button
                type="submit"
                disabled={isLoading2}
                className={`bg-orange-500 text-white py-3 px-6 text-base font-medium rounded-none hover:bg-orange-600 transition-colors border-1 border-gray-950 ${
                  isLoading2 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading2 ? "Subscribing..." : "Subscribe"}
              </button>
            </form>

            <p className="text-sm text-gray-700 mt-2">
              By subscribing you agree to our Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
