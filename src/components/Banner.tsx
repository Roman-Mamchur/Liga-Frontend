// Custom Slider Banner

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "/banner/image1.png",
  "/banner/image2.png",
  "/banner/image3.png",
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  });

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? images.length - 1 : prevSlide - 1,
      );
    }
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  return (
    <div className="relative mx-auto w-full max-w-full overflow-hidden">
      <div
        className="relative flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {images.map((src, index) => (
          <div className="w-full flex-shrink-0" key={index}>
            <Image
              src={src}
              alt={`Banner ${index + 1}`}
              width={1200}
              height={400}
              sizes="100vw"
              className="h-auto w-full object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      <button
        className="absolute left-3 top-1/2 -translate-y-1/2 transform rounded bg-black px-4 py-2 text-white opacity-50 hover:opacity-80"
        onClick={prevSlide}
      >
        <FaChevronLeft />
      </button>
      <button
        className="absolute right-3 top-1/2 -translate-y-1/2 transform rounded bg-black px-4 py-2 text-white opacity-50 hover:opacity-80"
        onClick={nextSlide}
      >
        <FaChevronRight />
      </button>

      <div className="mt-2 flex justify-center space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 cursor-pointer rounded-full ${
              currentSlide === index ? "bg-primary" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
