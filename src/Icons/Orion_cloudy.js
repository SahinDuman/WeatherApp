import React from "react";

function SVG (props) {
  return(
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
aria-describedby="desc" role="img" xmlns="http://www.w3.org/1999/xlink" width={props.width}>
  <title>Cloudy</title>
  <desc>A line styled icon from Orion Icon Library.</desc>
  <path data-name="layer2"
  d="M62 40a12 12 0 0 0-12-12h-1.2a16 16 0 0 0-30.7 4H18a10 10 0 1 0 0 20h32.1A12 12 0 0 0 62 40z"
  fill="none" stroke="#a240cf" strokeMiterlimit="10" strokeWidth="4" strokeLinejoin="round"
  strokeLinecap="round"></path>
  <path data-name="layer1" d="M12.2 33.9a12 12 0 1 1 13.7-13.7" fill="none"
  stroke="#000000" strokeMiterlimit="10" strokeWidth="4" strokeLinejoin="round"
  strokeLinecap="round"></path>
</svg>
  )
}

export default SVG;

