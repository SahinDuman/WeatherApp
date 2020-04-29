import React, {useState, useEffect} from "react";
import "./App.css";
import LocationTempView from './components/LocationTempView';

function App() {
  const [weather, setWeather] = useState(null);
  const apiKey = process.env.REACT_APP_RAPID_API_KEY;

  const Stockholm = {
    lat: 59.334591,
    long: 18.063240
  }

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

    fetchData(Stockholm.lat, Stockholm.long)
   }, [])

  return(
    <div className="App">
       {weather ? <LocationTempView data={weather} />  : ''}
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
