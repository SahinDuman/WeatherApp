import React from 'react';
import DailyForecastCard from './DailyForecastCard';

function SideScrollingContainer(props) {
  return (
    <div className="sidescroll-container margin-bottom__1em">
      {props.forecast.map((day, i) => i > 0 && <DailyForecastCard days={props.days} key={i} data={day} />)}
    </div>
  )
}

export default SideScrollingContainer
