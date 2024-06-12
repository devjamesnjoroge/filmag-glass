// Banner.js
import React, { useState, useEffect } from 'react';
import './Banner.css'; // Import the CSS file

const Banner = () => {
  const images = [
    'https://images.pexels.com/photos/6585751/pexels-photo-6585751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'image2.jpg',
    'image3.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="banner">
      <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="banner-overlay">
        <h1>Enhancing Spaces with Innovative Design and Superior Craftsmanship</h1>
      </div>
    </div>
  );
};

export default Banner;
