import React, { useState, useEffect } from "react";
import "./App.css";
import LocationView from "./components/LocationView";
import Popup from "./components/Popup";

function App() {
  const apiKey = process.env.REACT_APP_RAPID_API_KEY;

  const [weather, setWeather] = useState(null);
  const [popup, setPopup] = useState(null);
  const [popupData, setPopupData] = useState(null);
  console.log('POPUP 2');

  const locations = [
    {
      city: "Stockholm",
      country: "Sweden",
      lat: 59.334591,
      long: 18.06324,
    },
  ];

  useEffect(() => {
    console.log('POPUP 3');
    const fetchData = async (lat, long) => {
      const url = `https://dark-sky.p.rapidapi.com/${lat},${long}?lang=en&units=auto`;

      const data = await fetch(url, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "dark-sky.p.rapidapi.com",
          "x-rapidapi-key": apiKey,
        },
      }).then((res) => res.json());
      console.log("fetch data", data);
      setWeather(data);
    };

    fetchData(locations[0].lat, locations[0].long);
  }, [0]);

  let popupRender = "";

  if (popup) {
    console.log('POPUP 1');
    document.querySelector("body").classList.add("prevent-scroll");
    popupRender = <Popup type={popup} setPopupData={setPopupData} setPopup={setPopup} data={popupData}/>;
  } else {
    document.querySelector("body").classList.remove("prevent-scroll");
  }

  return (
    <div className="app">
      {weather ? <LocationView setPopupData={setPopupData} setPopup={setPopup} data={weather} /> : ""}
      {popupRender}
    </div>
  );
}

/*
const fetchWeather = (lat, long) => {

fetch(url, {
"method": "GET",
"headers": {
  "x-rapidapi-host": "dark-sky.p.rapidapi.com",
  "x-rapidapi-key": apiKey,
}
})
.then(res => res.json())
.then(result => {
console.log('RESULT', result)
return result;
})
.catch(err => {
console.log('ERR: ', err);
});
}
*/
export default App;
