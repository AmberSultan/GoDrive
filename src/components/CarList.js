import React, { useEffect, useState } from "react";

import './CarList.css'

function CarList() {
  const [filterPrice, setFilterPrice] = useState({ min: 0, max: 100 });
  const [carType, setCarType] = useState("SUVs");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedFuels, setSelectedFuels] = useState([]);
  const [isCarTypeOpen, setIsCarTypeOpen] = useState(false); // Added state for dropdown

  const cars = [
    {
      name: "Audi Q5 2.0T Premium Plus",
      location: "New South Wales, Australia",
      mileage: "25,100 miles",
      transmission: "Automatic",
      fuel: "Diesel",
      seats: 7,
      price: 99.32,
      image: "/audi-q5.jpg",
      reviews: 4.96,
      type: "SUVs",
    },
    {
      name: "Buick Enclave Avenir",
      location: "New South Wales, Australia",
      mileage: "25,100 miles",
      transmission: "Automatic",
      fuel: "Diesel",
      seats: 7,
      price: 99.32,
      image: "/buick-enclave.jpg",
      reviews: 4.96,
      type: "SUVs",
    },
    {
      name: "Cadillac XT6 Premium Luxury",
      location: "New South Wales, Australia",
      mileage: "25,100 miles",
      transmission: "Automatic",
      fuel: "Diesel",
      seats: 7,
      price: 99.32,
      image: "/cadillac-xt6.jpg",
      reviews: 4.96,
      type: "SUVs",
    },
    {
      name: "Chevrolet Bolt EV Premier",
      location: "New South Wales, Australia",
      mileage: "25,100 miles",
      transmission: "Automatic",
      fuel: "Electric",
      seats: 5,
      price: 89.99,
      image: "/chevrolet-bolt.jpg",
      reviews: 4.96,
      type: "Sedans",
    },
    {
      name: "Chevrolet Silverado",
      location: "New South Wales, Australia",
      mileage: "25,100 miles",
      transmission: "Automatic",
      fuel: "Diesel",
      seats: 5,
      price: 89.99,
      image: "/chevrolet-silverado.jpg",
      reviews: 4.96,
      type: "SUVs",
    },
    {
      name: "Ford Mustang GT Premium",
      location: "New South Wales, Australia",
      mileage: "25,100 miles",
      transmission: "Automatic",
      fuel: "Gasoline",
      seats: 4,
      price: 89.99,
      image: "/ford-mustang.jpg",
      reviews: 4.96,
      type: "Convertibles",
    },
  ];

  const carTypes = [
    { id: 1, name: 'Sedans', count: 6 },
    { id: 2, name: 'Hatchbacks', count: 10 },
    { id: 3, name: 'Convertibles', count: 12 },
    { id: 4, name: 'SUVs', count: 4 },
    { id: 5, name: 'Coupes', count: 6 },
    { id: 6, name: 'Compacts', count: 8 }
  ];

  const fuelTypes = [
    { id: 1, name: 'Plug-in Hybrid (PHEV)' },
    { id: 2, name: 'Hybrid (HEV)' },
    { id: 3, name: 'Electric Vehicle (EV)' },
    { id: 4, name: 'Diesel' },
    { id: 5, name: 'Gasoline/Petrol' },
    { id: 6, name: 'Hydrogen' }
  ];

  const handleCheckboxChange = (typeId) => {
    setSelectedTypes(prev => 
      prev.includes(typeId)
        ? prev.filter(id => id !== typeId)
        : [...prev, typeId]
    );
  };

  const handleFuelToggle = (fuelId) => {
    setSelectedFuels(prev => 
      prev.includes(fuelId)
        ? prev.filter(id => id !== fuelId)
        : [...prev, fuelId]
    );
  };

  const filteredCars = cars.filter(
    (car) =>
      car.price >= filterPrice.min &&
      car.price <= filterPrice.max &&
      (carType === "All" || car.type === carType)
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 left">
        <div className="filter-item">
            <label>Filter Price ($)</label>
            <input
              type="range"
              min="0"
              max="100"
              value={filterPrice.max}
              onChange={(e) => setFilterPrice({ min: 0, max: e.target.value })}
            />
            <span>${filterPrice.min} - ${filterPrice.max}</span>
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
        <div className="col-md-9 right"></div>
      </div>
    </div>
  );
}

export default CarList;
