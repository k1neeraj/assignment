import React from "react";
import "./MessageBox.css";

const MessageBox = () => {
  const handleButtonClick = () => {
    console.log("Button Clicked");
  };

  return (
    <button className="message-box hidden-mobile" onClick={handleButtonClick}>
      📬
    </button>
  );
};

export default MessageBox;
