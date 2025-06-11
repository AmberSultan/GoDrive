import React, { useEffect } from "react";
import "./Bookcardetail.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen, faMap,faGasPump, faChair, faGears, faDroplet, faGaugeSimpleHigh, faCircleCheck, faPhone, faEnvelope, faMessage, faFax} from "@fortawesome/free-solid-svg-icons";

// import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

function BookCarDetail() {
  useEffect(() => {
    const thumbs = document.querySelectorAll(".thumb-img");

    thumbs.forEach((thumb) => {
      thumb.addEventListener("click", () => {
        thumbs.forEach((t) => t.classList.remove("active"));
        thumb.classList.add("active");
      });
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="section">
          <div className="breadcrumblinks">
            <a className="bcrumb " href="/">
              Home
            </a>
            <a className="bcrumb" href="/car-rental">
              Car Rental
            </a>
            <p className="bcrumb1 fw-bold">Hyundai Accent 2025</p>
          </div>

          <div
            id="carouselExampleControls"
            className="carousel slide custom-carousel"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/bannerb2.png"
                  className="d-block carouselimg1 w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/bannerb3.png"
                  className="d-block carouselimg1 w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/bannerb4.png"
                  className="d-block carouselimg1 w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <div className="thumbs-container">
            <div className="thumbs">
              <img
                src="/bannerb2.png"
                className="thumb-img"
                data-bs-target="#carouselExampleControls"
                alt="Thumbnail 1"
                data-bs-slide-to="0"
              />
              <img
                src="/bannerb3.png"
                className="thumb-img"
                data-bs-target="#carouselExampleControls"
                alt="Thumbnail 2"
                data-bs-slide-to="1"
              />
              <img
                src="/bannerb4.png"
                className="thumb-img"
                data-bs-target="#carouselExampleControls"
                alt="Thumbnail 3"
                data-bs-slide-to="2"
              />
              <img
                src="/banner5.png"
                className="thumb-img"
                data-bs-target="#carouselExampleControls"
                alt="Thumbnail 4"
                data-bs-slide-to="1"
              />
              <img
                src="/banner6.png"
                className="thumb-img"
                data-bs-target="#carouselExampleControls"
                alt="Thumbnail 5"
                data-bs-slide-to="0"
              />
              <img
                src="/banner7.png"
                className="thumb-img"
                data-bs-target="#carouselExampleControls"
                alt="Thumbnail 6"
                data-bs-slide-to="2"
              />
              <img
                src="/bannerb8.png"
                className="thumb-img"
                data-bs-target="#carouselExampleControls"
                alt="Thumbnail 7"
                data-bs-slide-to="0"
              />
            </div>
          </div>
        </div>
        <div className="section rate mt-5">
          <p className="text-start fw-bold ratestart">
            ⭐ 4.96 <span className="spangrey">(672 reviews)</span>{" "}
          </p>
        </div>

        <div className="container">
          <h2 className="text-start hea">
            Hyundai Accent 2015 - Modern compact sedan in <br /> blue color on
            beautiful dark wheels
          </h2>
          <div className="d-flex mt-5 gap-5">
            <div>
              <span className="loc">
                <i className="fa fa-map-marker smallsize"></i>
              </span>
              Lahore
            </div>
            <div>
              <span className="loc">
              <FontAwesomeIcon icon={faMap} />
              </span>
              Fleet Code: LVA-4125
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-8">
              <div className="overview1">
                <div className="row justify-content-center gap-3">
                  <div className="col-md-3 clrbg"><FontAwesomeIcon className="text-dark" icon={faGaugeSimpleHigh} /> 56,500</div>
                  <div className="col-md-3 clrbg"><FontAwesomeIcon className="text-dark" icon={faGasPump} />   Diesel</div>
                  <div className="col-md-3 clrbg"><FontAwesomeIcon className="text-dark" icon={faGears} />   Automatic</div>
                  <div className="col-md-3 clrbg">
                    <FontAwesomeIcon className="text-dark" icon={faChair} />  7 seats</div>
                  <div className="col-md-3 clrbg">
                <FontAwesomeIcon className="text-dark" icon={faDoorOpen} />   4 Doors
                  </div>
                  <div className="col-md-3 clrbg">
                  <FontAwesomeIcon className="text-dark" icon={faDroplet} />  2.5L
                  </div>
                </div>
              </div>
              <div className="overview">
                <h5 className="over text-start"> Overview </h5>
                <p className="desc text-start">
                  Elevate your Lahore experience to new heights with a journey
                  aboard The High Roller at The LINQ. As the tallest observation
                  wheel in the world, standing at an impressive 550 feet tall,
                  The High Roller offers a bird's-eye perspective of the iconic
                  Lahore Strip and its surrounding desert landscape. From the
                  moment you step into one of the spacious cabins, you'll be
                  transported on a mesmerizing adventure, where every turn
                  offers a new and breathtaking vista of the vibrant city below.
                  Whether you're a first-time visitor or a seasoned Lahore
                  aficionado, The High Roller promises an unparalleled
                  experience that will leave you in awe. With its
                  climate-controlled cabins and immersive audio commentary, this
                  attraction provides a unique opportunity to see Lahore from a
                  whole new perspective, while learning about its rich history
                  and famous landmarks along the way.
                </p>
              </div>
              <div className="overview">
  <h5 className="over text-start">Included in the price</h5>
  <div className="row">
    <div className="col-md-6">
      <p className="points"><FontAwesomeIcon className="text-warning" icon={faCircleCheck}/> Free cancellation up to 48 hours before pick-up</p>
      <p className="points"><FontAwesomeIcon className="text-warning" icon={faCircleCheck}/> Theft protection with Rs. 200,000 deductible</p>
    </div>
    <div className="col-md-6">
      <p className="points"><FontAwesomeIcon className="text-warning" icon={faCircleCheck}/> Collision cover (Rs. 150,000 deductible)</p>
      <p className="points"><FontAwesomeIcon className="text-warning" icon={faCircleCheck}/> Unlimited</p>
    </div>
  </div>
</div>

<div className="overview">
  <h5 className="over text-start">Questions Answers</h5>


</div>

            </div>
            <div className="col-md-4">
  <div className="overview">
    <h5 className="over text-start rent">Rent This Vehicle</h5>

    <div className="mb-3 text-start">
      <label className="form-label newcss ">Pick-Up</label>
      <input type="date" className="form-control nocolor" defaultValue="2025-06-10" />
    </div>

    <div className="mb-3 text-start">
      <label className="form-label newcss">Drop-Off</label>
      <input type="date" className="form-control nocolor" defaultValue="2025-06-10" />
    </div>

    <hr className="border-secondary" />

    <h6 className="fw-bold text-start">Add Extra:</h6>

  <div className="form-check">
    <input className="form-check-input nocolor" type="checkbox" id="gps" />
    <label className="form-check-label d-flex justify-content-between" htmlFor="gps">
      <span className="newcss" >GPS Navigation System</span>
      <span className="newcss">Rs 7,000</span>
    </label>
  </div>

  <div className="form-check">
    <input className="form-check-input nocolor" type="checkbox" id="child" />
    <label className="form-check-label d-flex justify-content-between" htmlFor="child">
      <span className="newcss">Child Seat</span>
      <span className="newcss">Rs 9,000</span>
    </label>
  </div>

  <div className="form-check">
    <input className="form-check-input nocolor" type="checkbox" id="driver" />
    <label className="form-check-label d-flex justify-content-between" htmlFor="driver">
      <span className="newcss">Additional Driver</span>
      <span className="newcss">Rs 7,000</span>
    </label>
  </div>

  <div className="form-check mb-3">
    <input className="form-check-input nocolor" type="checkbox" id="insurance" />
    <label className="form-check-label d-flex justify-content-between" htmlFor="insurance">
      <span className="newcss">Insurance Coverage</span>
      <span className="newcss">Rs 14,500</span>
    </label>
  </div>

  <hr className="border-secondary" />

  <div className="d-flex justify-content-between">
    <p className="mb-1">Subtotal</p>
    <p className="mb-1">Rs 34,500</p>
  </div>
  <div className="d-flex justify-content-between">
    <p className="mb-1">Sale discount</p>
    <p className="mb-1">Rs 0</p>
  </div>
  <div className="d-flex justify-content-between fw-bold">
    <p className="mb-3">Total Payable</p>
    <p className="mb-3">Rs 34,500</p>
  </div>

    <button className="btn fw-bold btn-warning w-100 mb-2">
      Book Now <span className=" fw-semibold ms-2">→</span>
    </button>
    <div className="text-center text-secondary small">🛈 Need some help?</div>
  </div>

  <div className="overview text-start">
    <h5 className="over text-start rent">Listed by</h5>

    <div className="d-flex">
      <div><img src="/dealerpp.png" alt="" /></div>
      <div className="ms-3">
        <p className="fw-bold mb-0">Ahmed Ali</p>
    <p className="text-secondary">Lahore, Pakistan</p>
      </div>
    </div>

   
    

    <hr className="border-secondary" />

    <p><FontAwesomeIcon icon={faPhone} className="newcolor" /> Mobile: 1-22-333-4444</p>
    <p><FontAwesomeIcon icon={faEnvelope} className="newcolor" /> Email: alivendor@gmail.com</p>
    <p><FontAwesomeIcon icon={faMessage} className="newcolor" /> WhatsApp: 1-22-333-444</p>
    <p><FontAwesomeIcon icon={faFax} className="newcolor" /> Fax : 1-22-333-4444</p>

  </div>
</div>

          </div>
        </div>
      </div>
    </>
  );
}

export default BookCarDetail;
