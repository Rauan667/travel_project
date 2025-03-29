import React, { useState, useEffect } from "react";

const TravelSlider = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const cards = [
    {
      id: 0,
      title: "Best Service",
      description:
        "our service is reliable and convenient, our service is quality.",
      icon: "IconPlaceholder1",
    },
    {
      id: 1,
      title: "Price Guarantee",
      description:
        "our service is reliable and convenient, our service is quality.",
      icon: "IconPlaceholder2",
    },
    {
      id: 2,
      title: "Handpicked Hotels",
      description:
        "our service is reliable and convenient, our service is quality.",
      icon: "IconPlaceholder3",
    },
    {
      id: 3,
      title: "Customer Support",
      description:
        "our service is reliable and convenient, our service is quality.",
      icon: "IconPlaceholder4",
    },
    {
      id: 4,
      title: "Travel Insurance",
      description:
        "our service is reliable and convenient, our service is quality.",
      icon: "IconPlaceholder5",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  // Get the visible cards (previous, current, next)
  const getVisibleCards = () => {
    const prev = (activeIndex - 1 + cards.length) % cards.length;
    const next = (activeIndex + 1) % cards.length;
    return [prev, activeIndex, next];
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="relative w-full overflow-hidden py-16">
      <img src="./png/bg1.png" className="absolute" />
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="relative pt-16 text-4xl font-bold text-white mb-2 z-10">
            Why choose Us?
          </h2>
          <p className="text-white text-lg">
            our services have been trusted by world travelers.
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 bg-white rounded-full p-4 shadow-lg"
          >
            {/* You'll add your left arrow SVG here */}
            <span className="text-2xl">&lt;</span>
          </button>

          {/* Cards Container */}
          <div className="flex justify-center items-center gap-4 relative px-16">
            {visibleCards.map((cardIndex, i) => {
              const card = cards[cardIndex];
              const isActive = i === 1; // Center card

              return (
                <div
                  key={card.id}
                  className={`bg-white rounded-lg shadow-lg p-6 transition-all duration-300 flex flex-col ${
                    isActive ? "w-72 h-80 z-20" : "w-64 h-72 opacity-90 z-10"
                  }`}
                >
                  {/* Icon placeholder section */}
                  <div className="bg-black w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    {card.title === "Best Service" && (
                      <img
                        src="./png/1.png"
                        alt="Service icon"
                        className="w-8 h-8"
                      />
                    )}
                    {card.title === "Price Guarantee" && (
                      <img
                        src="./png/3.png"
                        alt="Price icon"
                        className="w-8 h-8"
                      />
                    )}
                    {card.title === "Handpicked Hotels" && (
                      <img
                        src="./png/1.png"
                        alt="Hotel icon"
                        className="w-8 h-8"
                      />
                    )}
                    {card.title === "Customer Support" && (
                      <img
                        src="./png/2.png"
                        alt="Price icon"
                        className="w-8 h-8"
                      />
                    )}
                    {card.title === "Travel Insurance" && (
                      <img
                        src="./png/3.png"
                        alt="Price icon"
                        className="w-8 h-8"
                      />
                    )}
                    {/* Add more conditions for additional cards */}
                  </div>

                  <h3 className="text-xl font-bold mb-3">{card.title}</h3>

                  <p className="text-gray-600 mb-6">{card.description}</p>

                  <div className="mt-auto flex items-center text-sm font-semibold">
                    <span>Learn more</span>
                    <span className="ml-2">→</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 bg-white rounded-full p-4 shadow-lg"
          >
            {/* You'll add your right arrow SVG here */}
            <span className="text-2xl">&gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelSlider;
