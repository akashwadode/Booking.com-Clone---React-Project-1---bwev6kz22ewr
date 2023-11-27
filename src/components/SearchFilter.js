import React, { useState } from "react";
import DateRangeComponent from "./DateRangeComponent";
import "./Styles/searchFilterBox.css";
import { useNavigate } from "react-router-dom";
const SearchFilter = ({initLocation, UpdateSearchLocation}) => {
  const [filterLocation, setFilterLocation] = useState(initLocation);
  const [receivedDate, setReceivedDate] = useState("");
  const [openDate, setOpenDate] = useState(false);
  function handleFilterSubmit(e){
    e.preventDefault();
    UpdateSearchLocation(filterLocation);
  }
  return (
    <div id="search-filter-container">
      <h4>Search Filter</h4>
      <form id="filter-form" onSubmit={handleFilterSubmit}>
        <div id="input-location-container">
          <label htmlFor="location">location -</label>
          <input id="location" value={filterLocation} name="location" required onChange={(e)=>{
            setFilterLocation(e.target.value);
          }}/>
        </div>
        <div id="input-date-container">
          <label htmlFor="date">date -</label>
          <input
            type="text"
            id="date"
            name="date"
            placeholder="today"
            value={receivedDate}
            onClick={() => {
              setOpenDate(!openDate);
            }}
          />
          {openDate && (
            <div id="search-filter-calender-absolute">
              <DateRangeComponent
                sendDataToParent={(date) => {
                  setReceivedDate(date);
                }}
              />
            </div>
          )}
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default SearchFilter;
