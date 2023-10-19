import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setStartIndex((startIndex + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [startIndex, images]);

  const visibleImages = images.slice(startIndex, startIndex + 6);
  const shiftedImages = images.slice(0, 6 - visibleImages.length);
  

  return (
    <div className="carousel w-44  h-10 bg-slate-400 justify-center ml-44 rounded-md border-gray-50">
      <div className="carousel-inner flex relative">
        {visibleImages.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} className="carousel-item border-lg border-blue-700" />
        ))}
        {shiftedImages.map((image, index) => (
          <img className="border-black" key={index + visibleImages.length} src={image} alt={`Image ${index + visibleImages.length}`} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;


