import React from "react";
import Icon from "../Icons";

function WeatherCard(props) {
  console.log("CARD", props.weather);
  const current = props.weather.currently;
  const weatherData = {
    city: props.weather.timezone.split("/")[1],
    temp: Math.round(current.temperature, 10),
    icon: current.icon,
    summary:
      current.summary.length > 20
        ? current.summary.substring(0, 20) + "..."
        : current.summary,
  };

  return (
    <div className="weather-card standard-shadow">
      <div>
        <div className="icon-container">
          <span className="icon">
            <Icon name={weatherData.icon} width="50px" />
          </span>
          <span className="icon-label">{weatherData.summary}</span>
        </div>
      </div>
      <div>
        <div className="weather-card__location-tag">
          <p>
            <span>
              <Icon name="location" width="20" />
            </span>
            {weatherData.city}
          </p>
        </div>

        <div className="temperature">
          <p>
            {weatherData.temp}
            <span className="primary-color__text">{"\u00b0"}</span>C
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
