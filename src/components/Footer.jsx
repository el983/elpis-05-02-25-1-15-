import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import "./Footer.css"; // Import the CSS file
import logo from "../images/1.png";

const Footer = () => {

  const scrollToHome = () => {
    const footer = document.getElementById('Banner'); // Ensure your footer has this ID
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the footer
    }
  };
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <a onClick={scrollToHome}><img src={logo} alt="Elpis" /></a>
        </div>
        {/* About Section */}
        <div className="footer-section">
          <h2>About Elpis</h2>
          <p>
            Elpis Learning provides high-quality, accessible online courses to enhance digital skills and productivity. Our expert-led training empowers learners with practical knowledge for personal and professional growth.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon youtube"><FaYoutube /></a>
            <a href="#" className="social-icon facebook"><FaFacebookF /></a>
            <a href="#" className="social-icon linkedin"><FaLinkedinIn /></a>
            <a href="#" className="social-icon instagram"><FaInstagram /></a>
          </div>
        </div>

        {/* Contact Details */}
        <div className="footer-section">
          <h2>Contact Details</h2>
          <p>+91-9875535330</p>
          <p>info@elpislearning.com</p>
        </div>

        {/* Address */}
        <div className="footer-section">
          <h2>Address</h2>
          <p>
          Elita chambers, 
          <br></br>Action Area 3, New Town Kolkata
          </p>
        </div>

        {/* Instagram Posts */}
        {/* <div className="footer-section">
          <h2>Instagram Post</h2>
          <div className="instagram-posts">
            <div className="post"></div>
            <div className="post"></div>
            <div className="post"></div>
            <div className="post"></div>
            <div className="post"></div>
            <div className="post"></div>
          </div>
        </div> */}
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 All Rights Reserved by Sikharthy Infotech</p>
        <div className="footer-links">
          <a href="/terms.html" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>
          <a href="/privacy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
