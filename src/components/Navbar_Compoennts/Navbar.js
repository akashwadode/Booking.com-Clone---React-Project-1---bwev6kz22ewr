import { NavLink, useNavigate } from "react-router-dom";
import "./Styles/navbar.css";
import Profile from "./Profile";
import HotelIcon from "@mui/icons-material/Hotel";
import FlightIcon from '@mui/icons-material/Flight';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
const Navbar = () => {
  return (
    <div className="navbar-main-container">
      <div className="navbar-continer">
        <div className="navbar-header">
          <div className="logo-container">
            {" "}
            <h2>Booking.com</h2>
          </div>
          <div>
            <Profile />
          </div>
        </div>
        <div className="navlink-container">
          <NavLink to="/">
            <div>
              <HotelIcon />
            </div>
            <div>Stays</div>
          </NavLink>
          <NavLink to="/flights">
            <div>
              <FlightTakeoffIcon />
            </div>
            <div>Flights</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
