import React from 'react'
import "./DestinationStyle.css";
import DestinationData from './DestinationData';
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/5.jpg";
import image4 from "../images/8.jpg";

const Destination = () => {
    // console.log(props);
    return (
        <div className='destination'>
            <h1>Popular Destinations</h1>
            <p style={{fontSize : "1.2rem"}}>Tours give you the opportunity to see a lot, within a time frame.</p>

            <DestinationData className="first-des"
            title="Taal Volcano, Batangas"
                description="One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you’ll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
                image1={image1}
                image2={image2} />

<DestinationData className="first-des-reverse"
                title="Mt. Daguldul, Batangas"
                description="If you’re looking for a hike that’s a little more challenging but still good for a beginner mountaineer, check out Mt. Daguldul in San Juan, Batangas. You’ll start your hike from the beach and pass through tropical forest, different rock formations, and small streams. There’s a small store halfway up the trail where you can take a break and drink buko juice, and though the summit itself may not have the best view, the breeze is fantastic. Once you’ve made it back down, head straight to the beach for a refreshing, well-deserved swim."
                image1={image3}
                image2={image4} />

        </div>
    )
}

export default Destination
