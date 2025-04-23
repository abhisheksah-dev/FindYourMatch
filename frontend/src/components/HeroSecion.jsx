import React from "react";
import girl from "/images/girl.png";
import boy from "/images/boy.png";

export default function HeroSection() {
  return (
    <section className="relative bg-blush overflow-hidden">
      {/* Background circles or patterns could be CSS-generated or an overlay img */}
      <div className="max-w-6xl mx-auto px-8 py-20 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary leading-tight">
          It Is Never Too Late
          <br />
          To Fall In Love.
        </h1>
        <p className="mt-4 text-lg text-primary max-w-2xl">
          One day, someone will walk into your life and make you see why it
          never worked out with anyone else.
        </p>
        <button className="mt-8 px-8 py-3 border-2 border-accent rounded-full text-accent font-semibold hover:bg-accent hover:text-white transition">
          FIND A LOVE
        </button>
      </div>

      {/* Illustrations */}
      <img
        src={girl}
        alt="Woman texting"
        className="hidden lg:block absolute bottom-0 left-12 h-96"
      />
      <img
        src={boy}
        alt="Man texting"
        className="hidden lg:block absolute bottom-0 right-12 h-96"
      />

      {/* Thoughts bubbles (can be positioned with absolute divs & custom fonts/images) */}
      <div className="hidden lg:block absolute top-3/4 left-40 transform -translate-y-1/2">
        <div className="bg-white rounded-full px-3 py-1 text-accent font-handwritten border border-accent">
          It's like a STAR
        </div>
      </div>
      <div className="hidden lg:block absolute top-3/4 right-40 transform -translate-y-1/2">
        <div className="bg-white rounded-full px-3 py-1 text-yellow-500 font-handwritten border border-yellow-500">
          She's fantastic
        </div>
      </div>
    </section>
  );
}
