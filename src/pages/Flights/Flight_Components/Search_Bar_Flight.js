import React, { useState } from "react";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import { useNavigate } from "react-router-dom";
import { getToday } from "../../../Utils/GetToday";

const Search_Bar_Flight = ({source,destination,date}) => {
  const iconStyle = { fontSize: "28px" };
  const navigate = useNavigate();
  const [sourceState, setSourceState] = useState(source);
  const [destinationState, setDestinationState] = useState(destination);
  const [dateState, setDateState] = useState(date);
  const handleSearch = () => {
    if (sourceState) {
      navigate(`/flights/${sourceState}/${destinationState}/${dateState}`);
    }
  };

  return (
    <div>
      <section className="flight-searchbar">
        <div className="searchbar-source">
          <input
            type="text"
            value={sourceState}
            onChange={(e) => {
              setSourceState(e.target.value.trim().toUpperCase());
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
              setDestinationState(e.target.value.trim().toUpperCase());
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
  );
};

export default Search_Bar_Flight;
