import React, { useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import Flight_Card from "../../components/Flight_Components/Flight_Card";
import { useParams } from "react-router-dom";

const Flight_Result = () => {
  const {source, destination,date} = useParams();
  useEffect(()=>{
    console.log(`${source}  ${destination}  ${date}`);
  },[source]);
  const requestOptions = {
    headers: {
      projectId: "bwev6kz22ewr",
      "Content-Type": "application/json",
    },
    body: "",
  };
  const { data, loading, error } = useFetch(
    "get",
    `https://academics.newtonschool.co/api/v1/bookingportals/flight?day=Mon&search={"source":"${source}","destination":"${destination}"}`,
    requestOptions
  );
  if (loading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>Error : {error.message}</p>;
  }

  return (
    <div>
      <h1>Flight Data</h1>
      <main className="flight-main-container">
        <aside className="flight-filter-container"></aside>
        <section className="flight-data-container">
          <h3>{data.results} results found</h3>
          <Flight_Card flights={data.data.flights} />
        </section>
      </main>
    </div>
  );
};

export default Flight_Result;
