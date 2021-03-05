import React from 'react';
import SingleProfile from './SingleProfile';
import './Profiles.css';

export default function Profiles () {
    return(
        <div className="profile-container">
            <SingleProfile />
            <SingleProfile />
            <SingleProfile />
            <SingleProfile />
            <SingleProfile />
            <SingleProfile />
        </div>
    )
}