import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <header>
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} height={80} width={80} alt="logo" />
        </div>
        <nav>
          <ul><li><a href="/#">Home</a></li></ul>
          <ul><li><a href="/#">About Us</a></li></ul>
          <ul><li><a href="/#">Products</a></li></ul>
          <ul><li><a href="/#">Contact</a></li></ul>
        </nav>
    </header>
  )
}

export default Navbar