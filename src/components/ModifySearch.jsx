import React, { useState } from "react";
import FareType from "./FareType";
import TripType from "./TripType";
import Airport from "./Airport";
import SelectDate from "./SelectDate";
import TravellerBooking from "./TravellerBooking";
import Booker from "../pages/Booker";
import Header from "./Header";
import backgroundImage from "../assets/hero1.png";

function ModifySearch() {
  const [tripType, setTripType] = useState("roundTrip");

  return (
    <div
      className="justify-center text-center h-[484px] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Header />
      <div className="flex  justify-center left-1/2">
        <span className="text-6xl mb-6 font-bold text-black justify-center text-center">
          It's more than
          <br /> just a trip
        </span>
      </div>
      <div className="mx-6 justify-center items-center h-screen w-screen">
        {/* <div className="my-20 p-4 h-60 w-auto justify-center border border-gray-300 rounded-lg shadow-lg bg-white "> */}
        <div className="my-20 w-9/12 h-auto m-auto shadow-lg  bg-white">
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
        <Booker />
      </div>
    </div>
  );
}

export default ModifySearch;
