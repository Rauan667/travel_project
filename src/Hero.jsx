import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden pt-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(./png/background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        {/* Overlay for better text visibility if needed */}
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center pl-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Make in <br />
            your journey
          </h1>
          <p className="text-xl text-white mb-8 opacity-70">
            Explore the world with what you love beautiful natural beauty.
          </p>

          {/* Search Form */}
          <div className="bg-white rounded-full p-2 shadow-lg flex flex-wrap items-center">
            <div className="px-4 py-2 flex-grow md:flex-grow-0">
              <div className="flex items-center">
                <span>Location</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <div className="px-4 py-2 flex-grow md:flex-grow-0 border-l border-gray-200">
              <div className="flex items-center">
                <span>Date</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <div className="px-4 py-2 flex-grow md:flex-grow-0 border-l border-gray-200">
              <div className="flex items-center">
                <span>People</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <button className="hover:scale-110 transition-transform duration-300 ml-auto bg-black text-white px-6 py-3 rounded-full font-medium">
              Explore now
            </button>
          </div>

          {/* Popular Places */}
          <div className="mt-6 text-white">
            <span className="font-medium">Popular Place : </span>
            <span className="opacity-70">Bali, Istanbul, Rome, Paris</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
