import React from "react";
import { FaArrowDown } from "react-icons/fa";
import profileImage from "../assets/protfolioProfile.jpg";

function Hero() {
  return (
    <section className="mt-10 sm:mt-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center md:items-center justify-between gap-10">
        {/* Left Side - Text */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="text-yellow-300">Vaibhav Rokade</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            A passionate React.js developer building modern, responsive, and
            minimal web applications.
          </p>
          <div className="flex justify-center md:justify-start gap-4 flex-wrap">
            <a
              href="#"
              download="../assets/protfolioProfile.jpg"
              className="bg-yellow-300 text-indigo-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition-all flex items-center gap-3"
            >
              <span>Download CV</span> <FaArrowDown />
            </a>
            <a
              href="#contact"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side - Profile Image with Stylish Border */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative">
            {/* Outer Border Circle */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-yellow-300 via-pink-500 to-purple-600 animate-pulse"></div>
            {/* Profile Image */}
            <img
              src={profileImage}
              alt="Vaibhav Rokade"
              className="w-64 h-64 md:w-95 md:h-95 rounded-full object-cover relative border-4 border-white shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
