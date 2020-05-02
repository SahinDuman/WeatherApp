import React from "react";
import WeatherForecastPopup from "./WeatherForecastPopup";

function Popup(props) {
  let popupModal = "WHOOPS";

  const closePopup = (e) => {
    if (e.target.id === e.currentTarget.id) {
      props.setPopup(null);
      props.setPopupData(null);
    }
  };

  switch (props.type) {
    case "dailyForecast":
      popupModal = <WeatherForecastPopup data={props.data} />;
      break;

    default:
      popupModal = "WHOOPS";
  }

  return (
    <div id="popup-overlay" onClick={closePopup} className="popup-container">
      {popupModal}
    </div>
  );
}

export default Popup;
