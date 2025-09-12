// src/pages/Home.jsx
import React from "react";

function Home() {
  return (
    <div className="font-inter bg-white text-gray-800">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Learn Coding the Right Way
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-gray-600">
            Join Nepal Coding House and become a skilled software developer.
          </p>
          <a
            href="/courses"
            className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Explore Courses
          </a>
        </div>
      </section>

      {/* Features / Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Our Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p>Learn HTML, CSS, JavaScript, React, and build real projects.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Python Programming</h3>
              <p>Master Python basics, data analysis, and automation.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">App Development</h3>
              <p>Create Android and iOS apps using Java, Kotlin, and Flutter.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-600">
            Join our community and level up your coding skills today.
          </p>
          <a
            href="/courses"
            className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
