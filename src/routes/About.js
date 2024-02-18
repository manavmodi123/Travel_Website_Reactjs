import React from 'react';
import Hero from '../components/Hero';
import heroImage from '../images/night.jpg';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
const About = () => {
  return (
    <div>
    <Hero 
      cName = "hero-mid"
      heroImage={heroImage}
      title="About"
      Button="Travel Plan"
      url = "/"
      btnClass = "hide"
    /> 
    <AboutUs />

    <Footer />
  </div>
  )
}

export default About
