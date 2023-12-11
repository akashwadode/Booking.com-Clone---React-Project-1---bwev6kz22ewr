import React, { useEffect, useRef, useState } from "react";
import DateRangeComponent from "../DateRangeComponent";
import { Button, TextField } from "@mui/material";
import "./Styles/HomeSearchBar.css";
import { useNavigate } from "react-router-dom";
import CountOption from "./SearchBarComponents/CountOption";
const HomeSearchBar = () => {
  const navigate = useNavigate();
  const [searchLocation, setSearchLocation] = useState("");

  const [receivedDate, setReceivedDate] = useState("");

  const [openDate, setOpenDate] = useState(false);
  const [countOptionOpen, setCountOptionOpen] = useState(false);

  const handleLocationInput = (input) => {
    setSearchLocation(input.target.value);
  };

  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const handleAdultIncrement = () => {
    if (adultCount < 4) {
      setAdultCount(adultCount + 1);
    }
  };
  const handleAdultDecrement = () => {
    if (adultCount >= 2) {
      setAdultCount(adultCount - 1);
    }
  };

  const handleChildIncrement = () => {
    if (childCount < 4) {
      setChildCount(childCount + 1);
    }
  };
  const handleChildDecrement = () => {
    if (childCount >= 1) {
      setChildCount(childCount - 1);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/hotels/${searchLocation}?date=${receivedDate}`);
    setSearchLocation("");
  };
  return (
    <div className="home-search-container">
      <div id="search-container">
        {" "}
        <form id="search-form" onSubmit={handleSearchSubmit}>
          <div className="input-item" id="location-input-container">
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
          <div className="input-item" id="date-input-container">
            <TextField
              placeholder="Today"
              variant="outlined"
              type="text"
              name="date-input"
              onClick={() => {
                setCountOptionOpen(false);
                setOpenDate(!openDate);
              }}
              value={receivedDate}
            />
            {openDate && (
              <div className="absolute-container">
                <DateRangeComponent
                  sendDataToParent={(date) => {
                    setReceivedDate(date);
                  }}
                />
              </div>
            )}
          </div>
          <div className="input-item" id="people-count-container">
            <div
              id="count-text-box"
              onClick={() => {
                setOpenDate(false);
                setCountOptionOpen(!countOptionOpen);
              }}
            >
              {adultCount} adult - {childCount} child
            </div>
            {countOptionOpen && (
              <div className="absolute-container">
                <CountOption
                  onAdultIncrement={handleAdultIncrement}
                  onAdultDecrement={handleAdultDecrement}
                  onChildIncrement={handleChildIncrement}
                  onChildDecrement={handleChildDecrement}
                />{" "}
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
    </div>
  );
};

export default HomeSearchBar;
