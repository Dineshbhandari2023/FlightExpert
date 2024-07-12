import React, { useState, useRef, useEffect } from "react";
import "../traveler-dropdown.css";

const TravellerBooking = () => {
  const [travelClass, setTravelClass] = useState("Economy");
  const [travelers, setTravelers] = useState({
    adults: 1,
    children: 0,
    kids: 0,
    infants: 0,
  });
  const [isTravelerDropdownOpen, setIsTravelerDropdownOpen] = useState(false);
  const travelerDropdownRef = useRef(null);

  const handleTravelerClick = () => {
    setIsTravelerDropdownOpen(!isTravelerDropdownOpen);
  };

  const handleTravelerChange = (type, action) => {
    setTravelers((prev) => ({
      ...prev,
      [type]:
        action === "increment" ? prev[type] + 1 : Math.max(prev[type] - 1, 0),
    }));
  };

  const handleClickOutside = (event) => {
    if (
      travelerDropdownRef.current &&
      !travelerDropdownRef.current.contains(event.target)
    ) {
      setIsTravelerDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const totalTravelers = Object.values(travelers).reduce((a, b) => a + b, 0);

  return (
    <div className="p-4 mb-1 flex flex-row tracking-tighter">
      <div
        className="p-2 border border-gray-300 rounded-lg cursor-pointer relative"
        onClick={handleTravelerClick}
      >
        <label className="flex text-xs font-semibold text-gray-700 tracking-wide">
          Traveler & Booking Class
        </label>
        <div className="pr-1 text-xl text-gray-700 font-bold tracking-wide">
          {totalTravelers} Traveler{totalTravelers > 1 && "s"}
        </div>
        <div className="text-xs text-gray-500 tracking-wide">{travelClass}</div>
        {isTravelerDropdownOpen && (
          <div
            className=" m-1.5 absolute top-full left-0 z-10 bg-white border border-gray-300 rounded-lg shadow-2xl p-1 traveler-dropdown"
            ref={travelerDropdownRef}
          >
            <div className="mb-1">
              <div className="text-blue-500 text-sm font-semibold">
                Travelers
              </div>
              {["adults", "children", "kids", "infants"].map((type) => (
                <div
                  className="flex justify-between items-center text-sm font-semibold text-blue-300 my-2"
                  key={type}
                >
                  <div className="flex flex-col">
                    <span className="font-semibold">
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </span>
                    <span className="text-xs text-gray-500">
                      {type === "adults"
                        ? "12 years and above"
                        : type === "children"
                        ? "5 years - under 12 years"
                        : type === "kids"
                        ? "2 years - under 5 years"
                        : "below 2 years"}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTravelerChange(type, "decrement");
                      }}
                    >
                      -
                    </button>
                    <span className="mx-2">{travelers[type]}</span>
                    <button
                      className="bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTravelerChange(type, "increment");
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="text-blue-500 text-sm font-semibold mb-1 p-1">
                Booking Class
              </div>
              <div className="grid grid-cols-2">
                {["Economy", "Premium Economy", "Business", "First Class"].map(
                  (cls) => (
                    <div key={cls} className="flex items-center text-xs my-1">
                      <input
                        className="h-3 w-3"
                        type="radio"
                        id={cls}
                        name="travelClass"
                        value={cls}
                        checked={travelClass === cls}
                        onChange={() => setTravelClass(cls)}
                      />
                      <label htmlFor={cls} className="ml-2">
                        {cls}
                      </label>
                    </div>
                  )
                )}
              </div>
            </div>
            <button
              className="ml-[100px] text-center text-sm font-bold tracking-wide border border-blue-700 bg-white-500 text-blue-700 p-1 rounded-lg"
              onClick={(e) => {
                e.stopPropagation();
                setIsTravelerDropdownOpen(false);
              }}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TravellerBooking;
