import React from 'react'
import "./DestinationStyle.css";



const DestinationData = (props) => {
  return (
    <div className={props.className}>
                <div className='dest-text'>
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
                <div className='image'>

                    <img alt='image' src={props.image1} />
                    <img alt='image' src={props.image2} />
                </div>
            </div>
  )
}

export default DestinationData
