import React, { useState } from "react";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логика отправки email
    console.log("Submitted email:", email);
  };

  return (
    <div className="relative w-full h-[542px] flex items-center justify-center overflow-hidden">
      {/* Место для вашей фоновой картинки */}
      <img
        src="./png/bg2.png"
        alt="Subscribe background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10 text-center px-4 max-w-6xl">
        <h2 className="md:text-7xl font-bold text-white mb-15">
          Subscribe to get special price
        </h2>

        <p className="text-white/80 mb-8 max-w-xl mx-auto">
          Dont wanna miss something? subscribe right now and get special
          promotion and monthly newsletter
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center max-w-full mx-auto"
        >
          <div className="flex w-[676px] h-[70px] mt-10">
            <input
              type="email"
              placeholder="Type your email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white flex-grow px-4 py-3 rounded-l-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-r-full hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubscribeSection;
