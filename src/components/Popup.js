import React from "react";
import WeatherForecastPopup from "./WeatherForecastPopup";
import AddLocationPopup from "./AddLocationPopup";

function Popup(props) {
  let popupModal = "WHOOPS";

  const closePopup = (e) => {
    console.log(e.target.id);
    if (e.target.id === e.currentTarget.id || e.target.id === "close") {
      props.setPopup(null);
      props.setPopupData(null);
    }
  };

  switch (props.type) {
    case "dailyForecast":
      popupModal = <WeatherForecastPopup data={props.data} />;
      break;
    case "addLocation":
      popupModal = <AddLocationPopup />;
      break;

    default:
      popupModal = "Big Oof";
  }

  return (
    <div id="popup-overlay" onClick={closePopup} className="popup-container">
      {popupModal}
    </div>
  );
}

export default Popup;
