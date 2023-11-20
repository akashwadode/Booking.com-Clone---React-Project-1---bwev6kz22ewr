import React, { useContext } from "react";
import logo from "./../../images/booking-ar21.svg";
import { Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import AuthProvider from "../../Context/AuthProvider";
import "./../../styles/Navbar/navbar.css";
import Profile from "./Profile";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <div>
          {" "}
          <img
            src={logo}
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div>
          <Profile />
        </div>
      </div>
      <div className="navlink-container">
        <NavLink to="/">Stays</NavLink>
        <NavLink to="/flights">Flights</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
