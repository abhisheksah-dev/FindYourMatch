import React from 'react';
import logo from '/images/logo.svg';

export default function Navbar2() {
  const links = ['HOME', 'ABOUT US', 'FEATURES', 'CONTACT US'];
  return (
    <header className="bg-white fixed w-full z-10 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <img src={logo} alt="Match" className="h-8 w-auto" />
          <span className="ml-2 font-serif text-2xl text-primary">Match</span>
        </div>
        <nav>
          <ul className="hidden md:flex space-x-8 font-medium text-primary">
            {links.map((l, i) => (
              <li key={i} className="hover:text-accent transition relative">
                {l}
                {/* underline on hover */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent transition-all hover:w-full"></span>
              </li>
            ))}
          </ul>
        </nav>
        <button className="hidden md:inline-block py-2 px-6 rounded-full border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-white transition">
          LOG IN
        </button>
      </div>
    </header>
  );
}