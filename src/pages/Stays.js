import React, { useEffect, useRef, useState } from "react";
import "../styles/Stays.css";
import CheckIcon from "@mui/icons-material/Check";
import { green } from "@mui/material/colors";
import { Button, TextField } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import RatingStar from "../components/HotelDetailComponents/RatingStar";
import PriceDetails from "../components/HotelDetailComponents/PriceDetails";
import SearchFilter from "../components/SearchFilter";

const Stays = () => {
  const { location } = useParams();
  console.log(location);
  const navigate = useNavigate();
  const [searchLocation, setSearchLocation] = useState("");
 
  const ulrLocation = useLocation();
  const queryParams = new URLSearchParams(ulrLocation.search);
  const getDate= queryParams.get("date");
  const [filterDate,setFilterDate] = useState(getDate)

  useEffect(() => {
    setSearchLocation(location);
  }, [location]);

  const [hotelData, setHotelData] = useState([]);
  const updateSearchLocation = (location) => {
    setSearchLocation(location);
    navigate(`/hotels/${location}`);
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
        setHotelData(data.data.hotels);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  useEffect(() => {
    if (searchLocation) {
      fetchData(
        `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${searchLocation}"}`
      );
    } else {
      console.log("location not set");
    }
  }, [searchLocation]);

  function hotelCardClickHandle(e) {
    const hotelId = e.currentTarget.id;
    navigate(`/hotels/${searchLocation}/${hotelId}`);
  }
  const RenderHotelCard = () => {
    return (
      <div>
        <h3>{hotelData.length} results for "{searchLocation}"</h3>
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
                    <h3>{item.name}</h3>
                    <p className="hotel-location">{item.location}</p>
                  </div>
                  <div className="hotel-detail-header-right">
                    <RatingStar star={item.rating} />
                  </div>
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
                    <div>
                      <PriceDetails costDetails={item.rooms[0].costDetails} />
                    </div>
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
    <>
      <div className="stays-main-container">
        <div className="hotel-container">
          <div className="filter-container">
            <SearchFilter
              initLocation={location}
              UpdateSearchLocation={updateSearchLocation}
              date={filterDate,setFilterDate}
            />
          </div>
          <div className="hotel-data">
            <RenderHotelCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Stays;
