import React from "react";

function SVG (props) {
  return(
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
aria-describedby="desc" role="img" xmlns="http://www.w3.org/1999/xlink" width={props.width}>
  <title>Sunset</title>
  <desc>A line styled icon from Orion Icon Library.</desc>
  <path data-name="layer2"
  d="M20.7 42.1a12 12 0 1 1 22.6 0" fill="none" stroke="#202020" strokeMiterlimit="10"
  strokeWidth="4" strokeLinejoin="round" strokeLinecap="round"></path>
  <path data-name="layer1" fill="none" stroke="#a240cf" strokeMiterlimit="10"
  strokeWidth="4" d="M62 48H2" strokeLinejoin="round" strokeLinecap="round"></path>
</svg>
  )
}

export default SVG;
