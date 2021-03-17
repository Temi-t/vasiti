import React from 'react';
import SingleProfileB from './SingleProfileB';
import './ProfilesB.css';
import Story from './Story';
import { useStoriesContext, useStory, useFirstName, useLastName, useLocation } from './StoryContext';



export default function ProfilesB () {
const [stories] = useStoriesContext();
const [userStory, setUserStory] = useStory();
const [firstName, setFirstName] = useFirstName();
const [lastName, setLastName] = useLastName();
const [location, setLocation] = useLocation();




    return(
        <div className="profile-container">
            <SingleProfileB/>
            <SingleProfileB />
            <SingleProfileB />
            <SingleProfileB />
            <SingleProfileB />
            <SingleProfileB />
            {stories && stories.map((story, i)=> 
            <Story key={"story_"+ i} story={story} 
                userStory={userStory}
                firstName={firstName} 
                lastName={lastName}
                location={location}
            />)}

        </div>
    )
}