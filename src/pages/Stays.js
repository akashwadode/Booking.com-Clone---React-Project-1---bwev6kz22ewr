import React, { useEffect, useRef, useState } from "react";
import "../styles/Stays.css";
import CheckIcon from "@mui/icons-material/Check";
import { green } from "@mui/material/colors";
import { Button, TextField } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Navbar from "../components/Navbar_Compoennts/Navbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import RatingStar from "../components/HotelDetailComponents/RatingStar";
import PriceDetails from "../components/HotelDetailComponents/PriceDetails";
import DateRangeComponent from "../components/DateRangeComponent";
import SearchFilter from "../components/SearchFilter";


const Stays = () => {
  const navigate = useNavigate();
  const [searchLocation, setSearchLocation] = useState("mumbai");
  const [hotelData, setHotelData] = useState([]);

  const locationChange = (e) => {
    setSearchLocation(e.target.value);
  };

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    fetchData(
      `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${searchLocation}"}`
    );
  };

  function fetchData(url) {
    fetch(url, {
      method: "GET",
      headers: {
        projectId: "bwev6kz22ewr",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Some error in response");
        }
        return res.json();
      })
      .then((data) => {
        if (data.message !== "success") {
          throw new Error("Didn't get the data");
        } else {
          console.log("Data fetched successfully");
        }
        // stores hotels data
        setHotelData(data.data.hotels);
        console.log(data.data.hotels);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  useEffect(() => {
    fetchData(
      `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${searchLocation}"}`
    );
  }, []);

  function hotelCardClickHandle(e) {
    const hotelId = e.currentTarget.id;
    navigate(`/hotel/${hotelId}`);
  }
  const RenderHotelCard = () => {
    return (
      <div>
        {hotelData.map((item, index) => {
          return (
            <div
              className="hotel-card"
              key={index}
              id={item._id}
              onClick={hotelCardClickHandle}
            >
              <div className="hotel-image">
                <div>
                  <img src={item.images[0]} alt="hotel image" />
                </div>
              </div>

              <div className="hotel-details">
                {/* header  */}
                <div className="hotel-detail-header">
                  <div className="hotel-detail-header-left">
                    <h3>
                      {item.name}
                      <RatingStar star={item.rating} />
                    </h3>
                    <p className="hotel-location">{item.location}</p>
                  </div>
                  <div className="hotel-detail-header-right"></div>
                </div>

                {/* footer */}
                <div className="hotel-detail-footer">
                  <div className="hotel-detail-footer-left">
                    <h5>{item.rooms[0].bedDetail}</h5>
                    <p>
                      <CheckIcon sx={{ color: green[500], fontSize: 14 }} />
                      {item.rooms[0].cancellationPolicy}
                    </p>
                  </div>
                  <div className="hotel-detail-footer-right">
                    <PriceDetails costDetails={item.rooms[0].costDetails} />
                    <Button
                      size="small"
                      variant="contained"
                      className="availBtn"
                    >
                      See avaibility &nbsp;
                      <ArrowForwardIcon fontSize="small" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div id="stays-main-container">
      <Navbar />
      <form onSubmit={searchSubmitHandler} id="search-container">
        <TextField
          placeholder="Where are you going?"
          variant="outlined"
          type="text"
          name="location"
          value={searchLocation}
          onChange={locationChange}
        />
        <div id="date-input-container">
          <DateRangeComponent />
        </div>
      </form>
      <div className="hotel-container">
        <div className="filter-container">
          <SearchFilter />
        </div>
        <div className="hotel-data">
          <RenderHotelCard />
        </div>
      </div>
    </div>
  );
};

export default Stays;
