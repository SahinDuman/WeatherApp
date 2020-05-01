import React from "react";

function SVG (props) {
  return(
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title"
aria-describedby="desc" role="img" xmlns="http://www.w3.org/1999/xlink" width={props.width}>
  <title>Pin</title>
  <desc>A line styled icon from Orion Icon Library.</desc>
  <path strokeWidth="5" 
  strokeMiterlimit="10" stroke="#ffffff" fill="#ffffff" d="M32 2a20 20 0 0 0-20 20c0 18 20 39 20 39s20-21 20-39A20 20 0 0 0 32 2z"
  data-name="layer2" strokeLinejoin="round" strokeLinecap="round"></path>
  <circle strokeWidth="4" strokeMiterlimit="10" stroke="#a240cf"
  fill="#a240cf" r="10" cy="22" cx="32" data-name="layer1" strokeLinejoin="round"
  strokeLinecap="round"></circle>
</svg>
  )
}

export default SVG;
