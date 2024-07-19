import React, { useState } from "react";

const TripType = ({ tripType, setTripType }) => {
  return (
    <div className="flex text-md text-gray-500 font-semibold ml-4">
      <label className="mr-2">
        <input
          type="radio"
          name="triptype"
          value="oneWay"
          checked={tripType === "oneWay"}
          onChange={() => setTripType("oneWay")}
          className="mr-2 size-4"
        />
        One Way
      </label>
      <label className="mr-2">
        <input
          type="radio"
          name="tripType"
          value="roundTrip"
          checked={tripType === "roundTrip"}
          onChange={() => setTripType("roundTrip")}
          className="mr-2 size-4"
        />
        Round Trip
      </label>
    </div>
  );
};

export default TripType;
