import React from 'react';
import './Footer.css'; // Assuming the CSS is in this file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          &copy; 2024 Cake Shop. All Rights Reserved.
        </p>
        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
        </div>
        <div className="footer-contact">
          <p>Contact Us: <a href="mailto:info@cakeshop.com" className="contact-link">info@cakeshop.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
