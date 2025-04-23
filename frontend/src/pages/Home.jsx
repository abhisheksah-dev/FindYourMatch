import React from "react";
import girl from "/images/girl.png";
import boy from "/images/boyvideo.gif";

export default function Hero() {
  return (
    <>
      <section className="relative bg-blush h-screen overflow-hidden bg-[#f1e1d5]">
        {/* pattern overlay */}
        <div className="absolute inset-0 opacity-20 bg-hero-pattern bg-center bg-no-repeat"></div>

        {/* TEXT BLOCK: hidden by default, then fade-down */}
        <div
          className="relative max-w-5xl mx-auto px-6 text-center
                        opacity-0 animate-fade-down"
        >
          <h1 className="font-serif font-bold text-primary text-4xl sm:text-5xl md:text-6xl leading-tight">
            It Is Never Too Late
            <br />
            To Fall In Love.
          </h1>
          <p className="mt-4 text-lg text-primary max-w-2xl mx-auto">
            One day, someone will walk into your life and make you see why it
            never worked out with anyone else.
          </p>
          <button
            className="mt-8 px-8 py-3 border-2 border-accent rounded-full
                             text-accent font-semibold hover:bg-accent hover:text-white transition"
          >
            FIND A LOVE
          </button>
        </div>

        {/* Illustrations */}
        <img
          src="images/girl.png"
          alt="Woman texting"
          className="absolute bottom-0 left-10 h-96 bg-[#f1e1d5]"
        />
        <img
          src="images/boy.png"
          alt="Man texting"
          className="absolute bottom-0 right-10 h-96"
        />

        {/* Thought bubbles */}
        <div className="absolute top-1/2 left-24 transform -translate-y-1/2">
          <div
            className="bg-white px-4 py-2 rounded-full border border-accent
                          font-cursive text-accent text-xl shadow-sm"
          >
            It's like a STAR
          </div>
        </div>
        <div className="absolute top-1/2 right-24 transform -translate-y-1/2">
          <div
            className="bg-white px-4 py-2 rounded-full border border-bubbleYellow
                          font-cursive text-bubbleYellow text-xl shadow-sm"
          >
            She's fantastic
          </div>
        </div>
      </section>
    </>
  );
}
