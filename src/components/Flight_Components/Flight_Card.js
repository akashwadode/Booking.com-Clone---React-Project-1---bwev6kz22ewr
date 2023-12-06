import { Flight } from "@mui/icons-material";
import AirlinesIcon from "@mui/icons-material/Airlines";
import React from "react";
import LuggageIcon from "@mui/icons-material/LuggageOutlined";
import BackpackIcon from "@mui/icons-material/BackpackOutlined";
import AuthNavigator from "../../Auth/AuthNavigator";
import { useNavigate } from "react-router-dom";
const Flight_Card = ({ flights }) => {
  const navigate = useNavigate();
  const handleViewDetailsBtn = (e) => {
    const flightId = e.currentTarget.id;
    navigate(`/flights/${flightId}`);
  };
  return flights.map((item, index) => {
    return (
      <div className="flight-card" key={index}>
        <div className="flight-card-left">
          <div className="flight-data-flightId">
            <AirlinesIcon />
            <span>{item.flightID}</span>
          </div>
          <div className="flight-data-path">
            <div className="flight-data-path-left">
              <b>{item.departureTime}</b>
              <span>{item.source}</span>
            </div>
            <div className="flight-data-path-middle">
              <div>{item.duration}h 00m</div>
              <hr></hr>
              <div>{item.stops} stops</div>
            </div>
            <div className="flight-data-path-right">
              <b>{item.arrivalTime}</b>
              <span>{item.destination}</span>
            </div>
          </div>
        </div>
        <div className="flight-card-right">
          <div className="flight-card-right-upper">
            <div>
              <BackpackIcon sx={{ fontSize: "18px" }} />
              <LuggageIcon sx={{ fontSize: "18px" }} />
            </div>
            <p>Included: personal item, checked bag</p>
          </div>
          <div className="flight-card-right-middle">
            <h4>INR {item.ticketPrice}</h4>
            <p>Total price for all travellers</p>
          </div>
          <div className="flight-card-right-bottom">
            <button
              id={item._id}
              onClick={handleViewDetailsBtn}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    );
  });
};

export default Flight_Card;
