// src/components/Footer.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-green-700 mb-2">NCH</h2>
          <p className="text-gray-600">
            Nepal Coding House - Software education innovation. Learn coding, web dev, app dev, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-green-700 transition">Home</a>
            </li>
            <li>
              <a href="/courses" className="hover:text-green-700 transition">Courses</a>
            </li>
            <li>
              <a href="/about" className="hover:text-green-700 transition">About</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-700 transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-600">+977 9808370638</p>
          <p className="text-gray-600 mb-4">abhayabikramshahiofficial@gmail.com</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-green-700 transition">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="text-gray-600 hover:text-green-700 transition">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="text-gray-600 hover:text-green-700 transition">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 border-t border-gray-200 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Nepal Coding House. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
