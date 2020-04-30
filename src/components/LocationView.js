import React from "react";
import WeatherDetailsListITem from './WeatherDetailsListITem';

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

  const weatherData = {
    city: props.data.timezone.split("/")[1],
    /* currentTemp: Math.round(current.temperature, 10).toFixed(1), WITH ONE DECIMAL */
    currentTemp: Math.round(current.temperature, 10),
    currentIcon: current.icon,
    currentSummary: current.summary.length > 20 ? current.summary.substring(0, 20) + '...' : current.summary,
    currentHumidity: Math.round(current.humidity * 100) + "%",
    currentWindspeed: current.windSpeed + "km/h",
    date: `${date.getDate()} - ${months[date.getMonth()]}`,
    uvIndex: current.uvIndex,
    visibility: Math.round(current.visibility),
  };

  console.log("location view::", weatherData);

  return (
    <div className="location-container">
      {weatherData ? (
        <div>
          <div className="location-header">
            <div className="location-header__back-icon standard-shadow">4</div>
            <div className="location-header__location-tag">
              <p>{weatherData.city}</p>
            </div>
          </div>
          <p className="location-date">{weatherData.date}</p>

          <div className="location-weather__container standard-shadow">
            <div className="location-weather__main">
              <div>
                <span className="temperature-label">Temperature</span>
                <p className="temperature">{weatherData.currentTemp}{"\u00b0"}C</p>
              </div>
              <div className="icon-container">
                <span className="icon">O</span>
                <span className="icon-label">{weatherData.currentSummary}</span>
              </div>
            </div>

            <ul className="location-weather__list-container">
              <WeatherDetailsListITem title="Humidity" value={weatherData.currentHumidity}/>
              <WeatherDetailsListITem title="Wind Speed" value={weatherData.currentWindspeed}/>
              <WeatherDetailsListITem title="UV Index" value={weatherData.uvIndex}/>
              <WeatherDetailsListITem title="Visibility" value={weatherData.visibility}/>
            </ul>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default LocationView;
