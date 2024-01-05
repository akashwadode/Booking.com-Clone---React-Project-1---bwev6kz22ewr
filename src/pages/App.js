"use client";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  redirect,
  useNavigate,
} from "react-router-dom";

import "../styles/App.css";
import Stays from "./Stays";
import Login from "./Login";
import Register from "./Register";
import HotelDetails from "./HotelDetails";
import AuthProvider from "../Context/AuthProvider";
import CheckOut from "./CheckOut";
import Home from "./Home";
import Navbar from "../components/Navbar_Compoennts/Navbar";
import ThanksPage from "./ThanksPage";
import Flight_Home from "./Flights/Flight_Home";
import Flight_Result from "./Flights/Flight_Result";
import Flight_Details from "./Flights/Flight_Details";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/hotels");
    }
  }, [navigate]);
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route
          path="/hotels/:locationParam/:hotelId"
          element={<HotelDetails />}
        />
        <Route path="/hotels/:locationParam" element={<Stays />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/flights/:source/:destination/:date"
          element={<Flight_Result />}
        />
        <Route path="/flights/:flightId" element={<Flight_Details />} />
        <Route path="/flights" element={<Flight_Home />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/booked" element={<ThanksPage />} />
        <Route path="/hotels" element={<Home />} />
        <Route path="*" element={<p>Page does not exist.</p>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
