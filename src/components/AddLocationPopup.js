import React from "react";
import Icon from "../Icons";


function AddLocationPopup() {
  return (
    <div className="add-location__container">
      <div className="popup-container__close-btn">
        <div className="close" id="close"></div>
        <Icon name="close" width="42px" />
      </div>
      <div className="sub-header padding-y__05em border-bottom__discrete">
        <p>New location</p>
      </div>

      <div className="input-container">
        <input id="new-location" type="text" placeholder="Write the location you want to add." />
        <button onClick={addNewLocation} className="primary-btn">Add Location</button>
      </div>
    </div>
  );
}

const addNewLocation = () => {
  const input = document.querySelector('#new-location');
  if(/^[a-z]+$/i.test(input.value)) {
    alert('SUCCESS')
  } else {
    alert('INVALID')
  }
}

export default AddLocationPopup;
