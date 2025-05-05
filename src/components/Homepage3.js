import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Homepage3.css';

function Homepage3() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // animation duration in ms
  }, []);

  return (
    <div className="container my-5">
      <div className="row rowsell">
        {/* Left Image/Video */}
        <div
          className="col-md-6 mb-4 mb-md-0 position-relative"
          data-aos="fade-right" // 👈 animation
        >
          <img
            src="/carrent.jpg"
            alt="Car Rental"
            className="img-fluid imgesfluid rounded"
          />
        </div>

        {/* Right Content */}
        <div className="col-md-6 " data-aos="fade-left"> {/* 👈 animation */}
          <p className='carrental text-center magintop'>Best Car Rental System</p>
          <p className="recieve text-start">Receive a Competitive Offer Sell Your Car to Us Today.</p>
          <p className="text-secondary mb-4 text-start">
            We are committed to delivering exceptional service, competitive pricing,
            and a diverse selection of options for our customers.
          </p>
          <div className="row text-start">
            {[
              "Expert Certified Mechanics",
              "First Class Services",
              "Get Reasonable Price",
              "24/7 road assistance",
              "Genuine Spares Parts",
              "Free Pick-Up & Drop-Offs"
            ].map((item, idx) => (
              <div className="col-6 mb-4" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <i className="fa fa-check"></i> {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage3;
