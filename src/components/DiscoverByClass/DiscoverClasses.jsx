import React from "react";
import "./Discover.css";

const DiscoverClasses = () => {
  return (
    <div className="container">
      <div className="flex">
        <div className="title">
          Discover classes
          <span>
            <u>SHOW ALL</u>
          </span>
        </div>
        <div>
          Show prices in:
          <button>USD</button>
          <button>INR</button>
        </div>
        <div>Choose from a variety of classes from around the world.</div>
        <div className="cards">
          
          <div className="card">
            <img
              src="https://placekitten.com/300/200"
              alt="Course Thumbnail"
              className="card-image"
            />
            <div className="card-content">
              <h3 className="card-title">Course Title</h3>
              <p className="card-class">Class Category</p>
              <p className="card-author">Author Name</p>
              <p className="card-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverClasses;

