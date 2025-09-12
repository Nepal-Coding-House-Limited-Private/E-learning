// src/pages/Courses.jsx
import React from "react";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "Web Development",
    description: "Learn HTML, CSS, JavaScript, React, and build real projects.",
    path: "/course/claim",
    price: '400',
    cutprice: '1000',
  },
  {
    title: "Python Programming",
    description: "Master Python basics, data analysis, and automation.",
    path: "/course/claim",
    price: '350',
    cutprice: '900',
  },
  {
    title: "App Development",
    description: "Create Android and iOS apps using Java, Kotlin, and Flutter.",
    path: "/course/claim",
    price: '450',
    cutprice: '1100',
  },
  {
    title: "Data Science",
    description: "Learn data analysis, machine learning, and visualization.",
    path: "/course/claim",
    price: '500',
    cutprice: '1200',
  },
  {
    title: "UI/UX Design",
    description: "Design beautiful and intuitive interfaces using Figma.",
    path: "/course/claim",
    price: '300',
    cutprice: '800',
  },
  {
    title: "Cybersecurity",
    description:
      "Learn ethical hacking, penetration testing, and security basics.",
    path: "/course/claim",
    price: '400',
    cutprice: '1000',
  },
];

function Courses() {
  return (
    <div className="font-inter bg-white text-gray-800">
      {/* Page Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 leading-tight">
            <span className="text-[#0D7332]">Innovative</span> Projects
            <br />
            <span className="text-2xl md:text-5xl font-semibold text-gray-700">
              Real Impact
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-4">
            Explore our wide range of courses and start learning today. From
            coding to design, we have something for every aspiring developer.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition hover:scale-105 duration-300"
              >
                <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
                <p className="text-gray-600 mb-4">{course.description}</p>

                {/* Price Section */}
                {course.price && course.cutprice && (
                  <div className="mb-4">
                    <span className="text-green-700 font-bold text-lg">
                      NPR. {course.price}
                    </span>
                    <span className="text-gray-400 line-through ml-2">
                      NPR. {course.cutprice}
                    </span>
                  </div>
                )}

                <Link
                  to={course.path}
                  className="text-green-700 font-semibold hover:underline"
                >
                  Learn More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Learning?
        </h2>
        <p className="text-lg md:text-xl mb-6 text-gray-600 max-w-xl mx-auto">
          Pick your favorite course and join our learning community today.
        </p>
        <Link
          to="/signup"
          className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
}

export default Courses;
