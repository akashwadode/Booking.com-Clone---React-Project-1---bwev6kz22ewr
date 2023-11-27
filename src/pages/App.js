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
import Flights from "./Flights";
import HotelDetails from "./HotelDetails";
import AuthProvider from "../Context/AuthProvider";
import CheckOut from "./CheckOut";
import Home from "./Home";
function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/hotels/:location/:hotelId" element={<HotelDetails />} />
        <Route path="/hotels/:location" element={<Stays />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<p>Page does not exist.</p>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
