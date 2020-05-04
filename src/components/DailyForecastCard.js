import React from "react";
import Icon from "../Icons";

function DailyForecastCard(props) {
  const data = props.data;
  const date = new Date(props.data.time * 1000);
  const weatherData = {
    tempHigh: Math.round(data.temperatureMax),
    tempLow: Math.round(data.temperatureMin),
    day: props.days[date.getDay()],
    icon: data.icon,
    humidity: Math.round(data.humidity * 100) + "%",
    uvIndex: data.uvIndex,
    windSpeed: data.windSpeed  + 'km/h',
    visibility: Math.round(data.visibility)
  };

  const CardOnClick = (data) => {
    console.log('CLICK', data)
     props.setPopupData(weatherData);
    props.setPopup('dailyForecast'); 
  }

  return (
    <div onClick={() => CardOnClick(data)} className="daily-forecast__container">
      <p className="day">{weatherData.day.substring(0, 3)}</p>
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
