import React from "react";

function SVG (props) {
  return(
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
aria-describedby="desc" role="img" xmlns="http://www.w3.org/1999/xlink" width={props.width}> 
  <title>Partly Cloudy</title>
  <desc>A line styled icon from Orion Icon Library.</desc>
  <path data-name="layer2"
  d="M27.1 39.5a10 10 0 1 1 6.9-10M24 8v6M8 30H2m6.4-15.5l4.3 4.2m26.9-4.2l-4.3 4.2M12.7 41.3l-4.3 4.3"
  fill="none" stroke="#202020" strokeMiterlimit="10" strokeWidth="4" strokeLinejoin="round"
  strokeLinecap="round"></path>
  <path data-name="layer1" d="M52 36a13 13 0 0 0-25 4.1h-1a8 8 0 1 0 0 16h26a10 10 0 0 0 0-20z"
  fill="none" stroke="#a240cf" strokeMiterlimit="10" strokeWidth="4" strokeLinejoin="round"
  strokeLinecap="round"></path>
</svg>
  )
}

export default SVG;
