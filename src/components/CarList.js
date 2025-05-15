import React, { useEffect, useState } from "react";
import "./CarList.css";

import carData from "./carData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faList
} from "@fortawesome/free-solid-svg-icons";

function CarList() {
  const [filterPrice, setFilterPrice] = useState({ min: 0, max: 50000 });
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedFuels, setSelectedFuels] = useState([]);
  const [isCarTypeOpen, setIsCarTypeOpen] = useState(false);



  const carTypes = [
    { id: 1, name: "Sedans", count: 6 },
    { id: 2, name: "Hatchbacks", count: 10 },
    { id: 3, name: "Convertibles", count: 12 },
    { id: 4, name: "SUVs", count: 4 },
    { id: 5, name: "Coupes", count: 6 },
    { id: 6, name: "Compacts", count: 8 },
  ];

  const fuelTypes = [
    { id: 1, name: "Petrol" },
    { id: 2, name: "Hybrid (HEV)" },
    { id: 3, name: "Electric Vehicle (EV)" },
    { id: 4, name: "Diesel" },
    { id: 5, name: "Gasoline/Petrol" },
    { id: 6, name: "Hydrogen" },
  ];



  const handleCheckboxChange = (typeId) => {
    setSelectedTypes((prev) =>
      prev.includes(typeId)
        ? prev.filter((id) => id !== typeId)
        : [...prev, typeId]
    );
  };

  const handleFuelToggle = (fuelId) => {
    setSelectedFuels((prev) =>
      prev.includes(fuelId)
        ? prev.filter((id) => id !== fuelId)
        : [...prev, fuelId]
    );
  };

  const handlePriceChange = (e) => {
    setFilterPrice({ min: 0, max: parseInt(e.target.value) });
  };

  // const filteredCars = cars.filter(
  //   (car) =>
  //     car.price >= filterPrice.min &&
  //     car.price <= filterPrice.max &&
  //     (carType === "All" || car.type === carType)
  // );
  const handleClearFilters = () => {
    setFilterPrice({ min: 0, max: 50000 });
    setSelectedTypes([]);
    setSelectedFuels([]);
  };

  // Filter cars based on price, car type, and fuel type
  const filteredCars = carData.filter((car) => {
    // Extract numeric price from "PKR 8,500" format
    const price = parseFloat(car.price.replace('PKR ', '').replace(',', ''));

    // Price filter
    const priceMatch = price >= filterPrice.min && price <= filterPrice.max;

    // Car type filter (if no types selected, show all)
    const typeMatch =
      selectedTypes.length === 0 ||
      selectedTypes.some((typeId) => {
        const type = carTypes.find((t) => t.id === typeId);
        return type && car.type === type.name;
      });

    // Fuel type filter (if no fuels selected, show all)
    const fuelMatch =
      selectedFuels.length === 0 ||
      selectedFuels.some((fuelId) => {
        const fuel = fuelTypes.find((f) => f.id === fuelId);
        return fuel && car.fuel === fuel.name;
      });

    return priceMatch && typeMatch && fuelMatch;
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 left">
          <div className="filter-item">
            <label>Filter Price (PKR)</label>
            <input
              type="range"
              min="0"
              max="50000"
              step="500"
              value={filterPrice.max}
              onChange={handlePriceChange}
            />
            <span>PKR {filterPrice.min} - PKR {filterPrice.max}</span>
          </div>

          <div className="filter-item">
            <label className="filhead">Car Types</label>
            <div className="car-types-list">
              {carTypes.map((type) => (
                <div key={type.id} className="car-type-item">
                  <div className="car-type-checkbox">
                    <input
                      type="checkbox"
                      id={`type-${type.id}`}
                      checked={selectedTypes.includes(type.id)}
                      onChange={() => handleCheckboxChange(type.id)}
                    />
                    <label htmlFor={`type-${type.id}`}>{type.name}</label>
                  </div>
                  <span className="car-type-count">{type.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="filter-item">
            <label className="filhead">Fuel Types</label>
            <div className="car-types-list">
              {fuelTypes.map((fuel) => (
                <div key={fuel.id} className="car-type-item">
                  <div className="car-type-checkbox">
                    <input
                      type="checkbox"
                      id={`fuel-${fuel.id}`}
                      checked={selectedFuels.includes(fuel.id)}
                      onChange={() => handleFuelToggle(fuel.id)}
                    />
                    <label htmlFor={`fuel-${fuel.id}`}>{fuel.name}</label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-9 right left">

          <div className="custom-header">
           <span>
              <FontAwesomeIcon icon={faList} className="me-2 bs-light-bg-subtle" />
              1 - {filteredCars.length} of {carData.length} cars found
            </span>
 <div className="rightright"> 
           <button className="clear-filters-btn me-5" onClick={handleClearFilters}>
                Clear Filters
              </button>
            <select className="show-dropdown me-5">
              
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
            <select className="sort-dropdown">
              <option value="name">Name</option>
              <option value="price">Price</option>
            </select>
          </div>
          </div>
          <hr className="margin" />
       <div className="car-container">
      {filteredCars.map((car) => (
              <div className="cardisplay" key={car.id}>
                <div className="imgcar">
                  <img src={car.image} alt={car.title} />
                </div>
                <div className="cardetail bg-black">
                  <p className="cartitle text-start">{car.title}</p>
                  <p className="carloc text-start">
                    <i className="fa fa-map-marker me-1"></i> {car.location}
                  </p>
                  <p className="carpurpose text-start">{car.purpose}</p>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <div className="miles">{car.kilometers}</div>
                    <div className="miles">{car.transmission}</div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="miles">{car.fuel}</div>
                    <div className="miles">{car.seats}</div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="carloc">
                      <span className="fw-bold text-light">{car.price}</span> /day
                    </div>
                    <div className="miles">
                      <button className="booknow">Book Now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
    </div>
          </div>
        </div>
      </div>
    
  );
}

export default CarList;