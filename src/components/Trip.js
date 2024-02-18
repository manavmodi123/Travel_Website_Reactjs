import React from 'react'
import "./TripStyle.css";
import TripData from './TripData';
import image1 from "../images/5.jpg";
import image2 from "../images/8.jpg";
import image3 from "../images/6.jpg";

const Trip = () => {
    return (
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p style={{ fontSize: "1.2rem" }}>You can discover unique destinations using Google Maps.</p>
            <div className='tripcard'>
                <TripData image={image1}
                    title="Trip in Indonesia"
                    description="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
                />

                <TripData image={image2}
                    title="Trip in Malaysia"
                    description="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences."
                />

                <TripData image={image1}
                    title="Trip in France"
                    description="France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower."
                />
            </div>

        </div>
    )
}

export default Trip
