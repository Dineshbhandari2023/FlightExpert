import React, { useState, useEffect } from "react";
import FareType from "./FareType";
import TripType from "./TripType";
import Airport from "./Airport";
import SelectDate from "./SelectDate";
import TravellerBooking from "./TravellerBooking";
import { useNavigate } from "react-router-dom";

function FlightSearchForm() {
  const [tripType, setTripType] = useState("roundTrip");
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/search");
  };

  return (
    <div className="relative z-10 justify-center text-center bg-purple-50 shadow-md p-4 rounded-xl">
      <TripType tripType={tripType} setTripType={setTripType} />
      <div className="flex justify-center text-center md:grid-rows-3">
        <Airport />
        <SelectDate tripType={tripType} setTripType={setTripType} />
        <TravellerBooking />
      </div>
      <FareType />

      <div className="text-center">
        <button
          className="relative mt-2 bg-blue-600 text-white px-6 py-2 rounded-md text-md font-semibold font-sans"
          onClick={handleRedirect}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default FlightSearchForm;
