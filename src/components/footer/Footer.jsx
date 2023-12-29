import React from "react";
import Img from "../../assets/FooterImg.jpeg";
import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareTwitter,
  FaYoutube,
} from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links-div">
          <h4>Class Categories</h4>
          <a href="#">
            <p>Language</p>
          </a>
          <a href="#">
            <p>Cooking</p>
          </a>
          <a href="#">
            <p>Music</p>
          </a>
          <a href="#">
            <p>Arts & Craft</p>
          </a>
          <a href="#">
            <p>Yoga</p>
          </a>
          <a href="#">
            <p>Academic</p>
          </a>
          <a href="#">
            <p>Back to Roots</p>
          </a>
          <a href="#">
            <p>Funteresting</p>
          </a>
        </div>
        <div className="sb_footer-links-div">
          <h4>Company</h4>
          <a href="#">
            <p>About</p>
          </a>
          <a href="#">
            <p>Careers</p>
          </a>
          <a href="#">
            <p>Blog</p>
          </a>
          <a href="#">
            <p>Contact</p>
          </a>
          <a href="#">
            <p>Privacy Policy</p>
          </a>
          <a href="#">
            <p>Terms & Conditions</p>
          </a>
          <a href="#">
            <p>Refund Policy</p>
          </a>
        </div>
        <div className="sb_footer-links-div">
          <h4>Company</h4>
          <a href="#">
            <p>All Classes</p>
          </a>
        </div>
        <div className="sb_footer-links-div">
          <h4>Teach</h4>
          <a href="#">
            <p>Become a Teacher</p>
          </a>
        </div>
        <div className="img-container">
          <div>
            <img className="img" src={Img} />
            <p>SELL YOUR RODUCT WITH US</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="sb_footer-below">
        <div className="sb_footer-copyright">
          <p>©Project {new Date().getFullYear()}. All rights reserved.</p>
        </div>
        <div className="sb_footer-below-links">
          Made with ❤️ by <a href="#">SimplePlan.</a>
        </div>
        <div className="icons">
          <FaSquareFacebook />
          <FaSquareInstagram />
          <FaLinkedin />
          <FaSquareTwitter />
          <FaYoutube />
        </div>
      </div>
    </div>
  );
};

export default Footer;
