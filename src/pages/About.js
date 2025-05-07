import React, { useEffect, useState } from "react";
import "./About.css";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

// Import Font Awesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBill,
  faCar,
  faHeadset,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const steps = [
    {
      icon: faCar,
      title: "Choose a Location",
      description:
        "Select the ideal destination to begin your journey with ease",
    },
    {
      icon: faMoneyBill,
      title: "Transparent Pricing",
      description:
        "Upfront, transparent rates—no hidden fees for complete peace of mind.",
    },
    {
      icon: faClipboardList,
      title: "Convenient Booking",
      description:
        "Flexible rental options—short-term, long-term, or weekend specials to suit you.",
    },
    {
      icon: faHeadset,
      title: "24/7 Customer Support",
      description:
        "Round-the-clock assistance from our dedicated team whenever you need it.",
    },
  ];

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
            <p className="future">
              The Future of <br />
              <span className="greencolor"> Car Rental</span> is Here
            </p>
          </div>
          <div className="col-md-6">
            <p className="futuredetail text-start">
              Welcome to GoDrive your trusted partner in car rentals. Since our
              founding, we have been committed to providing our customers with a
              seamless and reliable car rental experience. Whether you're
              planning a business trip, a family vacation, or just need a
              vehicle for everyday use, we offer a wide range of vehicles to
              meet your needs.
            </p>
          </div>
        </div>
      </div>

      <div className="container" data-aos="fade-up">
        <div className="row mt-5">
          {/* First two images in one row on small screens */}
          <div
            className="col-6 col-md-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img className="aboutimg1" src="/aboutimg1.png" alt="" />
          </div>
          <div
            className="col-6 col-md-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img className="aboutimg1" src="/aboutimg2.png" alt="" />
          </div>

          {/* Third column occupies full width on small screens */}
          <div
            className="col-12 col-md-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="aboutimg3 mb-3 none1">
              Top-quality service with reliable, clean cars
            </div>
            <div>
              <img className="car none1" src="/img-3.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <section className="how-it-works" data-aos="fade-up">
        {/* <p className="subtitle" data-aos="fade-up">HOW IT WORKS</p>
        <h2 className="title" data-aos="fade-up" data-aos-delay="100">
          Presenting Your New Go-To Car Rental Experience
        </h2> */}

        <div className="steps-container steps-container1 mt-5">
          {steps.map((step, index) => (
            <div
              className="step step1"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 200} // stagger effect
            >
              <div className="icon">
                <FontAwesomeIcon icon={step.icon} size="1x" />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>
<hr className="margin3" />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <p className="mission1 text-start">Our Mission</p>
            <p className="mission2 text-start">
              Sell your car at a fair price. <br/> Get started with us today.
            </p>
            <p className="mission3 text-start">
              Our mission is to make car rental easy, accessible, and affordable
              for everyone. We believe that renting a car should be a
              hassle-free experience, and we're dedicated to ensuring that every
              customer finds the perfect vehicle for their journey.
            </p>
            <ul className="missionul">
              <li className="mli text-start"><i className="fa fa-check white"></i>Explore a wide range of flexible rental options to suit your needs</li>
              <li className="mli text-start"><i className="fa fa-check white"></i>Comprehensive insurance coverage for complete peace of mind</li>
              <li className="mli text-start"><i className="fa fa-check white"></i>24/7 customer support for assistance anytime, anywhere</li>
            </ul>

          </div>
          <div className="col-md-6">
            <img className="missionimg" src="/aboutmission.png" alt="gfgh" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
