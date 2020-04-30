import React from "react";

function WeatherDetailsListITem(props) {
  return (
    <li className="location-weather__list-item">
      <p className="key">{props.title}</p>
      <p className="value">{props.value}</p>
    </li>
  );
}

export default WeatherDetailsListITem;
