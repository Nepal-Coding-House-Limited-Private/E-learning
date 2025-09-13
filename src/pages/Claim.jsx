// src/pages/Claim.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Claim() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("checking"); // checking / success / fail
  const [dots, setDots] = useState(".");

  useEffect(() => {
    // Animate dots (like buffering)
    const dotsInterval = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? "." : prev + "."));
    }, 500);

    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(dotsInterval);

          // Simulate access result
          const hasAccess = false; // change to true to simulate success
          setStatus(hasAccess ? "success" : "fail");
          return 100;
        }
        return prev + 1; // increase 1% per tick
      });
    }, 30);

    return () => {
      clearInterval(progressInterval);
      clearInterval(dotsInterval);
    };
  }, []);

  if (status === "checking") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl">
          <div className="text-green-600 text-2xl font-semibold mb-6">
            Checking server{dots}
          </div>

          {/* Progress Bar */}
          <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden shadow-inner mb-4">
            <div
              className="h-4 bg-green-600 rounded-full transition-all duration-200"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="text-gray-700 font-medium mb-2">{progress}%</div>
          <p className="text-gray-500 text-sm">
            Verifying your access, please wait while we connect to the server...
          </p>
        </div>
      </div>
    );
  }

  if (status === "fail") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white p-10 md:p-16 rounded-3xl shadow-2xl max-w-4xl w-full text-center flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-green-600">
              Access Denied
            </h1>
            <p className="text-gray-700 text-lg md:text-xl mb-6">
              You currently don’t have access to this course. Please contact our support team or return to the homepage.
            </p>
          </div>

          {/* Buttons Section */}
          <div className="flex flex-col md:flex-row gap-4 flex-shrink-0">
            <a
              href="tel:+9779812345678"
              className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold shadow hover:bg-green-700 transition transform hover:-translate-y-1"
            >
              Call Us
            </a>
            <a
              href="mailto:abhayabikramshahiofficial@gmail.com"
              className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold shadow hover:bg-green-700 transition transform hover:-translate-y-1"
            >
              Email Us
            </a>
            <Link
              to="/"
              className="bg-gray-200 text-gray-800 px-8 py-4 rounded-xl font-semibold shadow hover:bg-gray-300 transition transform hover:-translate-y-1"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Success placeholder
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center">
        <div className="text-green-600 text-3xl font-bold mb-4 flex items-center justify-center gap-2">
          <span>✅</span> Access Granted
        </div>
        <p className="text-gray-700 text-lg mb-6">
          You can now access your course. Redirecting...
        </p>
      </div>
    </div>
  );
}

export default Claim;
