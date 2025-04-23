import React, { useState, useEffect } from "react";
import girl from "/images/girl.png";
import boy from "/images/boy.png";
import Navbar2 from "./Navbar2";

export default function Hero() {
  const [hearts, setHearts] = useState([]);

  // Spawn hearts periodically
  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      // Random horizontal position between 0 and 100%
      const offset = Math.random() * 60 + 20; // avoid edges
      setHearts((h) => [...h, { id, offset }]);
      // Remove after animation duration
      setTimeout(() => {
        setHearts((h) => h.filter((heart) => heart.id !== id));
      }, 2000);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar2 />
      <section className="relative bg-gradient-to-br from-blush to-[#f1e1d5] h-screen overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-10 bg-hero-pattern bg-center bg-repeat"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="font-serif font-bold text-primary text-5xl sm:text-6xl lg:text-7xl leading-tight">
            It Is Never Too Late
            <br /> To Fall In Love.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-primary max-w-2xl mx-auto">
            One day, someone will walk into your life and make you see why it
            never worked out with anyone else.
          </p>
          <button className="mt-8 px-8 py-3 border-2 border-accent rounded-full text-accent font-semibold hover:bg-accent hover:text-white transition">
            FIND A LOVE
          </button>
        </div>

        {/* Girl Illustration + Hearts */}
        <div className="absolute bottom-0 left-10 md:left-20 h-96 w-40">
          <img
            src={girl}
            alt="Woman texting"
            className="w-full h-full object-contain"
          />
          {/* Hearts container */}
          <div className="absolute inset-0 pointer-events-none overflow-visible">
            {hearts.map(({ id, offset }) => (
              <span
                key={id}
                className="heart animate-float-up"
                style={{ left: `${offset}%` }}
              >
                ❤️
              </span>
            ))}
          </div>
        </div>

        {/* Boy Illustration + Hearts */}
        <div className="absolute bottom-0 right-10 h-96 w-40">
          <img
            src={boy}
            alt="Man texting"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 pointer-events-none overflow-visible">
            {hearts.map(({ id, offset }) => (
              <span
                key={id + "-boy"}
                className="heart animate-float-up"
                style={{ left: `${100 - offset}%` }}
              >
                ❤️
              </span>
            ))}
          </div>
        </div>

        {/* Thought bubbles */}
        <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2">
          <div className="bg-white px-6 py-3 rounded-full border border-accent font-cursive text-accent text-2xl shadow-md">
            It's like a STAR
          </div>
        </div>
        <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2">
          <div className="bg-white px-6 py-3 rounded-full border border-bubbleYellow font-cursive text-bubbleYellow text-2xl shadow-md">
            She's fantastic
          </div>
        </div>
      </section>
    </>
  );
}
