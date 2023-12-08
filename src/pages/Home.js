import React from "react";
import Navbar from "../components/Navbar_Compoennts/Navbar";
import HomeSearchBar from "../components/HomeComponents/HomeSearchBar";
import "./styles/home.css";
import { useNavigate } from "react-router-dom";
import Hotel_PopularDestination from "../components/HomeComponents/Hotel_PopularDestination";
import Footer from "./Footer";

const Home = () => {
  const navigate = useNavigate();
  const handleDestinationClick = (e) => {
    const tempDestination = e.currentTarget.getAttribute("destinationName");
    navigate(`/hotels/${tempDestination}`);
  };
  return (
    <>
      <HomeSearchBar />

      <Hotel_PopularDestination />
      <Footer />
    </>
  );
};

export default Home;
