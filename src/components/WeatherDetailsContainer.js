import React from "react";
import Icon from '../Icons';
import WeatherDetailsListITem from './WeatherDetailsListITem';

function WeatherDetailsContainer(props) {
  const weatherData = props.data;
  return (
    <div className="location-weather__container standard-shadow">
      <div className="location-weather__main">
        <div>
          <span className="temperature-label">Temperature</span>
          <p className="temperature">
            {weatherData.temp}
            <span className="primary-color__text">{"\u00b0"}</span>C
          </p>
        </div>
        <div className="icon-container">
          <span className="icon">
            <Icon name={weatherData.icon} width="50px" />
          </span>
          <span className="icon-label">{weatherData.summary}</span>
        </div>
      </div>

      <ul className="location-weather__list-container">
        <WeatherDetailsListITem
          title="Humidity"
          value={weatherData.humidity}
        />
        <WeatherDetailsListITem
          title="Wind Speed"
          value={weatherData.windSpeed}
        />
        <WeatherDetailsListITem title="UV Index" value={weatherData.uvIndex} />
        <WeatherDetailsListITem
          title="Visibility"
          value={weatherData.visibility}
        />
      </ul>
    </div>
  );
}

export default WeatherDetailsContainer;
