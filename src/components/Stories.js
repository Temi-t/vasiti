import React from 'react';
import Story from './Story';

export default function Stories ({stories, handleStory}) {
    return(
        <div>
            
            {stories.map((story, i)=>{
                return <Story key={"story_" + i}  story={story}/>
            })}
        </div>
    )
}