import React, { useState } from "react";
import "./Flight_Style.css";

import { useNavigate } from "react-router-dom";
import Flight_PopularDestination from "../../components/Flight_Components/Flight_PopularDestination";
import Search_Bar_Flight from "./Flight_Components/Search_Bar_Flight";
import { getToday } from "../../Utils/GetToday";
import Footer from "../Footer";
const Flight_Home = () => {
  return (
    <main className="flight-home-container">
      <Search_Bar_Flight source={""} destination={""} date={getToday}/>
      <Flight_PopularDestination />
      <Footer />
    </main>
  );
};

export default Flight_Home;
