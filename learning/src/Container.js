import React, { useState, useEffect } from 'react';
import './Container.css'; 
import Carousel from './Caousel';

function Container() {
  const texts = ["Personal Development.", "Professional Growth.", "Career Advancement"];
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (showText) {
      setTimeout(() => {
        setShowText(false);
      }, 4000);
    } else {
      setCurrentText(texts[textIndex]);
      setShowText(true);
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }
  }, [textIndex, showText]);

  const images = [
    'https://www.learningroutes.in/wp-content/uploads/2023/08/imt-cdl.webp',
    'https://www.learningroutes.in/wp-content/uploads/2023/08/onlineuu-logo.webp',
    'https://www.learningroutes.in/wp-content/uploads/2023/08/jainonline.webp',
    'https://www.learningroutes.in/wp-content/uploads/2023/08/upgrad-logo.webp',
    'https://www.learningroutes.in/wp-content/uploads/2023/08/odl-logo.webp',
    'https://www.learningroutes.in/wp-content/uploads/2023/08/upescce.webp',
    'https://www.learningroutes.in/wp-content/uploads/2023/08/jainonline.webp',
   
  ];

  return (
    <><div className="hero-section  mb-5">
      <div className="hero-content">
        <h2 className="subheading">Explore India’s Top Distance Colleges for</h2>
        <div className="hero-sentence">
          {showText && (
            <div className="typewriter">
              <span className="typed-text">{currentText}</span>
              <span className="beeping-cursor">_</span>
            </div>
          )}
        </div>
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search Courses And Colleges" />
          <button className="search-icon">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img src="https://www.learningroutes.in/wp-content/uploads/2023/08/web-png_05-copy.webp" alt="Hero Image" />
      </div>
    </div><Carousel images={images} /></>
  );
}

export default Container;