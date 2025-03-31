import React, { useState } from "react";
import "./Slider.css"; // Make sure to add some basic styling

const images = [
  "https://via.placeholder.com/800x400/FF5733/ffffff?text=Slide+1",
  "https://via.placeholder.com/800x400/33FF57/ffffff?text=Slide+2",
  "https://via.placeholder.com/800x400/3357FF/ffffff?text=Slide+3",
];

const DummySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <button className="left-button" onClick={prevSlide}>&#10094;</button>
      <img src={images[currentIndex]} alt="slider" className="slide-image" />
      <button className="right-button" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default DummySlider;
