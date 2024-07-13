import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "../custom-datepicker.css"; // custom styles

const SelectDate = ({ tripType, setTripType }) => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [isDepartureOpen, setIsDepartureOpen] = useState(false);
  const [isReturnOpen, setIsReturnOpen] = useState(false);

  const handleDepartureClick = () => {
    setIsDepartureOpen(!isDepartureOpen);
    setIsReturnOpen(false);
  };

  const handleReturnClick = () => {
    if (tripType === "oneWay") {
      setTripType("roundTrip");
    }
    setIsReturnOpen(!isReturnOpen);
    setIsDepartureOpen(false);
  };

  return (
    <div className="p-4 mb-1 flex flex-row tracking-tighter">
      <div
        className="p-2 border border-gray-300 rounded-l-lg cursor-pointer relative"
        onClick={handleDepartureClick}
      >
        <label className="flex font-medium text-sm text-gray-700 tracking-wide">
          Departure <SlArrowDown className="m-1 size-3 cursor-pointer" />
        </label>
        <div className="pr-1 text-xl text-gray-700 font-bold tracking-wide">
          {dateRange[0].startDate.toDateString()}
        </div>
        {isDepartureOpen && (
          <div className="absolute top-full left-0 z-10">
            <DateRangePicker
              onChange={(item) => {
                setDateRange([item.selection]);
                setIsDepartureOpen(false);
              }}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={dateRange}
              direction="horizontal"
              calendarFocus="forwards"
              rangeColors={["#4A90E2"]}
              className="custom-calendar"
            />
          </div>
        )}
      </div>

      <div
        className={`p-2 border border-gray-300 rounded-r-lg cursor-pointer relative ${
          tripType === "oneWay" ? "pointer-events-none" : ""
        }`}
        onClick={handleReturnClick}
      >
        <label className="flex font-medium text-sm text-gray-700 tracking-wide">
          Return <SlArrowDown className="m-1 size-3 cursor-pointer" />
        </label>
        <div className="pr-1 text-xl text-gray-700 font-bold tracking-wide">
          {tripType === "oneWay"
            ? "Tap to book return ticket"
            : dateRange[0].endDate.toDateString()}
        </div>
        {isReturnOpen && (
          <div className="absolute top-full left-0 z-10">
            <DateRangePicker
              onChange={(item) => {
                setDateRange([item.selection]);
                setIsReturnOpen(false);
              }}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={dateRange}
              direction="horizontal"
              calendarFocus="forwards"
              rangeColors={["#4A90E2"]}
              className="custom-calendar"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectDate;
