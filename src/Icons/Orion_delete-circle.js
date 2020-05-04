import React from "react";

function SVG (props) {
  return(
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
aria-describedby="desc" role="img" xmlns="http://www.w3.org/1999/xlink" width={props.width}>
  <title>Delete Circle</title>
  <desc>A line styled icon from Orion Icon Library.</desc>
  <circle data-name="layer2"
  cx="32.001" cy="32" r="30" transform="rotate(-45 32.001 32)" fill="#fff"
  stroke="#a240cf" strokeMiterlimit="10" strokeWidth="4" strokeLinejoin="round"
  strokeLinecap="round"></circle>
  <path data-name="layer1" fill="#fff" stroke="#a240cf" strokeMiterlimit="10"
  strokeWidth="4" d="M42.999 21.001l-22 22m22 0L21 21" strokeLinejoin="round"
  strokeLinecap="round"></path>
</svg>
  )
}

export default SVG;