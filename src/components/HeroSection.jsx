import React from "react";
import FlightSearchForm from "./FlightSearchForm";
import backgroundImage from "../assets/hero1.png"; // Make sure the path is correct

const Banner = () => {
  return (
    <div>
      <div
        className="relative justify-center text-center h-[484px] bg-center bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="justify-center text-center">
          <div className="flex justify-center">
            <span className="text-6xl mb-6 font-bold text-black justify-center text-center">
              It's more than
              <br /> just a trip
            </span>
          </div>
          <div className="flex justify-center text-center">
            <FlightSearchForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
