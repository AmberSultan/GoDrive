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
    <section className="how-it-works" data-aos="fade-up">
      <p className="subtitle" data-aos="fade-up">HOW IT WORKS</p>
      <h2 className="title" data-aos="fade-up" data-aos-delay="100">Presenting Your New Go-To Car Rental Experience</h2>
      
      <div className="steps-container">
        {steps.map((step, index) => (
          <div
            className="step"
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
  );
}

export default HomePage4;
