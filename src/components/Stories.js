import React, { useRef } from 'react';
import Story from './Story';
// import { useStoryContext, useHandleStoryContext } from './StoryContext';
import { useStoryContext } from './StoryContext';

export default function Stories () {
      const storyInput = useRef();
    const [stories, setStories] = useStoryContext();
    // const handleStory = useHandleStoryContext();

  const rand = () => {
    return Math.floor((Math.random() * 10000) + 1)
  }

  const handleStory = (e) => {
    const userInput = storyInput.current.value
    if(userInput === "") return
    setStories(prevStories => [
      ...prevStories, {
        id: rand(),
       details: userInput, }
    ])
    storyInput.current.value = null
  }
  
    return(
        <div>
            <div className="story-class">
              <label htmlFor="upload">
                Upload picture
              </label>
              <input name="upload" type= "file" placeholder="Choose Image"/>


              <input type="text" ref={storyInput}/>
              <button onClick={handleStory}>Share your story!</button>
            </div>
            {stories.map((story, i)=> <Story story={story} key={"story_"+ i} />)}
            
        </div>
    )
}