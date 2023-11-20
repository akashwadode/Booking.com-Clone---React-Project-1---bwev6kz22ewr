import React, { useContext} from "react";
import logo from "../images/booking-ar21.svg";
import { Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import MyContext from "./MyContext";
import "./../styles/navbar.css";
import NavProfileMenu from "./NavProfileMenu";
const Navbar = () => {
  const navigate = useNavigate();
  const { user,loggedInState } = useContext(MyContext);
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
          {!loggedInState ? (
            <Button
              onClick={() => {
                navigate("/login");
              }}
              variant="outlined"
            >
              Sign In
            </Button>
          ) : (
            <NavProfileMenu />
          )}
        </div>
      </div>
      <div className="navlink-container">
        <NavLink to='/'>Stays</NavLink>
        <NavLink to='/flights'>Flights</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
