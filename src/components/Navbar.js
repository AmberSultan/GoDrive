import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='custom-navbar'>
      {/* Top contact row */}
      <div className="row bgtop none">
        <div className="col-md-4 small text-white text-start">
          <i className="fa fa-phone"></i> +92-345-6789234
        </div>
        <div className="col-md-4 small text-white text-start">
          <i className="fa fa-envelope"></i> sale@godrive.com
        </div>
        <div className="col-md-4 small text-white text-start">
          <i className="fa fa-car greencolor"></i> More than <span className='greencolor'>800+</span> special collection cars in this summer
        </div>
      </div>

      <hr className='hr none' />

      {/* Navbar */}
      <nav className="navbar-container">
        <div className="logo text-white ms-4 d-flex align-items-center">
          <img className='wheelcss' src="/steering-wheel.png" alt="wheel" />
          GoDrive
        </div>

        <button className="hamburger" onClick={toggleNavbar}>
  <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
</button>


        <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
          <li className='navli'><Link className='navlink' to="/">Home</Link></li>
          <li className='navli'><Link className='navlink' to="/about">About Us</Link></li>
          <li className='navli'><Link className='navlink' to="/services">Our Services</Link></li>
          <li className='navli'><Link className='navlink' to="/book-a-car">Book Now</Link></li>
          <li className='navli'><Link className='navlink' to="/loan-calculator">Loan Calculator</Link></li>
          <li className='navli'><Link className='navlink' to="/terms">Term</Link></li>
          <li className='navli'><Link className='navlink' to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <hr className='hr margin' />
    </div>
  );
}

export default Navbar;