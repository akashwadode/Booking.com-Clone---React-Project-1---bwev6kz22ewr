import React, { createContext, useContext, useState } from "react";
const DateRangeContext = createContext();

export const useDateRangeContext = ()=>{
  return useContext(DateRangeContext);
}

const DateRangeProvider = ({ children }) => {
  const [selectedDateRange, setSelectedDateRange] = useState(null);
  return (
    <DateRangeContext.Provider
      value={{ selectedDateRange, setSelectedDateRange }}
    >
      {children}
    </DateRangeContext.Provider>
  );
};

export default DateRangeProvider;
