import React, { useState, useEffect, useRef } from "react";
import { TbArrowsRightLeft } from "react-icons/tb";

const airportsData = [
  {
    city: "Dhaka",
    country: "Bangladesh",
    name: "Hazrat Shahjalal International Airport",
    code: "DAC",
  },
  {
    city: "Chittagong",
    country: "Bangladesh",
    name: "Shah Amanat International Airport",
    code: "CGP",
  },
  {
    city: "Saidpur",
    country: "Bangladesh",
    name: "Saidpur Airport",
    code: "SPD",
  },
  {
    city: "Cox's Bazar",
    country: "Bangladesh",
    name: "Cox's Bazar Airport",
    code: "CXB",
  },
  {
    city: "Barisal",
    country: "Bangladesh",
    name: "Barisal Airport",
    code: "BZL",
  },
  {
    city: "Jessore",
    country: "Bangladesh",
    name: "Jessore Airport",
    code: "JSR",
  },
  {
    city: "Rajshahi",
    country: "Bangladesh",
    name: "Shah Makhdum Airport",
    code: "RJH",
  },
  {
    city: "Sylhet",
    country: "Bangladesh",
    name: "Osmani International Airport",
    code: "ZYL",
  },
  {
    city: "Khulna",
    country: "Bangladesh",
    name: "Bagerhat Airport",
    code: "KHL",
  },
  {
    city: "Rangpur",
    country: "Bangladesh",
    name: "Mahipur Airport",
    code: "RGP",
  },
];

const Airport = () => {
  const [from, setFrom] = useState({
    city: "Dhaka",
    country: "Bangladesh",
    name: "Hazrat Shahjalal International Airport",
    code: "DAC",
  });
  const [to, setTo] = useState({
    city: "Cox's Bazar",
    country: "Bangladesh",
    name: "Cox's Bazar Airport",
    code: "CXB",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const [selectedField, setSelectedField] = useState("");

  const dropdownRef = useRef(null);

  const handleFieldClick = (field) => {
    setSelectedField(field);
    setIsDropdownOpen((prev) =>
      prev && selectedField === field ? false : true
    );
    setFilter("");
  };

  const handleSelect = (field, airport) => {
    if (field === "from") {
      setFrom(airport);
    } else {
      setTo(airport);
    }
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredAirports = airportsData.filter(
    (airport) =>
      airport.city.toLowerCase().includes(filter.toLowerCase()) ||
      airport.name.toLowerCase().includes(filter.toLowerCase()) ||
      airport.code.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="p-4 mb-1 flex flex-row tracking-tighter relative">
      <div
        className="p-2 border border-gray-300 rounded-lg cursor-pointer"
        onClick={() => handleFieldClick("from")}
      >
        <label className="flex font-medium text-sm text-gray-700 tracking-wide">
          From
        </label>
        <div className="pr-1 text-xl text-gray-700 font-bold tracking-wide">
          {from.city}
        </div>
        <div className="text-xs text-gray-500 tracking-wide">{from.name}</div>
      </div>
      <TbArrowsRightLeft className="absolute py-1 ml-[213px] my-8 size-6 z-10 text-blue-600 border border-gray-500 rounded-full shadow-lg bg-white" />
      <div
        className="p-1 border border-gray-300 rounded-lg cursor-pointer"
        onClick={() => handleFieldClick("to")}
      >
        <div className="p-2">
          <label className="flex font-medium text-sm text-gray-700 tracking-wide">
            To
          </label>
          <div className="pr-1 text-xl text-gray-700 font-bold tracking-wide">
            {to.city}
          </div>
          <div className="text-xs text-gray-500 tracking-wide">{to.name}</div>
        </div>
      </div>

      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className={`absolute w-64 bg-gray-100 border border-gray-300 rounded-lg shadow-2xl z-10 ${
            selectedField === "from" ? "top-full left-0" : "top-full right-0"
          }`}
        >
          <div className="mb-4">
            <input
              type="text"
              className="w-full p-2 border border-white text-[12px] rounded-t-lg"
              placeholder="Type for the airport name or airport code"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          <div className="p-2 max-h-60 overflow-y-auto">
            <ul>
              {filteredAirports.map((airport) => (
                <li
                  key={airport.code}
                  className="cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSelect(selectedField, airport)}
                >
                  <div className="flex-cols-2">
                    <div className="font-semibold text-xs tracking-wide">
                      {airport.city}, {airport.country}
                    </div>
                    <div className="">
                      <div className="text-[10px] text-gray-500 tracking-wide">
                        {airport.name}
                      </div>
                      <div className="text-[10px] font-semibold text-gray-500 tracking-wider">
                        {airport.code}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Airport;
