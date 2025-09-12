// src/pages/Claim.jsx
import React from "react";
import { Link } from "react-router-dom";

function Claim() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl max-w-3xl w-full text-center flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-green-700">
            You Don't Have Access to Claim
          </h1>
          <p className="text-gray-600 mb-6">
            It looks like you currently don’t have access to this course. Please contact us or go back home.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col md:flex-row gap-4 flex-shrink-0">
          <a
            href="tel:+9779812345678"
            className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            Call Us
          </a>
          <a
            href="mailto:abhayabikramshahiofficial@gmail.com"
            className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            Email Us
          </a>
          <Link
            to="/"
            className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-400 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Claim;
