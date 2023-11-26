import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./Navbar_Compoennts/styles/dateRangeComponent.css";
const DateRangeComponent = () => {
  const [openDate, setOpenDate] = useState(false);
  const [startDateState, setStartDateState] = useState("");
  const [endDateState, setEndDateState] = useState("");
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  useEffect(() => {
    setStartDateState(getFullDate(dateRange[0].startDate));
    setEndDateState(getFullDate(dateRange[0].endDate));
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
    <div id="date-range-main-container">
      <TextField
        id="date-input-box"
        variant="outlined"
        placeholder="Select Dates"
        value={`${startDateState} - ${endDateState}`}
        onClick={() => {
          setOpenDate(!openDate);
        }}
      />
      <div id="date-range-container">
        {openDate && (
          <DateRangePicker
            staticRanges={[]}
            inputRanges={[]}
            showPreview={false}
            showDateDisplay={false}
            minDate={new Date()}
            ranges={dateRange}
            onChange={handleSelect}
          />
        )}
      </div>
    </div>
  );
};

export default DateRangeComponent;
