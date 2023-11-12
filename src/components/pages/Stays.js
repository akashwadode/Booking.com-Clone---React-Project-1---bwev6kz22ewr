import React, { useState } from "react";
import './../../../src/styles/Stays.css'
import CheckIcon from "@mui/icons-material/Check";
import { green } from "@mui/material/colors";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Navbar from "../Navbar";
const Stays = () => {
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

  const RenderHotelCard = () => {
    return (
      <div>
        {hotelData.map((item, index) => {
          return (
            <div className="hotel-card" key={index} id={item._id}>
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
                      {item.name} <span>{item.rating}</span>
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
                    <h3>
                      <span>&#8377; </span>
                      {item.rooms[0].costDetails.baseCost}
                    </h3>
                    <p className="taxesAndCharges">
                      +<span>&#8377; </span>
                      {item.rooms[0].costDetails.taxesAndFees} taxes and charges
                    </p>
                    <Button
                      size="small"
                      variant="contained"
                      className="availBtn"
                    >
                      See avaibility &nbsp;
                      <ArrowForwardIcon fontSize="small" />
                    </Button>
                    {/* <button className="availBtn">See availability &nbsp; <ArrowForwardIcon fontSize="small" /></button> */}
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
    <>
    <Navbar />

      <form onSubmit={searchSubmitHandler}>
        <input
          type="text"
          name="location"
          value={searchLocation}
          onChange={locationChange}
        />
        <input type="date" name="fromDate" />
        <input type="date" name="toDate" />
        <input type="submit" />
      </form>
      <div className="hotel-container">
        <div className="filter-container">hola</div>
        <div className="hotel-data">
          <RenderHotelCard />
        </div>
      </div>
    </>
  );
};

export default Stays;
