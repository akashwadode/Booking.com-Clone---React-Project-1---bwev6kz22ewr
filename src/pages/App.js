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
import { useEffect, useState } from "react";
import MyContext from "../components/MyContext";
import Flights from "./Flights";
import HotelDetails from "./HotelDetails";
import Navbar from "../components/Navbar";

function App() {
  const [user,setUser] = useState("");
  let loggedInState;
  const userName = sessionStorage.getItem('userName');
  if(userName){
    console.log("user is ",userName);
    loggedInState=true;
  }else{
    console.log("user not present");
  }

  return (
    <MyContext.Provider value={{ user, setUser,loggedInState }}>
      <Routes>
        <Route path="/" element={<Stays />} />
        <Route path="/hotel/:hotelId" element={<HotelDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="*" element={<p>Page does not exists.</p>} />
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
