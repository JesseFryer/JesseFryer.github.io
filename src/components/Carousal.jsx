import React, { useState } from 'react';

const Carousel = ({ items, onChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % items.length;
      onChange(newIndex); // Call onChange with the new index
      return newIndex; // Return the new index to set the state
    });
  };

  // Move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? items.length - 1 : prevIndex - 1;
      onChange(newIndex); // Call onChange with the new index
      return newIndex; // Return the new index to set the state
    });
  };

  return (
    <div className="relative flex justify-center items-center">
      {/* Left Arrow */}
      <button
        className="absolute focus:outline-none left-5 p-2 text-gray-300 bg-gray-800 hover:text-white hover:border-white transition duration-300 rounded-full z-10"
        onClick={prevSlide}
      >
        &#9664;
      </button>

      {/* Carousel Items */}
      <div className="w-full flex justify-center relative">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`min-w-full flex justify-center items-center transition-transform duration-500 transform ${
                index === currentIndex
                  ? 'scale-100 opacity-100'  // Active card
                  : 'scale-75 opacity-50'    // Unselected cards
              } rounded-lg overflow-hidden`}
              style={{
                transition: 'transform 0.5s ease, opacity 0.5s ease', // Smooth transition
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        className="absolute focus:outline-none bg-gray-800 right-5 p-2 text-gray-300 bg-gray-800 hover:text-white hover:border-white rounded-full z-10"
        onClick={nextSlide}
      >
        &#9654;
      </button>
    </div>
  );
};

export default Carousel;
