import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} height={80} width={80} alt="logo" />
        </div>
        <nav>
          <ul><li><Link to="/">Home</Link></li></ul>
          <ul><li><Link to="/">About Us</Link></li></ul>
          <ul><li><Link to="/products">View Products</Link></li></ul>
          <ul><li><Link to="/">Contact</Link></li></ul>
        </nav>
    </header>
  )
}

export default Navbar