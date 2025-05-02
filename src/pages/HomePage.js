import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HomePage.css';

import Navbar from "../components/Navbar";

function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <div className="hero-container">
      <Navbar />
      <img src="/carbg4.png" alt="bg" className="herobg" />
      <div className="overlay"></div>

      <div
        className="herosec"
        data-aos="zoom-out-up"
      >
        <p className='greencolor per'>Find Your Perfect Car</p>
        <p className="lookingtxt">
          Looking for a vehicle? <br />
          You’re in the perfect spot.
        </p>
        <div className="row mt-5">
          <div className="col-md-4 small">
            <i className="fa fa-check"></i> Premium yet affordable.
          </div>
          <div className="col-md-4 small">
            <i className="fa fa-check"></i> Premium services.
          </div>
          <div className="col-md-4 small">
            <i className="fa fa-check"></i> 24/7 roadside support.
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
