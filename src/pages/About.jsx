import React from 'react';

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to our application! We are dedicated to providing the best user experience and
          delivering high-quality content to our users. Our team is passionate about technology
          and innovation, and we strive to stay ahead of the curve in the ever-evolving digital
          landscape.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our mission is to empower individuals and organizations by providing them with the tools
          and resources they need to succeed. We believe in the power of collaboration and
          community, and we are committed to fostering an inclusive environment where everyone can
          thrive.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Thank you for visiting our About page. We invite you to explore our application and
          join us on this exciting journey!
        </p>
        <h2 className="text-2xl font-semibold text-purple-600 mt-6 mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Integrity: We uphold the highest standards of integrity in all our actions.</li>
          <li>Innovation: We embrace change and strive for continuous improvement.</li>
          <li>Community: We believe in the power of community and collaboration.</li>
          <li>Excellence: We aim for excellence in everything we do.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;