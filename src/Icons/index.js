import React from "react";

import ArrowDown from "./Orion_angle-down";
import Close from "./Orion_delete-circle";
import Clouds from "./Orion_clouds";
import Cloudy from "./Orion_cloudy";
import Rain from "./Orion_drizzle";
import Fog from "./Orion_fog";
import Snow from "./Orion_heavy-snow";
import PartlyCloudy from "./Orion_partly-cloudy";
import Location from "./Orion_pin";
import Sleet from "./Orion_sleet";
import Sunny from "./Orion_sunny";
import Moon from "./Orion_sunset";
import Windy from "./Orion_windstorm";       

const Icon = props => {
  switch (props.name) {
    case "clear-day":
      return <Sunny {...props} />;
    case "clear-night":
      return <Moon {...props} />;
    case "rain":
      return <Rain {...props} />;
    case "snow":
      return <Snow {...props} />;
    case "sleet":
      return <Sleet {...props} />;
    case "wind":
      return <Windy {...props} />;
    case "fog":
      return <Fog {...props} />;
    case "cloudy":
      return <Clouds {...props} />;
    case "partly-cloudy-day":
      return <PartlyCloudy {...props} />;
    case "partly-cloudy-night":
      return <Cloudy {...props} />;
    case "location":
      return <Location {...props} />;
    case "arrow":
      return <ArrowDown {...props} />;
    case "close":
      return <Close {...props} />;
    default:
      return 'REEE';
  }
};

export default Icon;