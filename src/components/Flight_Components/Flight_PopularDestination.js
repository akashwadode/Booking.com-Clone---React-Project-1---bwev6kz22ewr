import React from "react";
import { getToday } from "./../../Utils/GetToday";
import { useNavigate } from "react-router-dom";
const Flight_PopularDestination= () => {
  const navigate = useNavigate();
  const handleDestinationClick = (e) => {
    const tempDestination=e.currentTarget.getAttribute("destinationName");
    navigate(`/flights/${tempDestination}/${getToday}`);
  };
  return (
    <div className="flight-popular-destination-container">
      <h2 className="destination-heading">Popular flights near you</h2>
      <div className="destination-row-container">
        <div className="row row-1">
          <div
            className="destination-image-box"
            destinationName={"BOM/AMD"}
            onClick={handleDestinationClick}
          >
            <h3 className="destination-name">Mumbai - Ahmedabad</h3>
            <img src="https://images.unsplash.com/photo-1596201403089-d6cb29543f22?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
          <div
            className="destination-image-box"
            destinationName={"BOM/LKO"}
            onClick={handleDestinationClick}
          >
            <h3 className="destination-name">Mumbai - Lucknow</h3>
            <img
              src="https://images.unsplash.com/photo-1598874399417-de43bd86df02?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="detination-image"
            />
          </div>
          <div
            className="destination-image-box"
            destinationName={"BOM/MAA"}
            onClick={handleDestinationClick}
          >
            <h3 className="destination-name">Mumbai - Chennai</h3>
            <img
              src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="detination-image"
            />
          </div>
        </div>
        <div className="row row-2">
          <div
            className="destination-image-box"
            destinationName={"BOM/BLR"}
            onClick={handleDestinationClick}
          >
            <h3 className="destination-name">Mumbai - Banglore</h3>
            <img src="https://images.unsplash.com/photo-1581533961790-5ab6ecdf8254?q=80&w=1191&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="detination-image" />
          </div>
          <div
            className="destination-image-box"
            destinationName={"BOM/JAI"}
            onClick={handleDestinationClick}
          >
            <h3 className="destination-name">Mumbai - Jaipur</h3>
            <img
              src="https://images.unsplash.com/photo-1590517862150-8203e97e463f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="detination-image"
            />
          </div>
          <div
            className="destination-image-box"
            destinationName={"BOM/HYD"}
            onClick={handleDestinationClick}
          >
            <h3 className="destination-name">Mumbai - Hyderabad</h3>
            <img
              src="https://images.unsplash.com/photo-1598874399417-de43bd86df02?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="detination-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flight_PopularDestination;
