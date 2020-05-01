import React from "react";
import Icon from "../Icons";

function DailyForecastCard(props) {
  const data = props.data;
  const date = new Date(props.data.time * 1000);
  const weatherData = {
    tempHigh: Math.round(data.temperatureMax),
    tempLow: Math.round(data.temperatureMin),
    day: props.days[date.getDay()].substring(0, 3),
    icon: data.icon,
  };
  console.log(props.data);
  return (
    <div className="daily-forecast__container">
      <p className="day">{weatherData.day}</p>
      <div className="daily-forecast__card standard-shadow">
        <div className="icon">
          <Icon name={weatherData.icon} width="40px" />
        </div>
        <div className="daily-forecast__card-content">
          <div>
            <span>Max Temperature</span>
            <p>
              {weatherData.tempHigh}
              <span className="primary-color__text">{"\u00b0"}</span>C
            </p>
          </div>
          <div className="margin-top__05em">
            <span>Min Temperature</span>
            <p>
              {weatherData.tempLow}
              <span className="primary-color__text">{"\u00b0"}</span>C
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyForecastCard;
