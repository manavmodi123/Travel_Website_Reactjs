import React from 'react'
import Hero from '../components/Hero';
import heroImage from '../images/2.jpg';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const Contact = () => {
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
    <ContactForm />

<Footer />
  </div>
  )
}

export default Contact
