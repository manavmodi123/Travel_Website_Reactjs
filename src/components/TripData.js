import React from 'react'
import "./TripStyle.css";

const TripData = (props) => {
  return (
    <div className='t-card'>
        <div className='t-image'>
            <img alt='img' src={props.image} />
        </div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      
    </div>
  )
}

export default TripData
