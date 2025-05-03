import React from 'react'

import './Homepage3.css'

function Homepage3() {
  return (
    <div className="container my-5">
    <div className="row  rowsell ">
      {/* Left Image/Video */}
      <div className="col-md-6 mb-4 mb-md-0 position-relative">
        <img
          src="/images/car-offer.png"
          alt="Car Rental"
          className="img-fluid rounded"
        />
      </div>

      {/* Right Content */}
      <div className="col-md-6">
        <p className='carrental text-center'>Best Car Rental System</p>
        <p className="recieve text-start">Receive a Competitive Offer Sell Your Car to Us Today.</p>
        <p className="text-secondary mb-4 text-start">
          We are committed to delivering exceptional service, competitive pricing,
          and a diverse selection of options for our customers.
        </p>
        <div className="row text-start">
          <div className="col-6 mb-4">
            <i className="fa fa-check"></i> Expert Certified Mechanics
          </div>
          <div className="col-6 mb-4">
            <i className="fa fa-check"></i> First Class Services
          </div>
          <div className="col-6 mb-4">
            <i className="fa fa-check"></i> Get Reasonable Price
          </div>
          <div className="col-6 mb-4">
            <i className="fa fa-check"></i> 24/7 road assistance
          </div>
          <div className="col-6 mb-4">
            <i className="fa fa-check"></i> Genuine Spares Parts
          </div>
          <div className="col-6 mb-4">
            <i className="fa fa-check"></i> Free Pick-Up & Drop-Offs
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Homepage3
