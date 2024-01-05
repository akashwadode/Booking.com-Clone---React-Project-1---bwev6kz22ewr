import React, { useEffect, useRef, useState } from "react";
import "../styles/Stays.css";
import CheckIcon from "@mui/icons-material/Check";
import { green } from "@mui/material/colors";
import { Button, TextField } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import RatingStar from "../components/HotelDetailComponents/RatingStar";
import PriceDetails from "../components/HotelDetailComponents/PriceDetails";
import SearchFilter from "../components/SearchFilter";
import useFetch from "../Hooks/useFetch";

const Stays = () => {
  const { locationParam } = useParams();
  const navigate = useNavigate();
  
// to get url params
  const urlLocation = useLocation();
  const queryParams = new URLSearchParams(urlLocation.search);
  const startDate = queryParams.get("startDate");
  const endDate = queryParams.get("endDate");
  const [searchLocation, setSearchLocation] = useState(locationParam);

  const [hotelData, setHotelData] = useState([]);
  

  const requestOptions = {
    headers: {
      projectId: "bwev6kz22ewr",
    },
  };
  const url = `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${searchLocation}"}`;

  const { data, loading, error } = useFetch("get", url, requestOptions);

  useEffect(() => {
    if (data) {
      console.log(data.data.hotels);
      setHotelData(data.data.hotels);
    }
  }, [data]);

  function hotelCardClickHandle(e) {
    const hotelId = e.currentTarget.id;
    // navigate(`/hotels/${searchLocation}/hotelId=${hotelId}?startDate=${startDate}&endDate=${endDate}`);
    navigate(`/hotels/${searchLocation}/${hotelId}?startDate=${startDate}&endDate=${endDate}`);
  }
  const RenderHotelCard = () => {
    return (
      <div>
        <h3>
          {hotelData.length} results for "{searchLocation}"
        </h3>
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

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Some error occur</p>;

  return (
    <>
      <div className="stays-main-container">
        <div className="hotel-container">
          <div className="filter-container">
            <SearchFilter
              initLocation={searchLocation}
              startDate={startDate}
              endDate={endDate}
              setSearchLocation={setSearchLocation}
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
