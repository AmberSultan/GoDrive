import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container text-start">
        {/* Company Info Section */}
        <div className="footer-section company-info">
        <div className="logo text-white d-flex align-items-center">
          <img className='wheelcss' src="/steering-wheel.png" alt="wheel" />
          GoDrive
        </div>
          <p>
            <span className="icon"><i className="fa fa-map-marker smallsize"></i></span> 2356 Oakwood Drive, Suite 18, San Francisco, California 94111, US
          </p>
          <p>
            <span className="icon">
            <i className="fa fa-clock-o smallsize"></i></span> Hours: 8:00 - 17:00, Mon - Sat
          </p>
          <p>
            <span className="icon">
            <i className="fa fa-envelope smallsize"></i></span> support@godrive.com
          </p>
          <p className="call-us">
            Need Help? Call us <br />
            <span className="phone-number">+1 222-555-33-99</span>
          </p>
        </div>

        {/* Company Links */}
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Awards</a></li>
            <li><a href="#">Agencies</a></li>
            <li><a href="#">Copyright Notices</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Notice</a></li>
            <li><a href="#">Lost & Found</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li><a href="#">Car Rental Services</a></li>
            <li><a href="#">Vehicle Leasing Options</a></li>
            <li><a href="#">Long-Term Car Rentals</a></li>
            <li><a href="#">Car Sales and Trade-Ins</a></li>
            <li><a href="#">Luxury Car Rentals</a></li>
            <li><a href="#">Rent-to-Own Programs</a></li>
            <li><a href="#">Fleet Management Solutions</a></li>
          </ul>
        </div>

        {/* Our Partners */}
        <div className="footer-section">
          <h3>Our Partners</h3>
          <ul>
            <li><a href="#">Affiliates</a></li>
            <li><a href="#">Travel Agents</a></li>
            <li><a href="#">AARP Members</a></li>
            <li><a href="#">Points Programs</a></li>
            <li><a href="#">Military & Veterans</a></li>
            <li><a href="#">Work with us</a></li>
            <li><a href="#">Advertise with us</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Forum support</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Live chat</a></li>
            <li><a href="#">How it works</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Refund Policy</a></li>
          </ul>
        </div>
      </div>
      <hr/>
      {/* Copyright */}
      <div className="container footer-bottom">
     
        <p className='text-center'>© 2025 godrive Inc. All rights reserved.</p>
        <p className='text-center'>Made by <span className='greencolor'>Amber Sultan</span> </p>
      </div>
    </footer>
  );
}

export default Footer;