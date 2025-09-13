// src/pages/Home.jsx
import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../assets/hero.png";

const courses = [
  {
    name: "Web Development",
    description: "Learn HTML, CSS, JavaScript, React, and build real projects.",
    url: "https://elearningnepalcodinghouse.netlify.app/courses/web-development",
  },
  {
    name: "Python Programming",
    description: "Master Python basics, data analysis, and automation.",
    url: "https://elearningnepalcodinghouse.netlify.app/courses/python-programming",
  },
  {
    name: "App Development",
    description: "Create Android and iOS apps using Java, Kotlin, and Flutter.",
    url: "https://elearningnepalcodinghouse.netlify.app/courses/app-development",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Nepal Coding House",
  "url": "https://elearningnepalcodinghouse.netlify.app/",
  "logo": "https://elearningnepalcodinghouse.netlify.app/logo.png",
  "sameAs": ["https://facebook.com/yourpage", "https://twitter.com/yourhandle"],
  "hasCourse": courses.map(course => ({
    "@type": "Course",
    name: course.name,
    description: course.description,
    url: course.url,
  })),
};

function Home() {
  return (
    <div className="font-inter bg-white text-gray-900">

      {/* ✅ SEO */}
      <Helmet>
        <title>Nepal Coding House | Learn Coding the Right Way</title>
        <meta
          name="description"
          content="Join Nepal Coding House to learn web development, Python, and app development. Become a skilled software developer in Nepal."
        />
        <meta
          name="keywords"
          content="Nepal Coding House, Coding Courses, Web Development, Python, App Development, Learn Coding Nepal"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Nepal Coding House | Learn Coding the Right Way" />
        <meta property="og:description" content="Explore coding courses in Nepal. Learn React, Python, and App Development the right way." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://elearningnepalcodinghouse.netlify.app/" />
        <meta property="og:image" content="https://elearningnepalcodinghouse.netlify.app/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nepal Coding House | Learn Coding the Right Way" />
        <meta name="twitter:description" content="Explore coding courses in Nepal. Learn React, Python, and App Development the right way." />
        <meta name="twitter:image" content="https://elearningnepalcodinghouse.netlify.app/og-image.jpg" />

        <link rel="canonical" href="https://elearningnepalcodinghouse.netlify.app/" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-white text-gray-900 py-28">
        <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">

          {/* Left Side - Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Learn Coding <span className="text-green-600">the Right Way</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-700">
              Become a professional software developer. Master web development, Python, and mobile app development through real projects and hands-on experience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-5">
              <a
                href="/courses"
                className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold shadow hover:shadow-lg transition transform hover:-translate-y-1"
              >
                Explore Courses
              </a>
              <a
                href="/contact"
                className="bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-bold shadow hover:shadow-lg transition transform hover:-translate-y-1"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Side - Image with overlay slogan */}
          <div className="md:w-1/2 relative flex justify-center md:justify-end">
            <img
              src={Hero}
              alt="Coding illustration"
              className="w-full max-w-lg rounded-xl shadow-lg relative z-10"
            />
            <div className="absolute top-10 left-10 md:left-0 md:top-1/4 bg-white bg-opacity-90 px-6 py-3 rounded-xl text-green-600 text-xl font-semibold z-20 shadow">
              “Code. Build. Innovate.”
            </div>
          </div>

        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {courses.map(course => (
              <div key={course.name} className="bg-white border border-gray-200 p-8 rounded-2xl shadow hover:shadow-xl transition transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold mb-3">{course.name}</h3>
                <p className="text-gray-700 mb-6">{course.description}</p>
                <a
                  href={course.url}
                  className="text-green-600 font-semibold hover:underline text-lg"
                  aria-label={`Go to ${course.name} course page`}
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to Level Up?</h2>
          <p className="text-xl md:text-2xl mb-10 text-gray-700">
            Join our community and start your journey to become a skilled developer today.
          </p>
          <a
            href="/courses"
            className="bg-green-600 text-white px-10 py-5 rounded-xl font-bold shadow hover:shadow-lg transition transform hover:-translate-y-1"
          >
            Get Started
          </a>
        </div>
      </section>

    </div>
  );
}

export default Home;
