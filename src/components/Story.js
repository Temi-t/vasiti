
import React from 'react';
import { useVendor, useCustomer } from './StoryContext';


import profileImg from '../images/Adetola.png';



export default function Story ({ story, userStory, firstName, lastName, location }) {
    const [customer, setCustomer] = useCustomer();
    const [vendor, setVendor] = useVendor();
    return(
        <div>
            <div className="card-profile" >
                <img src={profileImg} alt=" profile"/>
                <h3>{story.firstName} {story.lastName}</h3>
                <div>
                    <span>{story.location}</span>
                    {/* <span>{(customer && story.customer) || (vendor && story.vendor) }</span> */}
                    {/* <span>{customer ? story.customer : null }{vendor ? story.vendor : null}</span> */}
                    <span>Customer</span>
                </div>
                <div className="story">
                    <p>{story.userStory}</p>
                </div>
            </div>
        </div>
    )
}