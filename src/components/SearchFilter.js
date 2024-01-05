import React, { useState } from "react";
import DateRangeComponent from "./DateRangeComponent";
import "./Styles/searchFilterBox.css";
import { useNavigate } from "react-router-dom";
const SearchFilter = ({
  initLocation,
  startDate,
  endDate,
  setSearchLocation,
}) => {
  const navigate = useNavigate();
  const [filterLocation, setFilterLocation] = useState(initLocation);
  const [sDate, setSDate] = useState(startDate);
  const [eDate, setEDate] = useState(endDate);

  function handleFilterSubmit(e) {
    e.preventDefault();
    setSearchLocation(filterLocation);
    navigate(`/hotels/${filterLocation}?startDate=${sDate}&endDate=${eDate}`);
  }
  return (
    <div id="search-filter-container">
      <h4>Search Filter</h4>
      <form id="filter-form" onSubmit={handleFilterSubmit}>
        <div id="input-location-container" className="search-filter-child">
          <label htmlFor="location">location -</label>
          <input
            id="location"
            value={filterLocation}
            name="location"
            required
            onChange={(e) => {
              setFilterLocation(e.target.value);
            }}
          />
        </div>
        <div id="input-date-container" className="search-filter-child">
          <div>
            <label htmlFor="startDate">from</label>
            <input
              type="date"
              value={sDate}
              name="startDate"
              onChange={(e) => {
                setSDate(e.target.value);
              }}
              min={new Date().toISOString().split("T")[0]}
              required
            />
          </div>

          <div>
            <label htmlFor="endDate">to</label>
            <input
              type="date"
              value={eDate}
              name="startDate"
              onChange={(e) => {
                setEDate(e.target.value);
              }}
              min={sDate ? sDate : ""}
              required
            />
          </div>
        </div>
        <div id="submit-btn">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default SearchFilter;
