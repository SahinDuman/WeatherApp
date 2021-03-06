import React from "react";
import Icon from "../Icons";
import WeatherDetailsListITem from "./WeatherDetailsListITem";

function WeatherForecastPopup(props) {
  const data = props.data;
  console.log("POPUP DATA", data);
  return (
    <div className="location-weather__container standard-shadow">
      <div className="popup-container__close-btn">
        <div className="close" id="close"></div>
        <Icon name="close" width="42px" />
      </div>
      <div className="sub-header padding__05em">
        <p className="day">{data.day}</p>
        <div className="icon-container">
          <span className="icon">
            <Icon name={data.icon} width="50px" />
          </span>
        </div>
      </div>

      <div className="location-weather__main">
        <div>
          <span className="temperature-label text-center">Max temperature</span>
          <p className="temperature text-center">
            {data.tempHigh}
            <span className="primary-color__text">{"\u00b0"}</span>C
          </p>
        </div>
        <div>
          <span className="temperature-label text-center">Min temperature</span>
          <p className="temperature text-center">
            {data.tempLow}
            <span className="primary-color__text">{"\u00b0"}</span>C
          </p>
        </div>
      </div>

      <ul className="location-weather__list-container">
        <WeatherDetailsListITem title="Humidity" value={data.humidity} />
        <WeatherDetailsListITem title="Wind Speed" value={data.windSpeed} />
        <WeatherDetailsListITem title="UV Index" value={data.uvIndex} />
        <WeatherDetailsListITem title="Visibility" value={data.visibility} />
      </ul>
    </div>
  );
}

export default WeatherForecastPopup;
