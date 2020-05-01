import React from "react";

function SVG (props) {
  return(
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
aria-describedby="desc" role="img" xmlns="http://www.w3.org/1999/xlink" width={props.width}>
  <title>Fog</title>
  <desc>A line styled icon from Orion Icon Library.</desc>
  <path data-name="layer2"
  d="M62 31a13 13 0 0 0-13-13h-.5a17 17 0 0 0-32.3 4.4A11 11 0 0 0 2 32"
  fill="none" stroke="#a240cf" strokeMiterlimit="10" strokeWidth="4" strokeLinejoin="round"
  strokeLinecap="round"></path>
  <path data-name="layer1" fill="none" stroke="#202020" strokeMiterlimit="10"
  strokeWidth="4" d="M2 38h60M8 46h50m-46 8h16m8 0h20" strokeLinejoin="round"
  strokeLinecap="round"></path>
</svg>
  )
}

export default SVG;
