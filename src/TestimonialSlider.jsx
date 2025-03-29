import React, { useState, useEffect } from "react";

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const testimonials = [
    {
      id: 1,
      name: "Sara Jay",
      title: "Traveller",
      rating: 5,
      text: "Before we define any approach, we need to deline the brands overall goal. We then need to dive.",
      avatar: "./png/ibra.jpg", // Путь к первой фотографии
    },
    {
      id: 2,
      name: "Cristian Daniel",
      title: "Traveller",
      rating: 5,
      text: "Before we define any approach, we need to deline the brands overall goal. We then need to dive.",
      avatar: "./png/daulet.jpg", // Путь ко второй фотографии
    },
    {
      id: 3,
      name: "Kausar Hasan",
      title: "Traveller",
      rating: 5,
      text: "Before we define any approach, we need to deline the brands overall goal. We then need to dive.",
      avatar: "./png/lera.jpg", // Путь к третьей фотографии
    },
    {
      id: 4,
      name: "John Smith",
      title: "Traveller",
      rating: 5,
      text: "Before we define any approach, we need to deline the brands overall goal. We then need to dive.",
      avatar: "./png/sanzh.jpg", // Путь к четвертой фотографии
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // This will determine which testimonials to show (3 at a time)
  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (activeIndex + i) % testimonials.length;
      result.push({
        ...testimonials[index],
        position: i, // 0 = left, 1 = center, 2 = right
      });
    }
    return result;
  };

  return (
    <div className="bg-gray-100 py-16 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-left mb-12">
          <h3 className="text-gray-600 uppercase text-sm font-semibold tracking-wider mb-2">
            TESTIMONIAL
          </h3>
          <h2 className=" md:text-5xl font-bold text-gray-900 mb-4">
            What our client say
          </h2>
          <p className="text-gray-600">
            Create a visual identity for your company and a overall brand
          </p>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="flex justify-center items-center gap-4 md:gap-8">
            {getVisibleTestimonials().map((testimonial) => (
              <div
                key={testimonial.id}
                className={`bg-white rounded-lg shadow-lg p-6 transition-all duration-300 flex flex-col h-100 w-70
                ${
                  testimonial.position === 1
                    ? "transform scale-105 z-10"
                    : "z-0"
                }`}
              >
                <div className="flex justify-center mb-4">
                  {/* На этот блок */}
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <img
                      src={testimonial.avatar}
                      alt={`${testimonial.name} avatar`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-center">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500 text-center mb-4">
                  {testimonial.title}
                </p>

                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 text-center">{testimonial.text}</p>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 md:left-8 bg-white rounded-full p-2 shadow-md cursor-pointer z-20"
            aria-label="Previous testimonial"
          >
            <span className="text-gray-600">←</span>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 md:right-8 bg-white rounded-full p-2 shadow-md cursor-pointer z-20"
            aria-label="Next testimonial"
          >
            <span className="text-gray-600">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
