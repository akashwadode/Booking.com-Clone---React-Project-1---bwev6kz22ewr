import React, { useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./Styles/dateRangeComponent.css";
const DateRangeComponent = ({ sendDataToParent }) => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  useEffect(() => {
    sendDataToParent(
      `${getFullDate(dateRange[0].startDate)} - ${getFullDate(
        dateRange[0].endDate
      )}`
    );
  }, [dateRange]);

  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);
  };
  function getFullDate(object) {
    const date = object.getDate();
    const month = object.getMonth();
    const year = object.getFullYear();
    return `${date}/${month}/${year}`;
  }
  return (
    <div id="date-range-container">
      <DateRangePicker
        portalId="root-portal"
        staticRanges={[]}
        inputRanges={[]}
        showPreview={false}
        showDateDisplay={false}
        minDate={new Date()}
        ranges={dateRange}
        onChange={handleSelect}
        id="date-range-picker"
      />
    </div>
  );
};

export default DateRangeComponent;
