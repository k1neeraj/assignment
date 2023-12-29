import React from 'react';
import './Newsletter.css';

const NewsLetter = () => {
  return (
    <div className="oval-container">
      <div className="newsletter-container">
        <h2>Start learning new skills today and pursue your passion</h2>
        <p>Join the community of global learners and start exploring today.</p>
        <div className="form-container">
          <input type="email" placeholder="Enter your email" />
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
