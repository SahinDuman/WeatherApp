import React, { useState, useEffect } from "react";
import "./App.css";
import LocationView from "./views/LocationView";
import Home from './views/Home';
import Popup from "./components/Popup";

function App() {
  const locationKey = process.env.REACT_APP_LOCATION_ACCESS_TOKEN;
  const apiKey = process.env.REACT_APP_RAPID_API_KEY;

  const [weather, setWeather] = useState(null);
  const [popup, setPopup] = useState('addLocation');
  const [popupData, setPopupData] = useState(null);

  let popupRender = "";

  const locations = [
    {
      city: "Stockholm",
      country: "Sweden",
      lat: 59.334591,
      long: 18.06324,
    },
  ];

  const fetchWeather = async (lat, long) => {
    const url = `https://dark-sky.p.rapidapi.com/${lat},${long}?lang=en&units=auto`;
  
    const data = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "dark-sky.p.rapidapi.com",
        "x-rapidapi-key": apiKey,
      },
    }).then((res) => res.json());
    console.log("fetch data", data);
    setWeather([data]);
  };
  


  useEffect(() => {
    fetchWeather(locations[0].lat, locations[0].long);
  }, []);


  if (popup) {
    document.querySelector("body").classList.add("prevent-scroll");
    popupRender = <Popup type={popup} setPopupData={setPopupData} setPopup={setPopup} data={popupData}/>;
  } else {
    document.querySelector("body").classList.remove("prevent-scroll");
  }

  return (
    <div className="app">
      <Home weather={weather}/>
      {popupRender}
    </div>
  );
}

//<LocationView setPopupData={setPopupData} setPopup={setPopup} data={weather} />

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
