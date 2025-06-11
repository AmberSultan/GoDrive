import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Homepage4.css';

// Import Font Awesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCar, faCheckCircle, faKey } from '@fortawesome/free-solid-svg-icons';

function HomePage4() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const steps = [
    {
      icon: faMapMarkerAlt,
      title: "Choose a Location",
      description: "Select the ideal destination to begin your journey with ease"
    },
    {
      icon: faCar,
      title: "Choose Your Vehicle",
      description: "Browse our fleet and find the perfect car for your needs"
    },
    {
      icon: faCheckCircle,
      title: "Verification",
      description: "Review your information and confirm your booking"
    },
    {
      icon: faKey,
      title: "Begin Your Journey",
      description: "Start your adventure with confidence and ease"
    }
  ];

  return (
    <>
     <section className="how-it-works" data-aos="fade-up">
  <p className="subtitle text-center" data-aos="fade-up">HOW IT WORKS</p>
  <h2 className="title text-center" data-aos="fade-up" data-aos-delay="100">
    Presenting Your New Go-To Car Rental Experience
  </h2>
<div className="container">
  <div className="row mt-5">
    {steps.map((step, index) => (
      <div
        className="step col-6 col-md-3 d-flex flex-column  mb-4"
        key={index}
        data-aos="zoom-in"
        data-aos-delay={index * 200}
      >
        <div className="icon mb-3">
          <FontAwesomeIcon icon={step.icon} />
        </div>
        <h3 >{step.title}</h3>
        <p>{step.description}</p>
      </div>
    ))}
  </div>
  </div>
</section>


      {/* Highlight Section */}
      <div className="highlights-container" data-aos="fade-up">
        <img src='/carbg.jpg' alt="Background" className="background-image" />

        <div className="container mt-5">
          <div className="top containercss">
            <div className="row">
              <div className="col-md-6 text-start need" data-aos="fade-right">
                <h1>Need to Estimate <br /> Your Car Rental Price?</h1>
                <p>Quickly calculate the total cost based on car type, duration, and location.</p>
              </div>
              <div className="col-md-6" data-aos="fade-left">
                <div className="rent-calculator-container">
                  <h1 className="rent-heading text-start">Rent Calculator</h1>
                  <p className="rent-subheading text-start">Get an instant price estimate for your rental car</p>

                  <form id="rentalForm" className="rent-form">
                    <div className="rent-form-group text-start">
                      <label htmlFor="carType">Car Type</label>
                      <select id="carType" className="rent-input" required>
                        <option selected disabled>Choose a car</option>
                        <option value="economy">Economy</option>
                        <option value="standard">Standard</option>
                        <option value="suv">SUV</option>
                        <option value="luxury">Luxury</option>
                      </select>
                    </div>

                    <div className="rent-form-group text-start">
                      <label htmlFor="rentalDays">Rental Duration (Days)</label>
                      <input type="number" className="rent-input" id="rentalDays" min={1} required />
                    </div>

                    <div className="rent-form-group text-start">
                      <label htmlFor="pickupLocation">Pickup Location</label>
                      <input type="text" className="rent-input" id="pickupLocation" placeholder="City or Zip" required />
                    </div>

                    <div className="rent-form-group">
                      <button type="submit" className="rent-button">Estimate Price</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats Section */}
          <div className="containercss bottom">
            <div className="row text-center">
              <div className="col-12 col-md-8 custom-flex">
                <div className="highlight-item" data-aos="fade-up">
                  <h2>45+</h2>
                  <p>Global Branches</p>
                </div>
                <div className="highlight-item" data-aos="fade-up" data-aos-delay="100">
                  <h2>29K</h2>
                  <p>Destinations Collaboration</p>
                </div>
                <div className="highlight-item" data-aos="fade-up" data-aos-delay="200">
                  <h2>168K</h2>
                  <p>Happy Customers</p>
                </div>
              </div>

              <div className="col-12 col-md-4" data-aos="fade-up">
                <div className="user-stats">
                  <img src="https://media.istockphoto.com/id/1333647263/photo/cheerful-african-teenage-girl-coming-in-her-house.jpg?s=612x612&w=0&k=20&c=UWZ5lRAkHa5ZxZgN5qOAytddmjR-wj_I44P1pXt2RFM=" alt="User 1" />
                  <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="User 2" />
                  <img src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" alt="User 3" />
                  <img src="https://cdn.create.vista.com/api/media/medium/471007144/stock-vector-add-button-symbol-black-circle-yellow-glowing-neon-icon?token=" alt="User 3" />
                  <p className="people">1684 people used GoDrive <br />  in the last 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container subscribe">
          <div className="row marginsub">
            <div className="col-md-6">
                <p className="sub text-start">Subscribe now to unlock secret deals, prices drop instantly when you join the list!</p>
            </div>

            <div className="col-md-6 mt-3 mb-5">
                <div className="d-flex ">
                    <input className='subinput' placeholder='Enter your email' type="text" />
                    <button className='subbtn'>Subscribe</button>
                </div>
            </div>
          </div>

          <hr/>
      </div>

   
    </>
  );
}

export default HomePage4;
