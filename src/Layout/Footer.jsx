import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">About Us</Link></li>
          <li><Link to="/products">View Products</Link></li>
          <li><Link to="/">Contact</Link></li>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
