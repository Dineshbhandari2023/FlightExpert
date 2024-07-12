import React, { useState } from "react";

const TripType = () => {
  const [tripType, setTripType] = useState("roundTrip");
  return (
    <div className="flex flex-initial text-sm ">
      <label className="mr-2">
        <input
          type="radio"
          name="triptype"
          value="oneWay"
          checked={tripType === "oneWay"}
          onChange={() => setTripType("oneWay")}
          className="mr-2 size-3"
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
          className="mr-2 size-3"
        />
        Round Trip
      </label>
    </div>
  );
};

export default TripType;
