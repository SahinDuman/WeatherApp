import React from "react";
import WeatherDetailsListITem from "./WeatherDetailsListITem";
import SideScrollingContainer from "./SideScrollingContainer";
import Icon from "../Icons";
import WeatherDetailsContainer from "./WeatherDetailsContainer";

function LocationView(props) {
  const current = props.data.currently;
  const date = new Date(current.time * 1000);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const weatherData = {
    city: props.data.timezone.split("/")[1],
    /* currentTemp: Math.round(current.temperature, 10).toFixed(1), WITH ONE DECIMAL */
    currentTemp: Math.round(current.temperature, 10),
    currentIcon: current.icon,
    currentSummary:
      current.summary.length > 20
        ? current.summary.substring(0, 20) + "..."
        : current.summary,
    currentHumidity: Math.round(current.humidity * 100) + "%",
    currentWindspeed: current.windSpeed + "km/h",
    currentDate: `${date.getDate()} - ${months[date.getMonth()]}`,
    currentDay: days[date.getDay()],
    uvIndex: current.uvIndex,
    visibility: Math.round(current.visibility),
  };

  console.log("location view::", weatherData);

  return (
    <div className="location-container">
      {weatherData ? (
        <div>
          <div className="location-header">
            <div className="location-header__back-icon standard-shadow">
              <Icon name="arrow" width="100%" />
            </div>
            <div className="location-header__location-tag">
              <p>
                <span>
                  <Icon name="location" width="20" />
                </span>
                {weatherData.city}
              </p>
            </div>
          </div>
          <div className="sub-header">
            <p>{weatherData.currentDay}</p>
            <p>{weatherData.currentDate}</p>
          </div>

        <WeatherDetailsContainer data={weatherData} />
          <div className="sub-header">
            <p>Weekly forecast</p>
          </div>

          <SideScrollingContainer
            setPopupData={props.setPopupData} setPopup={props.setPopup}
            days={days}
            forecast={props.data.daily.data}
          />
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default LocationView;
