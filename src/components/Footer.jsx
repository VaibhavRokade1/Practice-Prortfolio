import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        {/* Left: Copyright */}
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Vaibhav Rokade. All rights reserved.
        </p>

        {/* Right: Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-colors"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
