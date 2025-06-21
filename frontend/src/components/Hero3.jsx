import React, { useState, useEffect } from 'react';

const Hero3 = () => {
  // Heart animation state
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const side = Math.random() < 0.5 ? 'left' : 'right';
      const offset = Math.random() * 80 + 10; // between 10% and 90%
      setHearts(h => [...h, { id, side, offset }]);
      setTimeout(() => setHearts(h => h.filter(h2 => h2.id !== id)), 2000);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-[url('/images/bg-img.jpg')] bg-cover bg-center"
    >
      {/* Peach decorative circles */}
      <div className="absolute -left-64 -top-40 w-[600px] h-[600px] rounded-full bg-[#F9E5D8] opacity-50" />
      <div className="absolute right-0 bottom-[-100px] w-[400px] h-[400px] rounded-full bg-[#F9E5D8] opacity-50" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6 lg:px-12">
        {/* Illustration with hearts */}
        <div className="relative flex-1 flex justify-center">
          <img
            src="/images/boy-with-girl.png"
            alt="Boy and girl taking selfie"
            className="max-w-[500px] w-full object-contain"
          />
          {/* Heart icons */}
          {hearts.map(({ id, side, offset }) => (
            <span
              key={id}
              className="absolute text-2xl animate-float-up left-100"
              style={{
                [side]: `calc(80% + ${side === 'left' ? '-' : ''}${offset}% )`,
                bottom: '20%',
                
              }}
            >
              ❤️
            </span>
          ))}
        </div>

        {/* Text block */}
        <div className="flex-1 flex flex-col items-end text-right px-24 mb-64">
          <h1 className="text-5xl lg:text-6xl font-bold text-[#36346B] leading-tight">
            More Than<br />Characters
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-md">
            Chater makes being single more fun and rewarding by connecting people who may not have otherwise met in real life.
          </p>
          <button className="mt-8 px-10 py-3 border-2 border-red-500 rounded-full uppercase text-[#36346B] font-semibold hover:bg-red-500 hover:text-white transition-all">
            GET START
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero3;

/* Add this to your CSS (e.g., index.css):

@keyframes float-up {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-100px); opacity: 0; }
}

.animate-float-up {
  animation: float-up 2s ease-out forwards;
}
*/