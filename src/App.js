import React, {useState, useEffect} from "react";
import "./App.css";
import LocationView from './components/LocationView';

function App() {
  const [weather, setWeather] = useState(null);
  const apiKey = process.env.REACT_APP_RAPID_API_KEY;

  const locations = [
    {
    city: 'Stockholm',
    country: 'Sweden',
    lat: 59.334591,
    long: 18.063240
  }
]

  useEffect(() => {
    
    const fetchData = async (lat, long) => {
      const url = `https://dark-sky.p.rapidapi.com/${lat},${long}?lang=en&units=auto`;
      
      const data = await fetch(url, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "dark-sky.p.rapidapi.com",
          "x-rapidapi-key": apiKey,
        }
      })
      .then(res => res.json());
      console.log('fetch data', data)
      setWeather(data);
    }

    fetchData(locations[0].lat, locations[0].long)
   }, [])

  return(
    <div className="app">
       {weather ? <LocationView data={weather} />  : ''}
    </div>
  )
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
