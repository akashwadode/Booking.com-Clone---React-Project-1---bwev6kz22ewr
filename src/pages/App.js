"use client";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
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
import Flights_Home from "./Flights/Flights_Home";
import Flight_Result from "./Flights/Flight_Result";
import Flight_Details from "./Flights/Flight_Details";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/hotels/:location/:hotelId" element={<HotelDetails />} />
        <Route path="/hotels/:location" element={<Stays />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/flights/:source/:destination/:date" element={<Flight_Result /> } />
        <Route path="/flights/:flightId" element={<Flight_Details /> } />
        <Route path="/flights" element={<Flights_Home />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/booked" element={<ThanksPage />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<p>Page does not exist.</p>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
