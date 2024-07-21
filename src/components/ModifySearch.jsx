import React, { useState, useEffect } from "react";
import FareType from "./FareType";
import TripType from "./TripType";
import Airport from "./Airport";
import SelectDate from "./SelectDate";
import TravellerBooking from "./TravellerBooking";
import Booker from "../pages/Booker";
import Header from "./Header";
import backgroundImage from "../assets/hero1.png";
import RingLoader from "react-spinners/RingLoader";

function ModifySearch() {
  const [tripType, setTripType] = useState("roundTrip");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <RingLoader
            size={150}
            color={"#301aeb"}
            loading={loading}
            cssOverride={{
              background: "transparent",
              opacity: 2,
            }}
          />
        </div>
      ) : (
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
          <div className="mx-6 justify-center items-center">
            <div className="relative my-20 w-9/12 h-auto m-auto shadow-lg  bg-white">
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
      )}
    </div>
  );
}

export default ModifySearch;
