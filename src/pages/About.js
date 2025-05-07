import React, { useEffect, useState } from "react";
import './About.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <Navbar />
      {/* <div className="container"> */}
      <img src="/aboutbanner.png" alt="bg" className="aboutbg" />
      {/* </div> */}
    

      <div className="herosec1">
        <p className="lookingtxt mt-4">About Us</p>
        <p className="looksubtxt">Get the latest news, updates and tips</p>
      </div>

      <nav aria-label="breadcrumb" className="custom-breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            About Us
          </li>
        </ol>
      </nav>

      <div className="container futurecontainer">

      <div className="row">
        <div className="col-md-6">
          <p className="future">The Future of <br/>
         <span className='greencolor'> Car Rental</span> is Here</p>
        </div>
        <div className="col-md-6">
          <p className="futuredetail text-start">Welcome to GoDrive your trusted partner in car rentals. Since our founding, we have been committed to providing our customers with a seamless and reliable car rental experience. Whether you're planning a business trip, a family vacation, or just need a vehicle for everyday use, we offer a wide range of vehicles to meet your needs.</p>
        </div>
      </div>

      </div>

      <div className="container" data-aos="fade-up">
  <div className="row mt-5">
    {/* First two images in one row on small screens */}
    <div className="col-6 col-md-4" data-aos="fade-up" data-aos-delay="100">
      <img className="aboutimg1" src="/aboutimg1.png" alt="" />
    </div>
    <div className="col-6 col-md-4" data-aos="fade-up" data-aos-delay="200">
      <img className="aboutimg1" src="/aboutimg2.png" alt="" />
    </div>

    {/* Third column occupies full width on small screens */}
    <div className="col-12 col-md-4" data-aos="fade-up" data-aos-delay="300">
      <div className="aboutimg3 mb-3 none1">
        Top-quality service with reliable, clean cars
      </div>
      <div>
        <img className="car none1" src="/img-3.png" alt="" />
      </div>
    </div>
  </div>
</div>




    </div>
  );
}

export default About;