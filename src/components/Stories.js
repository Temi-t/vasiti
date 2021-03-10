import React, { useRef, useEffect } from 'react';
import Story from './Story';
// import { useStoryContext, useHandleStoryContext } from './StoryContext';
import { useStoryContext } from './StoryContext';

const LS_KEY = "story.key";
export default function Stories () {
    const storyInput = useRef();
    const [stories, setStories] = useStoryContext();
    // const handleStory = useHandleStoryContext();

    useEffect(()=>{
      const storedStories = JSON.parse(localStorage.getItem(LS_KEY))
      storedStories && setStories(storedStories)
    }, []);
    useEffect(()=>{
      localStorage.setItem(LS_KEY, JSON.stringify(stories))
    }, [stories]);

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

  const clearStory = () => {
    localStorage.clear()
  }
  
    return(
        <div>
            <form className="story-class" onSubmit={handleStory}>
              <h2>Share your amazing story!</h2>
              <label htmlFor="upload">
                Upload your picture
              </label>
              <input id="upload" name="upload" type= "file" placeholder="Choose Image"/>

              {/* nameInput and lastNameInput */}
              <input type="text" name="firstName" placeholder="Enter first name" /> 
              <input type="text" name="lastName" placeholder="Enter last name" /> 
              {/* textField */}
              <input type="textfield" row="5" column="9"/>
              {/* what did you 
              interact with vasiti as? 
              customer/vendor radio button */}

              {/* Share your story! */}

              <input type="text" ref={storyInput}/>
              <button type="submit">Share your story!</button>
              <button onClick={clearStory}>Delete my Stories</button>
            </form>
            {stories.map((story, i)=> <Story story={story} key={"story_"+ i} />)}
            
        </div>
    )
}
