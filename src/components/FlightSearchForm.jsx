import React, { useState } from "react";
import FareType from "./FareType";
import TripType from "./TripType";
import Airport from "./Airport";
import SelectDate from "./SelectDate";
import TravellerBooking from "./TravellerBooking";
import Booker from "../pages/Booker"

function FlightSearchForm() {
  const [tripType, setTripType] = useState("roundTrip");

  return (

//     features/LandingPage
    <div className="m-4 flex justify-center items-center h-screen w-screen">
      <div className="m-1 p-4 h-60 w-auto border border-gray-300 rounded-lg shadow-lg bg-white relative">

    
    <div className="mx-6 justify-center items-center h-screen w-screen">
      {/* <div className="my-20 p-4 h-60 w-auto justify-center border border-gray-300 rounded-lg shadow-lg bg-white "> */}
      <div className='my-20 w-10/12 h-auto m-auto shadow-lg '>

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
          <button className="relative mt-2 bg-blue-600 text-white px-6 py-2 rounded-md text-md font-semibold font-sans">
            Modify Search
          </button>
        </div>
      </div>
      <Booker/>
    </div>
  );
}

export default FlightSearchForm;
