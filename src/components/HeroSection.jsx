import React from "react";
import arrow from '../assets/arrow.svg'
import "../css/HeroSection.css";
import Lottie from 'lottie-react';
import animationData from '../assets/building.json'

function HeroSection() {

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const query = event.target.search.value;
    if (query) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
  };

  return (
 
    <div className="hero-container">
    <div className="hero-content">
      <div className="text">
      <h1>Lines Of Binary</h1>
      <h3>Learning is the process of acquiring knowledge, skills, understanding, or competence in a particular subject, field, or discipline.</h3>
      <h3>
      It is a lifelong journey that encompasses
       various forms of gaining information an
       d expertise. 
        </h3>     
      </div>
    <form onSubmit={handleSearchSubmit}>
            <input type="text" name="search" id="search" placeholder="What You want to Learn" />
            <button><img src={arrow} alt="Search"/></button>
          </form>
    </div>
    <div className="lottie">
      {/* Lottie animation in the right column */}
      <Lottie animationData={animationData} />
    </div>
  </div>
  );
}

export default HeroSection;
