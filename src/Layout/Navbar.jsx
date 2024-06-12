import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <div className="menu">
        <FontAwesomeIcon fontSize={32} color='var(--color-primary-6)' icon={faBars} />
        </div>
    </header>
  )
}

export default Navbar