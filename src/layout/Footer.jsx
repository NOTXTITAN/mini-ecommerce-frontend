// src/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 pt-4 ">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} React website.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-gray-400"></a>
          <a href="#" className="hover:text-gray-400"></a>
          <a href="#" className="hover:text-gray-400"></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;