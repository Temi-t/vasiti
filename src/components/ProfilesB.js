import React from 'react';
import SingleProfileB from './SingleProfileB';
import './ProfilesB.css';

export default function ProfilesB () {
    return(
        <div className="profile-container">
            <SingleProfileB/>
            <SingleProfileB />
            <SingleProfileB />
            <SingleProfileB />
            <SingleProfileB />
            <SingleProfileB />
        </div>
    )
}