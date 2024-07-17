import React, { useState } from "react";
import FareType from "./FareType";
import TripType from "./TripType";
import Airport from "./Airport";
import SelectDate from "./SelectDate";
import TravellerBooking from "./TravellerBooking";

function FlightSearchForm() {
  const [tripType, setTripType] = useState("roundTrip");

  return (
    <div className="m-4 flex justify-center items-center h-screen w-screen">
      <div className="m-1 p-4 h-60 w-auto border border-gray-300 rounded-lg shadow-lg bg-white relative">
        {/* <TripType /> */}
        <TripType tripType={tripType} setTripType={setTripType} />
        <div className="flex">
          <div className=" flex flex-row ">
            <Airport />
            {/* <SelectDate /> */}
            <SelectDate tripType={tripType} setTripType={setTripType} />
            <TravellerBooking />
          </div>
        </div>
        <FareType />

        <div className="text-center">
          <button className="relative mb-10 bg-blue-600 text-white px-6 py-3 rounded-md text-md font-semibold font-sans">
            Modify Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default FlightSearchForm;
