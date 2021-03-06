import React from "react";

function SVG (props) {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
aria-describedby="desc" role="img" xmlns="http://www.w3.org/1999/xlink" width={props.width}>
  <title>Clouds</title>
  <desc>A line styled icon from Orion Icon Library.</desc>
  <path data-name="layer2"
  d="M54.2 36.7A10 10 0 0 0 52 17a13 13 0 0 0-25 4" fill="none" stroke="#64297f"
  strokeMiterlimit="10" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round"></path>
  <path data-name="layer1" d="M56 43a12 12 0 0 0-12-12h-1.2a16 16 0 0 0-30.7 4H12a10 10 0 1 0 0 20h32.1A12 12 0 0 0 56 43z"
  fill="none" stroke="#a240cf" strokeMiterlimit="10" strokeWidth="4" strokeLinejoin="round"
  strokeLinecap="round"></path>
</svg>
  )
}

export default SVG;
