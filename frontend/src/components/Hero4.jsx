import React from "react";

const Hero4 = () => {
  return (
    <section className="relative bg-white overflow-hidden h-screen">
      {/* Decorative background shapes */}
      <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 bg-purple-100 rounded-full w-72 h-48 opacity-50" />
      <div className="absolute right-0 top-16 bg-yellow-50 rounded-full w-64 h-64 opacity-50" />

      {/* Main content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center py-20 px-6 lg:px-12">
        {/* Left text block */}
        <div className="flex-1 text-center lg:text-left lg:pr-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#36346B] mb-6">
            More... just?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
            More than just a dating app, Tinder has been updated to become one
            of the most engaging, fun and social apps around. Of course, finding
            matches is still a huge highlight—but with smart group chats, an
            awesome Apple TV app, and Super Likes to go around, we’re swiping
            right on this one.
          </p>
          <img
            src="/images/logo.svg"
            alt="Tinder logo"
            className="h-22 mx-auto  "
          />
        </div>

        {/* Right profiles cluster */}
        <div className="flex-1 relative mt-12 lg:mt-0 h-80">
          {/* Profile circles */}
          <div className="absolute top-0 right-20 w-40 h-40 rounded-full overflow-hidden shadow-xl ring-4 ring-white">
            <img
              src="/images/profile1.png"
              alt="Profile 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-24 w-36 h-36 rounded-full overflow-hidden shadow-xl ring-4 ring-white">
            <img
              src="/images/profile2.png"
              alt="Profile 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 left-40 w-36 h-36 rounded-full overflow-hidden shadow-xl ring-4 ring-white">
            <img
              src="/images/profile3.png"
              alt="Profile 3"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Scribble connectors */}
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 400 400"
          >
            <path
              stroke="#FF4D4D"
              strokeWidth="3"
              d="M320 150 C 260 170, 160 120, 210 230 S 110 130, 150 280"
              fill="none"
            />
            <path
              stroke="#FF7F7F"
              strokeWidth="3"
              d="M120 20 C 100 50, 100 80, 140 180 S 80 60, 120 300"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* SVG wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[125%] h-[150px]"
          style={{ fill: "#FCEFE7" }}
        >
          <path
            d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
            opacity=".25"
          />
          <path
            d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
            opacity=".5"
          />
          <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
        </svg>
      </div>

      {/* Newsletter section */}
      <div className="relative bg-[#FCEFE7] pt-14 pb-16 px-6 lg:px-12 text-center">
        <h3 className="text-3xl font-bold text-[#36346B] mb-4">
          Our Newsletter!
        </h3>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Subscribe to get the latest updates and features delivered straight to
          your inbox.
        </p>
        <form className="flex flex-col sm:flex-row items-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter Your E-mail"
            className="w-full sm:flex-1 px-4 py-3 rounded-full focus:outline-none mb-4 sm:mb-0"
          />
          <button
            type="submit"
            className="ml-0 sm:ml-4 px-6 py-3 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 transition-all"
          >
            →
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero4;
