import React from "react";
import WeatherCard from "../components/WeatherCard";

function Home(props) {
  let cards = "";

  if (props.weather) {
    props.weather.map((card) => {
      console.log("LOOP", card);
      return (cards += <WeatherCard />);
    });
  }

  return (
    <div id="home">
      <h1 className="header">Simple Weather</h1>

      <div className="weather-card__list-container">
        {props.weather ? props.weather.map((card, i) => <WeatherCard weather={card} key={i} />) : "LOADING..."}
      </div>
    </div>
  );
}

export default Home;
