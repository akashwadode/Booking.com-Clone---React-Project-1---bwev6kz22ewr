// DateRangePicker.js
import React, { useState } from "react";
import DatePicker from "react-date-picker";

const DateRangePicker = ({ onSelect }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSelect = () => {
    onSelect({ startDate, endDate });
  };

  return (
    <div>
      <div>
        <label>From Date:</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <div>
        <label>To Date:</label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
        />
      </div>
      <button onClick={handleSelect}>Select Range</button>
    </div>
  );
};

export default DateRangePicker;
