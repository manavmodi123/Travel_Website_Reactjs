import React from 'react';
import './Hero.css'; // Import CSS file for styling

const Hero = (props) => {
  return (
    <div className={props.cName}>
      <div className='hero-text'>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <a href={props.url}>
        <button className={props.btnClass}>{props.Button}</button>
        </a>
      </div>
      <img alt='heroimg' src={props.heroImage} className='hero-image' loading='lazy' />
    </div>
  );
};

export default Hero;
