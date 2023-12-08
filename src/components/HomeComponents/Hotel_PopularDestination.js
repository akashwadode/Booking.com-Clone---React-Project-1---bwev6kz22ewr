import React from "react";
import "./Styles/PopularDestination.css";
import { useNavigate } from "react-router-dom";
const Hotel_PopularDestination= () => {
  const navigate = useNavigate();
  const handleDestinationClick = (e) => {
    const tempDestination=e.currentTarget.getAttribute("destinationName");
    navigate(`/hotels/${tempDestination}`);
  };
  return (
    <div className="popular-destination-container">
      <h2 className="destination-heading">Popular Destinations</h2>
      <div className="destination-row-container">
        <div className="row row-1">
          <div
            className="destination-image-box"
            destinationName={"mumbai"}
            onClick={handleDestinationClick}
          >
            <h3 className="destination-name">Mumbai</h3>
            <img src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
          <div
            className="destination-image-box"
            destinationName={"bangalore"}
            onClick={handleDestinationClick}
          >
            <h3 className="destination-name">Bangalore</h3>
            <img
              src="https://images.unsplash.com/photo-1581533961790-5ab6ecdf8254?q=80&w=1191&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="detination-image"
            />
          </div>
          <div
            className="destination-image-box"
            destinationName={"chennai"}
            onClick={handleDestinationClick}
          >
            <h3 className="destination-name">Chennai</h3>
            <img
              src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="detination-image"
            />
          </div>
        </div>
        <div className="row row-2">
          <div
            className="destination-image-box"
            destinationName={"agra"}
            onClick={handleDestinationClick}
          >
            <h3 className="destination-name">Agra</h3>
            <img src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
          <div
            className="destination-image-box"
            destinationName={"jaipur"}
            onClick={handleDestinationClick}
          >
            <h3 className="destination-name">Jaipur</h3>
            <img
              src="https://images.unsplash.com/photo-1590517862150-8203e97e463f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="detination-image"
            />
          </div>
          <div
            className="destination-image-box"
            destinationName={"lucknow"}
            onClick={handleDestinationClick}
          >
            <h3 className="destination-name">Lucknow</h3>
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

export default Hotel_PopularDestination;
