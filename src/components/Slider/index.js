import "./index.css"
import React, { useState } from "react";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slider">
      <img className="image" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <span className="btn-container">
      <button className="button-pre" onClick={prevSlide}>Previous</button>
      <button className="button-nex" onClick={nextSlide}>Next</button>
      </span>
    </div>
  );
};

export default Slider;
