import React from "react";

function SVG (props) {
  return(
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
aria-d escribedby="desc" role="img" xmlns="http://www.w3.org/1999/xlink" width={props.width}>
  <title>Windstorm</title>
  <desc>A line styled icon from Orion Icon Library.</desc>
  <path data-name="layer1"
  d="M56 28a4 4 0 0 1 4 4 4 4 0 0 1-4 4h-8m10 16a4 4 0 0 0 4-4 4 4 0 0 0-4-4H44"
  fill="none" stroke="#202020" strokeMiterlimit="10" strokeWidth="4" strokeLinejoin="round"
  strokeLinecap="round"></path>
  <path data-name="layer2" d="M56 20.1a12.9 12.9 0 0 0-7-2h-.5a17 17 0 0 0-32.3 4.4A11 11 0 1 0 13 44h21a6 6 0 0 1 6 6 6 6 0 0 1-6 6"
  fill="none" stroke="#a240cf" strokeMiterlimit="10" strokeWidth="4" strokeLinejoin="round"
  strokeLinecap="round"></path>
  <path data-name="layer1" d="M24 36h14a6 6 0 0 0 6-6 6 6 0 0 0-6-6M20 36h-2"
  fill="none" stroke="#202020" strokeMiterlimit="10" strokeWidth="4" strokeLinejoin="round"
  strokeLinecap="round"></path>
</svg>
  )
}

export default SVG;
