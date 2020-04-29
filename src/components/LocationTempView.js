import React, {useState, useEffect} from 'react'

function LocationTempView(props) {
  const data = props.data;

  console.log('location view::', data);

  return (
    <div>
      LOCATION TEMP VIEW
      {
        data ? 'DATA' : ''
      }
    </div>
  )
}

export default LocationTempView
