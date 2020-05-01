import React from "react";

function SVG (props) {
  return(
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
aria-describedby="desc" role="img" xmlns="http://www.w3.org/1999/xlink" width={props.width}>
  <title>Sleet</title>
  <desc>A line styled icon from Orion Icon Library.</desc>
  <path data-name="layer2"
  fill="none" stroke="#202020" strokeMiterlimit="10" strokeWidth="4" d="M15 46l-6.4 8M27 46L14.2 62M39 48.1h-4m2 2v-4M33 58h-4m2 2v-4m13 0v4m2-2h-4m9-11.9v4m2-2h-4"
  strokeLinejoin="round" strokeLinecap="round"></path>
  <path data-name="layer1" d="M49 12h-.5a17 17 0 0 0-32.3 4.4A11 11 0 1 0 13 38h36a13 13 0 1 0 0-26z"
  fill="none" stroke="#a240cf" strokeMiterlimit="10" strokeWidth="4" strokeLinejoin="round"
  strokeLinecap="round"></path>
</svg>
  )
}

export default SVG;
