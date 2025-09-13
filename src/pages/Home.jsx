// src/pages/Home.jsx
import React from "react";
import { Helmet } from "react-helmet";

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
  "sameAs": [
    "https://facebook.com/yourpage",
    "https://twitter.com/yourhandle"
  ],
  "hasCourse": courses.map(course => ({
    "@type": "Course",
    "name": course.name,
    "description": course.description,
    "url": course.url
  }))
};

function Home() {
  return (
    <div className="font-inter bg-white text-gray-800">

      {/* ✅ SEO */}
      <Helmet>
        <title>Nepal Coding House | Learn Coding the Right Way</title>
        <meta name="description" content="Join Nepal Coding House to learn web development, Python, and app development. Become a skilled software developer in Nepal." />
        <meta name="keywords" content="Nepal Coding House, Coding Courses, Web Development, Python, App Development, Learn Coding Nepal" />

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

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 text-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Learn Coding the Right Way</h1>
          <p className="text-lg md:text-2xl mb-8 text-gray-600">
            Join Nepal Coding House and become a skilled software developer.
          </p>
          <a href="/courses" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
            Explore Courses
          </a>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map(course => (
              <div key={course.name} className="bg-white border border-gray-200 p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <a
                  href={course.url}
                  className="text-green-600 font-semibold hover:underline"
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
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg md:text-xl mb-8 text-gray-600">
            Join our community and level up your coding skills today.
          </p>
          <a href="/courses" className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
