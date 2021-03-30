import React from 'react';

export default function Story ({ story }) {
    return(
            <div className="card-profile" >
                <img src={story.imageUrl} alt="profile-pic"/>

                <h3>{story.firstName} {story.lastName}</h3>
                <div>
                    <span>{story.location}</span>
                    <span>{story.custVendor}</span>
                </div>
                <div className="story">
                    <p>{story.userStory}</p>
                </div>
            </div>
    )
}