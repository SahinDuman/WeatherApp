import React from "react";
import WeatherDetailsListITem from "../components/WeatherDetailsListITem";
import SideScrollingContainer from "../components/SideScrollingContainer";
import Icon from "../Icons";
import WeatherDetailsContainer from "../components/WeatherDetailsContainer";

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
    /* temp: Math.round(current.temperature, 10).toFixed(1), WITH ONE DECIMAL */
    temp: Math.round(current.temperature, 10),
    icon: current.icon,
    summary:
      current.summary.length > 20
        ? current.summary.substring(0, 20) + "..."
        : current.summary,
    humidity: Math.round(current.humidity * 100) + "%",
    windSpeed: current.windSpeed + "km/h",
    date: `${date.getDate()} - ${months[date.getMonth()]}`,
    day: days[date.getDay()],
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
            <p>{weatherData.day}</p>
            <p>{weatherData.date}</p>
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
