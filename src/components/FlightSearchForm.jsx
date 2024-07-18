import React, { useState } from "react";
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
    // <div className="flex justify-center items-center bg-transparent">
    // <div className="m-1 p-4 h-60 w-auto border border-gray-300 rounded-lg shadow-lg bg-transparent relative">
    // <div className="z-10 mx-6 justify-center items-top bg-transparent">
    // {/* <div className="my-20 p-4 h-60 w-auto justify-center border border-gray-300 rounded-lg shadow-lg bg-white "> */}
    <div className=" w-8/12 z-10 ml-60 justify-center text-center bg-white p-4">
      {/* <TripType /> */}{" "}
      <TripType tripType={tripType} setTripType={setTripType} />
      <div className="flex">
        <div className=" flex flex-row ">
          <Airport />
          {/* <SelectDate /> */}{" "}
          <SelectDate tripType={tripType} setTripType={setTripType} />
          <TravellerBooking />
        </div>
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
