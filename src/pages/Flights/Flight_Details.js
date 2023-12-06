import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

const Flight_Details = () => {
  const { flightId } = useParams();
  let flightData = {};
  const apiUrl = `https://academics.newtonschool.co/api/v1/bookingportals/flight/${flightId}`;
  const requestOptions = {
    headers: {
      projectId: "bwev6kz22ewr",
      "Content-Type": "application/json",
    },
    body: "",
  };
  const { data, loading, error } = useFetch("get", apiUrl, requestOptions);

  if (loading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>Error : {error.message}</p>;
  }
  flightData = data.data;
  return (
    <div className="flight-details-container">
      {console.log(flightData)}
      <main>
        <section>
          <h3>Your flight to {flightData.destination}</h3>
          <p>
            {flightData.stops == 0 ? "Direct" : `${flightData.stops} stop`}{" "}
            &middot; {flightData.duration}h 00m
          </p>
        </section>

        <section className="flight-details-section section-middle">
          <div>
            <div>
              <p>Depature - {flightData.departureTime}</p>
              <h5>Source - {flightData.source}</h5>
            </div>
            <div>
              <p>Arrival - {flightData.arrivalTime}</p>
              <h5>Destination - {flightData.destination}</h5>
            </div>
          </div>

          <aside>
            <h5>Flight-ID : {flightData.flightID}</h5>
            <p>Avilable seats : {flightData.availableSeats}</p>
            <p>Flight Time : {flightData.duration}h 00m</p>
          </aside>
        </section>
        <section className="flight-details-section">
          {" "}
          <h2>INR {flightData.ticketPrice}.00 /-</h2>
          <button>Pay</button>
        </section>
      </main>
    </div>
  );
};

export default Flight_Details;
