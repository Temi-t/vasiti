
import React from 'react';
import profileImg from '../images/Adetola.png'


export default function Story ({ story }) {
    return(
        <div>
            <div className="card-profile" >
            <img src={profileImg} alt=" profile"/>
            <h3>Adetola Fashina</h3>
            <div>
                <span>location</span>
                <span>Customer</span>
            </div>
            <p>{story.details}</p>
        </div>
        </div>
    )
}