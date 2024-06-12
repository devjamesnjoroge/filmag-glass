import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Filmag Logo" className="footer-logo-img" />
        </div>
        <div className="footer-info">
          <p>&copy; 2024 Filmag Glass Limited. All rights reserved.</p>
          <p>Phone: +254 721572139 | Email: info@filmaglass.com</p>
        </div>
        <div className="footer-links">
          <a href="/#">Home</a>
          <a href="/#">Products</a>
          <a href="/#">Contact Us</a>
          <a href="/#">About Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
