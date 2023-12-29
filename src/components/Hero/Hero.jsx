import React from "react";
import "./Hero.css";
import HeroImg from "../../assets/hero1.png";
import Heart from "../../assets/heart.png";
import Heart2 from "../../assets/heart2.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="left-part">
        <h1>
          <span>Hobbies</span>
          <span>
            <img className="image" src={Heart} alt="Heart" />
          </span>
          <span>Happiness</span>
          <span>
            <img className="image" src={Heart2} alt="Heart2" />
          </span>
          <span>Home</span>
        </h1>
        <p>A Nordic startup which brings incredibly interesting hobbies from around the world to people of all ages.</p>
        <div className="form-container">
          <input type="email" placeholder="Enter your email" />
          <button>START EXPLORING</button>
        </div>
      </div>
      <div className="image-container">
        <img src={HeroImg} alt="HeroImage" />
      </div>
    </div>
  );
};

export default Hero;
