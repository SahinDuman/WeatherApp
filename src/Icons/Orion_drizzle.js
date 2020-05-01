import React from "react";

function SVG (props) {
  return(
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
aria-describedby="desc" role="img" xmlns="http://www.w3.org/1999/xlink" width={props.width}>
  <title>Drizzle</title>
  <desc>A line styled icon from Orion Icon Library.</desc>
  <path data-name="layer2"
  d="M49 12h-.5a17 17 0 0 0-32.3 4.4A11 11 0 1 0 13 38h36a13 13 0 1 0 0-26z"
  fill="none" stroke="#a240cf" strokeMiterlimit="10" strokeWidth="4" strokeLinejoin="round"
  strokeLinecap="round"></path>
  <path data-name="layer1" fill="none" stroke="#202020" strokeMiterlimit="10"
  strokeWidth="4" d="M46 45v10M36 45v4m-10-4v10M16 45v6m0 5v2m10 2v2m10-8v2m10 4v2"
  strokeLinejoin="round" strokeLinecap="round"></path>
</svg>
  )
}

export default SVG;
