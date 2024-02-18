import React from 'react';
import Hero from '../components/Hero';
import heroImage from '../images/12.jpg';

import Destination from '../components/Destination';
import Trip from '../components/Trip';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Hero 
        cName = "hero"
        heroImage={heroImage}
        title="Your Journey Your Story"
        description="Choose Your Favourite Destination"
        Button="Travel Plan"
        url = "/"
        btnClass = ""
      /> 
      <Destination />
      <Trip />
      <Footer />
    </div>
  );
};

export default Home;
