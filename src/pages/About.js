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
  faArrowRight,
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

  // State to manage which FAQ item is open
  const [openFaq, setOpenFaq] = useState(null);

  // FAQ data
  const faqs = [
    {
      question: "How do I make a reservation on your website?",
      answer:
        "To make a reservation, visit our website, select your desired location, choose your rental dates, pick a vehicle from our wide range of options, and complete the booking process by providing your details and payment information. You’ll receive a confirmation email once the booking is complete.",
    },
    {
      question:
        "What documents do I need for my trip, and how do I obtain them?",
      answer:
        "You’ll need a valid driver’s license, a credit card for payment, and, if traveling internationally, a passport and any required visas. You can obtain these documents from your local government offices, such as the DMV for a driver’s license or a passport office for a passport.",
    },
    {
      question:
        "In the event that I need to modify or cancel my reservation, what are the policies in place?",
      answer:
        "You can modify or cancel your reservation through our website or by contacting our support team. Modifications are subject to availability, and cancellations may incur a fee depending on the timing—please check our cancellation policy on the website for full details.",
    },
    {
      question:
        "Can you specify the types of credit/debit cards, digital wallets, or other online payment methods accepted?",
      answer:
        "Provide a step-by-step guide on how users can browse and book travel services on your platform. Include information on searching for destinations, selecting dates, choosing accommodation, and completing the booking process. Mention any special features or tools that can help users find the best deals.",
    },
    {
      question:
        "What are the working hours, and what can I expect in terms of response times?",
      answer:
        "Provide a step-by-step guide on how users can browse and book travel services on your platform. Include information on searching for destinations, selecting dates, choosing accommodation, and completing the booking process. Mention any special features or tools that can help users find the best deals.",
    },
  ];

  // Function to toggle FAQ items
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div>
      <Navbar />
      <img src="/aboutbanner.png" alt="bg" className="aboutbg" />

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

      <section className="how-it-works works" data-aos="fade-up">
        <div className="container">
          <div className="row mt-5">
            {steps.map((step, index) => (
              <div
                className="step col-6 col-md-3 d-flex flex-column mb-4"
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 200}
              >
                <div className="icon mb-3">
                  <FontAwesomeIcon icon={step.icon} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="margin3" />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <p className="mission1 text-start">Our Mission</p>
            <p className="mission2 text-start">
              Sell your car at a fair price. <br /> Get started with us today.
            </p>
            <p className="mission3 text-start">
              Our mission is to make car rental easy, accessible, and affordable
              for everyone. We believe that renting a car should be a
              hassle-free experience, and we're dedicated to ensuring that every
              customer finds the perfect vehicle for their journey.
            </p>
            <ul className="missionul">
              <li className="mli text-start">
                <i className="fa fa-check white"></i>Explore a wide range of
                flexible rental options to suit your needs
              </li>
              <li className="mli text-start">
                <i className="fa fa-check white"></i>Comprehensive insurance
                coverage for complete peace of mind
              </li>
              <li className="mli text-start">
                <i className="fa fa-check white"></i>24/7 customer support for
                assistance anytime, anywhere
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img className="missionimg" src="/aboutmission.png" alt="gfgh" />
          </div>
        </div>
      </div>
      <div className="faq-section">
      <img className="faqbg" src="/faqbg.png" alt="FAQ Background" />
      <div className="container faq">
        <p className="faq1 text-center">Our Support</p>
        <h2 className="faq2 text-center">Frequently Asked Questions</h2>

        {/* FAQ Accordion Section */}
        <div className="faq-accordion " data-aos="fade-up">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div
                className={`faq-question ${openFaq === index ? 'active' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <span className="faq-number">0{index + 1}</span>
                <span className="ask">{faq.question}</span>
                <span className="faq-toggle">{openFaq === index ? '×' : '+'}</span>
              </div>
              {openFaq === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="d-flex mt-5 mb-5 justify-content-center align-items-center gap-5">
          <Link to="#" className="contact">
            Contact Us
            <FontAwesomeIcon icon={faArrowRight} className="arrow" />
          </Link>
          <Link to="#" className="helpcenter">
            Help Center
            <FontAwesomeIcon icon={faArrowRight} className="arrow" />
          </Link>
        </div>
      </div>
    </div>

      <hr className="margin" />

      <Footer />
    </div>
  );
}

export default About;
