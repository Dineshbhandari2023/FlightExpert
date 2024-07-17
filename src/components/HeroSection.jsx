
import React from 'react';
import FlightSearchForm from './FlightSearchForm';
import backgroundImage from '../assets/hero1.png'; // Make sure the path is correct

const Banner = () => {
  return (
    <div className="relative h-[484px] bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex absolute justify-center top-0 left-1/2 transform -translate-x-1/2">
        <span className="text-6xl font-bold text-black justify-center text-center">
          It's more than
          <br /> just a trip
        </span>
      </div>
      <FlightSearchForm/>
    </div>
  );
};

export default Banner;
