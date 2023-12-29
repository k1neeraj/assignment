import React, { useState, useEffect } from "react";
import "./GoToTopButton.css";
import Up from '../../assets/up.png'

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`go-to-top-button ${isVisible ? "visible" : ""} hidden-mobile`}
      onClick={handleButtonClick}
    >
      <img src={Up} alt="Up button" />
    </button>
  );
};

export default GoToTopButton;
