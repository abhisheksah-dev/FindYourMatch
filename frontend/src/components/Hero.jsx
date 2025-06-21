import React, { useState, useEffect } from "react";
import girl from "/images/girl2.png";
import boy2 from "/images/boy3.png";
import Navbar2 from "./Navbar2";

export default function Hero() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const offset = Math.random() * 60 + 20;
      setHearts((h) => [...h, { id, offset }]);
      setTimeout(() => {
        setHearts((h) => h.filter((heart) => heart.id !== id));
      }, 2000);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar2 />
      <section
        className="relative h-screen w-full bg-contain bg-center  pt-20"
        style={{
          backgroundImage: "url('/images/herobg.png')",
        }}
      >
        {/* Text content */}
        <div className="relative max-w-5xl mx-auto px-6 text-center animate-fade-down">
          <h1 className="font-serif font-bold text-primary text-5xl sm:text-6xl lg:text-7xl leading-tight">
            It Is Never Too Late
            <br /> To Fall In Love.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-primary max-w-2xl mx-auto">
            One day, someone will walk into your life and make you see why it
            never worked out with anyone else.
          </p>
          <button className="mt-8 px-8 py-3 border-2 border-accent rounded-full text-accent font-semibold hover:bg-accent hover:text-red-500 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 ">
            FIND A LOVE
          </button>
        </div>

        {/* Girl on desk */}
        <div className="absolute bottom-[30px] left-[10%] h-[400px] w-auto z-10 ">
          <img src={girl} alt="Girl" className="h-full object-contain" />
          <div className="absolute inset-0 pointer-events-none overflow-visible bottom-80">
            {hearts.map(({ id, offset }) => (
              <span key={id} className="heart" style={{ left: `${offset}%` }}>
                💗
              </span>
            ))}
          </div>
        </div>

        {/* Boy on desk */}
        <div className="absolute bottom-[25px] right-[10%] h-[400px] w-auto z-10">
          <img src={boy2} alt="Boy" className="h-full object-contain" />
          <div className="absolute inset-0 pointer-events-none overflow-visible bottom-80">
            {hearts.map(({ id, offset }) => (
              <span
                key={id + "-boy"}
                className="heart"
                style={{ left: `${100 - offset}%` }}
              >
                ❤️
              </span>
            ))}
          </div>
        </div>

        {/* Thought Bubbles */}
        {/* Thought Bubbles */}
        <div className="absolute top-[45%] left-[5%]">
          <div
            className="bg-white px-4 py-2 rounded-full border border-accent text-xl shadow-sm"
            style={{ fontFamily: "'Dancing Script', cursive" }} // or your font-cursive
          >
            <span className="shiny-text">He’s like a STAR</span>
          </div>
        </div>

        <div className="absolute top-[46%] right-[8%]">
          <div
            className="bg-white px-4 py-2 rounded-full border border-accent text-xl shadow-sm"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            <span className="shiny-text">She’s fantastic</span>
          </div>
        </div>
      </section>
    </>
  );
}
