import React, { useEffect, useRef, useState } from "react";
import DateRangeComponent from "../DateRangeComponent";
import { Button, TextField } from "@mui/material";
import "./Styles/HomeSearchBar.css";
import { useNavigate } from "react-router-dom";
const HomeSearchBar = () => {
  const navigate = useNavigate();
  const [searchLocation, setSearchLocation] = useState("");
  
  const [receivedDate, setReceivedDate] = useState("");
  const [openDate, setOpenDate] = useState(false);
 
  const handleLocationInput = (input)=>{
    setSearchLocation(input.target.value);
  } 
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/hotels/${searchLocation}`);
    setSearchLocation("");
  };
  return (
    <div id="search-container">
      {" "}
      <form id="search-form" onSubmit={handleSearchSubmit}>
        <div>
          <TextField
            placeholder="Where are you going?"
            variant="outlined"
            type="text"
            name="location"
            value={searchLocation}
            onChange={handleLocationInput}
            required
          />
        </div>
        <div id="date-input-container">
          <TextField
            placeholder="Today"
            variant="outlined"
            type="text"
            name="date-input"
            onClick={() => {
              setOpenDate(!openDate);
            }}
            value={receivedDate}
          />
          {openDate && (
            <div id="date-input-absolute">
              <DateRangeComponent
                sendDataToParent={(date) => {
                  setReceivedDate(date);
                }}
              />
            </div>
          )}
        </div>
        <div id="search-button-container">
          <Button variant="contained" type="submit" id="search-button">
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

export default HomeSearchBar;
