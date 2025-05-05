import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HomePage.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; 


import PremiumBrands from "../components/PremiumBrands";
import Homepage3 from "../components/Homepage3";
import HomePage4 from "../components/HomePage4";
import Footer from "../components/Footer";

function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  // State for pick-up dropdown
  const [isPickupOpen, setIsPickupOpen] = useState(false);
  const [pickupSelected, setPickupSelected] = useState("New York, USA");

  // State for drop-off dropdown
  const [isDropoffOpen, setIsDropoffOpen] = useState(false);
  const [dropoffSelected, setDropoffSelected] = useState("Miami, USA");

  // State for pick-up date
  const [pickupDate, setPickupDate] = useState(new Date());
  const [showPickupCalendar, setShowPickupCalendar] = useState(false);

  // State for return date
  const [returnDate, setReturnDate] = useState(new Date());
  const [showReturnCalendar, setShowReturnCalendar] = useState(false);

  // Separate options for pick-up and drop-off
  const pickupOptions = [
    "New York, USA",
    "Los Angeles, USA",
    "Chicago, USA",
    "Houston, USA",
    "San Francisco, USA",
  ];

  const dropoffOptions = [
    "Miami, USA",
    "Seattle, USA",
    "Boston, USA",
    "Atlanta, USA",
    "Phoenix, USA",
  ];

  const togglePickupDropdown = () => {
    setIsPickupOpen(!isPickupOpen);
    setIsDropoffOpen(false); // Close drop-off dropdown
  };
  
  const toggleDropoffDropdown = () => {
    setIsDropoffOpen(!isDropoffOpen);
    setIsPickupOpen(false); // Close pick-up dropdown
  };

  const handlePickupSelect = (option) => {
    setPickupSelected(option);
    setIsPickupOpen(false);
  };

  const handleDropoffSelect = (option) => {
    setDropoffSelected(option);
    setIsDropoffOpen(false);
  };

  // Format date as MM/DD/YYYY
  const formatDate = (date) =>
    `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

  return (
    <>
      <div className="hero-container">
        <Navbar />
        <img src="/carbg4.png" alt="bg" className="herobg" />
        <div className="overlay"></div>

        <div className="herosec" data-aos="zoom-out-up">
          <p className="greencolor per">Find Your Perfect Car</p>
          <p className="lookingtxt">
            Looking for a vehicle? <br />
            You're in the perfect spot.
          </p>
          <div className="row margin5">
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

      <div className="container halfhalf">
        <div className="row">
          <div className="col-md-6">
            <p className="allcars">All cars</p>
          </div>
          <div className="col-md-6 text-end">
            <i className="fa fa-user"></i>
            <Link className="help" to="/">
              Need help?
            </Link>
          </div>
        </div>

        <div className="row borderhalf">
          <div className="col-md-3 borderin">
            <p className="pickup text-start">Pick Up Location</p>
            <div className="inputcolor">
              <span className="marker">
                <i className="fa fa-map-marker"></i>
              </span>
              <div className="custom-dropdown">
                <div
                  className="selected inputcolor"
                  onClick={togglePickupDropdown}
                >
                  {pickupSelected}
                </div>
                {isPickupOpen && (
                  <ul className="dropdown-list">
                    {pickupOptions.map((option, index) => (
                      <li
                        key={index}
                        className="dropdown-item inputcolor1"
                        onClick={() => handlePickupSelect(option)}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-3 borderin">
            <p className="pickup text-start">Drop Off Location</p>
            <div className="inputcolor">
              <span className="marker">
                <i className="fa fa-map-marker"></i>
              </span>
              <div className="custom-dropdown">
                <div
                  className="selected inputcolor"
                  onClick={toggleDropoffDropdown}
                >
                  {dropoffSelected}
                </div>
                {isDropoffOpen && (
                  <ul className="dropdown-list">
                    {dropoffOptions.map((option, index) => (
                      <li
                        key={index}
                        className="dropdown-item inputcolor1"
                        onClick={() => handleDropoffSelect(option)}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-3 borderin">
            <p className="pickup text-start">Pick Up Date</p>
            <div className="date-picker">
            <span className="marker">
                <i className="fa fa-calendar"></i>
              </span>
              <input
                type="text"
                className="date-input inputcolor"
                value={formatDate(pickupDate)}
                readOnly
                onClick={() => {
                  setShowPickupCalendar(!showPickupCalendar);
                  setShowReturnCalendar(false); // 👈 close the other calendar
                }}
                
              />
           
              {showPickupCalendar && (
                <div className="calendar-wrapper">
                  <Calendar
                    onChange={(date) => {
                      setPickupDate(date);
                      setShowPickupCalendar(false);
                    }}
                    value={pickupDate}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="col-md-3 borderin1">
            <p className="pickup text-start">Return Date</p>
            <div className="date-picker">
            <span className="marker">
                <i className="fa fa-calendar"></i>
              </span>
              <input
                type="text"
                className="date-input inputcolor"
                value={formatDate(returnDate)}
                readOnly
                onClick={() => {
                  setShowReturnCalendar(!showReturnCalendar);
                  setShowPickupCalendar(false); // 👈 close the other calendar
                }}
                
              />
              {showReturnCalendar && (
                <div className="calendar-wrapper">
                  <Calendar
                    onChange={(date) => {
                      setReturnDate(date);
                      setShowReturnCalendar(false);
                    }}
                    value={returnDate}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
<PremiumBrands/>
<Homepage3/>
<HomePage4/>
<Footer/>

      
    </>
  );
}

export default HomePage;