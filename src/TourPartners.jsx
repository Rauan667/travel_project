import React from "react";

const TourPartners = () => {
  return (
    <div className="py-16 px-4 max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4">Our tour partner</h2>

      {/* Pink dot */}
      <div className="flex justify-center mb-4">
        <div className="w-3 h-3 rounded-full bg-pink-500"></div>
      </div>

      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        There are many variation of passage of lorem ipsum available but the
        majority have suffered alteration
      </p>

      {/* Pink line */}
      <div className="flex justify-center mb-12">
        <div className="w-12 h-1 bg-pink-500"></div>
      </div>

      {/* Partners logos - you'll replace these with your actual images */}
      <div className="flex flex-wrap justify-between items-center gap-8">
        {/* You'll replace these with your actual partner logos */}
        <div className="h-12">
          <img src="./png/Katana.png" />
        </div>

        <div className="h-8">
          <img src="./png/travava.png" />
        </div>

        <div className="h-10">
          <img src="./png/bigui.png" />
        </div>

        <div className="h-8">
          <img src="./png/Booking.com.png" />
        </div>

        <div className="h-8">
          <img src="./png/Jakmaen.png" />
        </div>
      </div>
    </div>
  );
};

export default TourPartners;
