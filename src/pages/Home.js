import React from "react";
import Navbar from "../components/Navbar_Compoennts/Navbar";
import HomeSearchBar from "../components/HomeComponents/HomeSearchBar";
import "./styles/home.css";
import PopularDestination from "../components/HomeComponents/PopularDestination";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleDestinationClick = (e) => {
    const tempDestination = e.currentTarget.getAttribute("destinationName");
    navigate(`/hotels/${tempDestination}`);
  };
  return (
    <>
      <HomeSearchBar />

      <PopularDestination />
    </>
  );
};

export default Home;
