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

function App() {
  
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Stays />} />
        <Route path="/hotel/:hotelId" element={<HotelDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="*" element={<p>Page does not exists.</p>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;