import React, { useState } from "react";

const FareType = () => {
  const [selectedFare, setSelectedFare] = useState("Regular Fares");
  return (
    <div className="mb-1">
      <div className="flex items-center space-x-1">
        <label className="font-semibold text-gray-700">Fare Type:</label>
        {["Regular Fares", "Umrah Fares", "Student Fares", "Seaman Fares"].map(
          (fare) => (
            <label
              key={fare}
              className={`rounded-sm cursor-pointer flex items-center space-x-1
            ${
              selectedFare === fare
                ? "bg-blue-100 text-blue-600  border-blue-600"
                : "bg-blue-50 text-gray-700 border-gray-300"
            }
          `}
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
            </label>
          )
        )}
      </div>
    </div>
  );
};

export default FareType;
