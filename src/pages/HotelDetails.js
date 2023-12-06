import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./styles/hotelDetails.css";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ImageGallery from "../components/HotelDetailComponents/ImageGallery";
import PlaceIcon from "@mui/icons-material/Place";
import RatingStar from "../components/HotelDetailComponents/RatingStar";
import Facilities from "../components/HotelDetailComponents/Facilities";
import RoomTable from "../components/HotelDetailComponents/RoomTable";
import HouseRules from "../components/HotelDetailComponents/HouseRules";

const HotelDetails = () => {
  const roomsTableRef = useRef(null);
  const navigate = useNavigate();
  const { hotelId } = useParams();
  let [hotelData, setHotelData] = useState(null);
  const [imageData, setImageData] = useState(null);
  const url = `https://academics.newtonschool.co/api/v1/bookingportals/hotel/${hotelId}`;

  useEffect(() => {
    fetchHotelDetails();
  }, []);
  useEffect(() => {
    if (hotelData) {
      setImageData(hotelData.images);
    }
  }, [hotelData]);

  function fetchHotelDetails() {
    fetch(url, {
      method: "GET",
      headers: {
        projectId: "bwev6kz22ewr",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setHotelData(data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <>
      <div>
        {hotelData && (
          <div className="hotel-details-container">
            <div id="hotel-details-header">
              <div id="hotel-header-left">
                <div id="hotel-rating">
                  <RatingStar star={hotelData.rating} />
                </div>
                <h2 id="hotel-name">{hotelData.name}</h2>

                <div id="hotel-location">
                  <PlaceIcon sx={{fontSize:"16px"}}/> {hotelData.location}
                </div>
              </div>

              <div className="hotel-header-right">
                <div id="other-icons-div">
                  <FavoriteBorderIcon />
                  <ShareIcon />
                </div>
                <div id="avail-btn-div">
                  <Button
                    size="small"
                    variant="contained"
                    className="availBtn"
                    onClick={() => {
                      roomsTableRef.current?.scrollIntoView({behavior : 'smooth'});
                    }}
                  >
                    See avaibility &nbsp;
                    <ArrowForwardIcon fontSize="small" />
                  </Button>
                </div>
              </div>
            </div>
            <div id="hotel-image-main-conatiner">
              <ImageGallery imageData={imageData} />
            </div>
            <div className="facilities-container">
              <h3>Most popular facilities</h3>
              <Facilities amenities={hotelData.amenities} />
            </div>
            <div id="hotel-room-table" ref={roomsTableRef}>
              <h3>Rooms Availibility</h3>
              <RoomTable rooms={hotelData.rooms} />
            </div>
            <div>
            <h3>House Rules</h3>
            <HouseRules hotelData={hotelData} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HotelDetails;
