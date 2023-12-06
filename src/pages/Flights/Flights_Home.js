import React, { useState } from "react";
import "./Flight_Style.css";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useNavigate } from "react-router-dom";
const Flights_Home = () => {
  const iconStyle = { fontSize: "28px" };
  const navigate = useNavigate();
  const [sourceState, setSourceState] = useState("");
  const [destinationState, setDestinationState] = useState("");
  const [dateState, setDateState] = useState(getToday());
  const handleSearch = () => {
    if (sourceState) {
      navigate(`/flights/${sourceState}/${destinationState}/${dateState}`);
    }
  };

  function getToday() {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth()+1;
    let day = today.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  }
  return (
    <main className="flight-home-container">
      <div>
        <section className="flight-searchbar">
          <div className="searchbar-source">
            <input
              type="text"
              value={sourceState}
              onChange={(e) => {
                setSourceState(e.target.value.toUpperCase());
              }}
              placeholder="Where from?"
            />
            <FlightTakeoffIcon sx={iconStyle} />
          </div>
          <div className="searchbar-destination">
            <input
              type="text"
              value={destinationState}
              onChange={(e) => {
                setDestinationState(e.target.value.toUpperCase());
              }}
              placeholder="Where to?"
            />{" "}
            <FlightLandIcon sx={iconStyle} />
          </div>
          <div className="searchbar-date">
            {/* <CalendarMonthIcon sx={iconStyle} /> */}
            <input
              type="date"
              value={dateState}
              onChange={(e) => {
                setDateState(e.target.value);
              }}
              min={getToday()}
            />
          </div>
          <div className="searchbar-search">
            <button onClick={handleSearch}>Search</button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Flights_Home;
