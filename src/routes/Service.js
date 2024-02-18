import React from 'react'
import Hero from '../components/Hero';
import heroImage from '../images/night.jpg';
import Footer from '../components/Footer';
import Trip from  '../components/Trip';

const Sevice = () => {
  return (
    <div>
    <Hero 
      cName = "hero-mid"
      heroImage={heroImage}
      title="Service"
      Button="Travel Plan"
      url = "/"
      btnClass = "hide"
    /> 
    <Trip />
    <Footer />
  </div>
  )
}

export default Sevice
