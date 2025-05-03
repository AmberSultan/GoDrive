import React from 'react';
import './PremiumBrands.css';

// Sample logo data (replace with actual logo URLs or import images)
const logos = [
    '/suzuki.png',
    '/honda.png',
    '/toyota.png',
    '/volk.png',
    '/bmw.png',
    '/tesla.png',
    '/ferrari.png',
    '/mistu.png',
  ];
  

function PremiumBrands() {
  return (
    <div className="bg">
      <div className="container">
        <h2 className="premium text-start">Featured Brands</h2>
        <p className="unveil text-start">Unveil the Finest Selection of High-End Vehicles</p>

        <div className="marquee">
          <div className="marquee-content">
            {/* Render logos twice to create a seamless loop */}
            {logos.map((logo, index) => (
              <img key={`logo-${index}`} src={logo} alt={`Brand ${index + 1}`} className="logo1" />
            ))}
            {logos.map((logo, index) => (
              <img key={`logo-duplicate-${index}`} src={logo} alt={`Brand ${index + 1}`} className="logo1" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PremiumBrands;