import React from "react";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="flex">
      <div className="flex">
        <div>Logo</div>
        <div className="dropdown">Categories</div>
      </div>
      <div className="flex">
        <div>TEACH</div>
        <div><button className="login">LOGIN</button></div>
        <div><button className="signup">SIGNUP</button></div>
      </div>
    </nav>
  );
};

export default Navbar;
