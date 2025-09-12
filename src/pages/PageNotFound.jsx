// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
      <h1 className="text-6xl md:text-8xl font-extrabold text-[#0D7332] mb-4">
        404
      </h1>
      <h2 className="text-2xl md:text-4xl font-bold mb-6">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-8">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-[#0D7332] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0B5C28] transition transform hover:scale-105"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
