import React, { useState } from 'react';
import "./NavbarStyle.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`NavbarItems ${isOpen ? 'active' : ''}`}>
      <div className="container">
        <h1 className='navbar-logo'>Trippy</h1>
        <div className='menu-icon' onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className='nav-item'>
            <Link to="/" className='nav-links'>
              <i className="fa-solid fa-house-user"></i>Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/about" className='nav-links'>
              <i className="fa-solid fa-circle-info"></i>About
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/service" className='nav-links'>
              <i className="fa-solid fa-briefcase"></i>Service
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/contact" className='nav-links'>
              <i className="fa-solid fa-address-book"></i>Contact
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-links btn'>
              SignUp
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
