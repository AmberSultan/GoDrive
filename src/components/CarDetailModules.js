import React, { useState } from "react";
import { Link } from "react-router-dom";
import carData from "./carData";
import './CarDetailModeule.css'; 

function CarDetailModules() {
  const [filterPrice, setFilterPrice] = useState({ min: 0, max: 50000 });
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedFuels, setSelectedFuels] = useState([]);
  const [isCarTypeOpen, setIsCarTypeOpen] = useState(false);
  const [visibleCars, setVisibleCars] = useState(6); // Show 2 rows (3 cars per row = 6 cars)

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

  const filteredCars = carData.filter((car) => {
    const price = parseFloat(car.price.replace('PKR ', '').replace(',', ''));
    const priceMatch = price >= filterPrice.min && price <= filterPrice.max;

    const typeMatch =
      selectedTypes.length === 0 ||
      selectedTypes.some((typeId) => {
        const type = carTypes.find((t) => t.id === typeId);
        return type && car.type === type.name;
      });

    const fuelMatch =
      selectedFuels.length === 0 ||
      selectedFuels.some((fuelId) => {
        const fuel = fuelTypes.find((f) => f.id === fuelId);
        return fuel && car.fuel === fuel.name;
      });

    return priceMatch && typeMatch && fuelMatch;
  });

  const handleLoadMore = () => {
    setVisibleCars((prev) => prev + 6); // Load 2 more rows (6 cars)
  };

  return (
    <div className="container my-5">
      <div className="heading-section text-center mb-4">
        <h1 className="main-heading text-start">Most Searched Vehicles</h1>
        <p className="sub-heading text-start">The world's leading car brands</p>
      </div>
      <div className="row mt-4 row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {filteredCars.slice(0, visibleCars).map((car) => (
          <div className="col" key={car.id}>
            <div className="car-card h-100 bg-black text-light rounded shadow">
              <div className="imgcar">
                <img src={car.image} alt={car.title} />
              </div>
              <div className="car-details p-3">
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
                    <Link className="booknow" to="/car-detail">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleCars < filteredCars.length && (
  <div className="text-center mt-4">
    <button className="btn btn-warning " onClick={handleLoadMore}>
      <i className="fa fa-refresh me-2"></i> Load More Cars
    </button>
  </div>
)}
    </div>
  );
}

export default CarDetailModules;