import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import "./Styles/HomeSearchBar.css";
import { useNavigate } from "react-router-dom";
import CountOption from "./SearchBarComponents/CountOption";
const HomeSearchBar = () => {
  const navigate = useNavigate();
  const [searchLocation, setSearchLocation] = useState("");


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

 
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const handleDateChange = (e, type) => {
    setDateRange({
      ...dateRange,
      [type]: new Date(e.target.value),
    });
  };
  
  // const handleSearchSubmit = (e) => {
  //   e.preventDefault();
  //   if (startDate && endDate) {
  //     navigate(
  //       `/hotels/${searchLocation}?startDate=${
  //         startDate.toISOString().split("T")[0]
  //       }&endDate=${endDate.toISOString().split("T")[0]}`
  //     );
  //   } else {
  //     window.alert("Please enter dates");
  //   }
  // }
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (dateRange.startDate && dateRange.endDate && dateRange.startDate <= dateRange.endDate) {
      navigate(
        `/hotels/${searchLocation}?startDate=${dateRange.startDate.toISOString().split("T")[0]}&endDate=${dateRange.endDate.toISOString().split("T")[0]}`
      );
    } else {
      window.alert("Please enter valid dates");
    }
  };

  useEffect(()=>{
    setStartDate(new Date());
    setEndDate(new Date());
  },[])

  return (
    <div className="home-search-container">
      <div id="search-container">
        {" "}
        <form id="search-form" onSubmit={handleSearchSubmit}>
          <div className="input-item" id="location-input-container">
            <input
              placeholder="Where are you going?"
              type="text"
              name="location"
              value={searchLocation}
              onChange={handleLocationInput}
              required
            />
          </div>
          <div className="input-item" id="date-input-container">
          <input
              type="date"
              value={dateRange.startDate.toISOString().split("T")[0]}
              onChange={(e) => handleDateChange(e, "startDate")}
              min={new Date().toISOString().split("T")[0]}
              required
            />
            <input
              type="date"
              value={dateRange.endDate.toISOString().split("T")[0]}
              onChange={(e) => handleDateChange(e, "endDate")}
              min={dateRange.startDate.toISOString().split("T")[0]}
              required
            />
          </div>
          <div className="input-item" id="people-count-container">
            <div
              id="count-text-box"
              onClick={() => {
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
