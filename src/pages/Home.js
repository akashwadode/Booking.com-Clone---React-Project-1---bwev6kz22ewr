import React from "react";
import HomeSearchBar from "../components/HomeComponents/HomeSearchBar";
import "./styles/home.css";
import { useNavigate } from "react-router-dom";
import Hotel_PopularDestination from "../components/HomeComponents/Hotel_PopularDestination";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <HomeSearchBar />
      <Hotel_PopularDestination />
      <Footer />
    </>
  );
};

export default Home;
