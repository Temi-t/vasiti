import React from 'react';
import SingleProfileB from './SingleProfileB';
import './ProfilesB.css';
import Story from './Story';
import { useStoriesContext } from './StoryContext';



export default function ProfilesB () {
const [stories] = useStoriesContext();
console.log('your stories: ',stories)

    return(
        <div className="profile-container">
            <SingleProfileB/>
            <SingleProfileB />
            <SingleProfileB />
            <SingleProfileB />
            <SingleProfileB />
            <SingleProfileB />
            {stories && stories.map((story, i)=> 
            <Story key={"story_"+ i} story={story}  />)}

        </div>
    )
}