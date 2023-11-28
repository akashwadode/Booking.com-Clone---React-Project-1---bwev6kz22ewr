import logo from "./../../images/booking-ar21.svg";
import { NavLink, useNavigate } from "react-router-dom";
import './Styles/navbar.css'
import Profile from "./Profile";
const Navbar = () => {
  return (
    <div className="navbar-main-container">
      <div className="navbar-continer">
        <div className="logo-container">
          <div>
            {" "}
            <h2>Booking.com</h2>
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
    </div>
  );
};

export default Navbar;
