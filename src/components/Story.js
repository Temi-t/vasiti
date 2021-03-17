
import React from 'react';
import profileImg from '../images/Adetola.png'


export default function Story ({ story, userStory, firstName, lastName, location }) {
    return(
        <div>
            <div className="card-profile" >
                <img src={profileImg} alt=" profile"/>
                <h3>{firstName} {lastName}</h3>
                <div>
                    <span>{location}</span>
                    <span>Customer</span>
                </div>
                <div className="story">
                    <p>{userStory}</p>
                </div>
            </div>
        </div>
    )
}