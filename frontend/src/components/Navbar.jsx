// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full py-4 bg-white shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="font-bold text-xl text-pink-600">
          <span className="mr-2">💕</span>Match
        </div>
        {/* Nav Links */}
        <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <a href="/" className="hover:text-pink-600 transition">
            Home
          </a>
          <a href="/" className="hover:text-pink-600 transition">
            About Us
          </a>
          <a href="/" className="hover:text-pink-600 transition">
            Features
          </a>
          <a href="/" className="hover:text-pink-600 transition">
            Contact Us
          </a>
        </div>
        {/* Login Button */}
        <button className="hidden md:block border border-pink-600 text-pink-600 px-4 py-2 rounded-full hover:bg-pink-50 transition">
          Log In
        </button>
        {/* (Optional) Mobile Menu Icon */}
      </div>
    </nav>
  );
};

export default Navbar;
