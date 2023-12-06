import React from "react";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PoolIcon from "@mui/icons-material/Pool";
import WineBarIcon from "@mui/icons-material/WineBar";
import WifiIcon from "@mui/icons-material/Wifi";
import { green } from "@mui/material/colors";
import { Spa } from "@mui/icons-material";

const Facilities = ({ amenities }) => {
  const iconStyle = { fontSize: 20, color: green[600] };
  const icons = {
    "Restaurant": <RestaurantIcon sx={iconStyle}/>,
    "Swimming Pool": <PoolIcon sx={iconStyle}/>,
    "Spa" : <Spa sx={iconStyle}/>,
    "Gym" : <FitnessCenterIcon sx={iconStyle}/>,
    "Free WiFi" : <WifiIcon sx={iconStyle}/>,
    "Bar" : <WineBarIcon sx={iconStyle} />
  };
  const RenderFacilities = () => {
    return amenities.map((item) => {
      return <span>{icons[item]} {item}</span>
    });
  };

  return (
    <div className="facilities-item-container">
      <RenderFacilities />
    </div>
  );
};

export default Facilities;
