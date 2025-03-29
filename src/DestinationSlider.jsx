import React, { useState } from "react";

const DestinationSlider = () => {
  // Destinations data
  const destinations = [
    {
      id: 1,
      image: "./png/backpackers.png",
      title: "Adventure Travel",
      description: "Experience thrilling adventures around the world.",
    },
    {
      id: 2,
      image: "./png/bali.png",
      title: "Bali, Indonesia.",
      description:
        "Bali is a beautiful tourist spot and is visited by many travelers.",
    },
    {
      id: 3,
      image: "./png/newyork.png",
      title: "New York, USA",
      description: "Explore the vibrant city that never sleeps.",
    },
    {
      id: 4,
      image: "./png/paris.jpg",
      title: "Paris, France",
      description: "Visit the city of love and its iconic landmarks.",
    },
    {
      id: 5,
      image: "./png/tokyo.jpg",
      title: "Tokyo, Japan",
      description: "Immerse yourself in the blend of tradition and modernity.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // Start with Bali in center

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === destinations.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? destinations.length - 1 : prevIndex - 1
    );
  };

  // Calculate visible slides (3 at a time)
  const getVisibleSlides = () => {
    const slides = [];
    const total = destinations.length;

    // Left card (previous)
    const prevIndex = currentIndex === 0 ? total - 1 : currentIndex - 1;
    slides.push(destinations[prevIndex]);

    // Center card (current)
    slides.push(destinations[currentIndex]);

    // Right card (next)
    const nextIndex = currentIndex === total - 1 ? 0 : currentIndex + 1;
    slides.push(destinations[nextIndex]);

    return slides;
  };

  const visibleSlides = getVisibleSlides();

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 bg-white p-4 rounded-full"
        >
          <img src="./svg/group43.svg" alt="Previous" className="" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 bg-white p-4 rounded-full"
        >
          <img src="./svg/group42.svg" alt="Next" />
        </button>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Explore new worlds with
          <br />
          exotic natural scenery
        </h2>
        <p className="text-gray-600">
          Explore the world with what you love beautiful natural beauty.
        </p>
      </div>

      {/* Slider Section */}
      <div className="relative">
        <div className="flex items-center justify-between">
          {/* Left Navigation Button */}

          {/* Slides Container */}
          <div className="flex justify-center items-center w-full gap-4">
            {visibleSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`
                  transition-all duration-500 ease-in-out transform 
                  ${index === 1 ? "scale-100 z-20" : "scale-90 opacity-70 z-10"}
                  relative overflow-hidden rounded-lg shadow-lg
                `}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-64 md:h-80 object-cover"
                />

                {/* Only show text for center slide */}
                {index === 1 && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-90">
                    <h3 className="text-lg font-bold">{slide.title}</h3>
                    <p className="text-sm text-gray-600">{slide.description}</p>
                  </div>
                )}

                {/* Quote marks for center slide */}
                {index === 1 && (
                  <div className="absolute top-1/2 right-4 bg-white rounded-full p-2 shadow-md">
                    <div className="text-xl font-serif">"</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Navigation Button */}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {destinations.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationSlider;
