import React, { useState } from "react";

const FareType = () => {
  const [selectedFare, setSelectedFare] = useState("Regular Fares");
  const [hoveredFare, setHoveredFare] = useState("");

  const handleMouseEnter = (fare) => {
    setHoveredFare(fare);
  };

  const handleMouseLeave = () => {
    setHoveredFare("");
  };

  return (
    <div className="mb-1 relative">
      <div className="flex items-center space-x-1">
        <label className="font-semibold text-gray-700">Fare Type:</label>
        {["Regular Fares", "Umrah Fares", "Student Fares", "Seaman Fares"].map(
          (fare) => (
            <label
              key={fare}
              className={`rounded-sm cursor-pointer flex items-center space-x-1 relative
            ${
              selectedFare === fare
                ? "bg-blue-100 text-blue-600 border-blue-600"
                : "bg-blue-50 text-gray-700 border-gray-300"
            }
          `}
              onMouseEnter={() => handleMouseEnter(fare)}
              onMouseLeave={handleMouseLeave}
            >
              <input
                type="radio"
                name="fareType"
                value={fare}
                checked={selectedFare === fare}
                onChange={() => setSelectedFare(fare)}
                className="hidden"
              />
              <span className="w-3 h-3 border border-gray-300 rounded-full flex items-center justify-center">
                {selectedFare === fare && (
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                )}
              </span>
              <span className="tracking-wide text-sm p-[8px]">{fare}</span>
              {fare === "Umrah Fares" && hoveredFare === "Umrah Fares" && (
                <div className="absolute top-full mt-1 left-0 p-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                  <div className="text-gray-700 text-xs pb-1 font-semibold">
                    Umrah Fares
                  </div>
                  <div className="text-gray-600 text-xs">
                    This fare is valid for Umrah travelers who possess a valid
                    Umrah Visa and are not traveling during the restricted
                    periods set by the Kingdom of Saudi Arabia. If a traveler
                    does not meet these conditions, the airline will deny
                    boarding.
                  </div>
                </div>
              )}
              {fare === "Student Fares" && hoveredFare === "Student Fares" && (
                <div className="absolute top-full mt-1 left-0 p-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                  <div className="text-gray-700 text-xs pb-1 font-semibold">
                    Student Fares
                  </div>
                  <div className="text-gray-600 text-xs">
                    Only students above 12 years of age are eligible for special
                    fares and/or additional baggage allowances. Carrying valid
                    student ID cards and student visas (where applicable) is
                    mandatory, else the passenger may be denied boarding or
                    asked to pay for extra baggage.
                  </div>
                </div>
              )}
              {fare === "Seaman Fares" && hoveredFare === "Seaman Fares" && (
                <div className="absolute top-full mt-1 left-0 p-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                  <div className="text-gray-700 text-xs pb-1 font-semibold">
                    Seaman Fares
                  </div>
                  <div className="text-gray-600 text-xs">
                    Individuals employed aboard vessels such as tankers, cruise
                    ships and in onshore or offshore oil or energy production
                    zones fall under the category of seafarers. These can
                    include administrators, engineers, captains, technicians,
                    workers, or support staff certified by authorized
                    organizations as licensed personnel. It is crucial for them
                    to carry a valid identification and letters, as failure to
                    do so could result in denial of boarding.
                  </div>
                </div>
              )}
            </label>
          )
        )}
      </div>
    </div>
  );
};

export default FareType;
