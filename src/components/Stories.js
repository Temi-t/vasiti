import React from 'react';
// import Story from './Story';
import { useHandleStoryContext, useStory, useFirstName,
   useLastName, useLocation, useModal, useThanks } from './StoryContext';
// import { useStoryContext } from './StoryContext';
import Button from '@material-ui/core/Button';


export default function Stories () {
    const handleStorySubmit = useHandleStoryContext();
    // const clearStory = useClearStoryContext();
    // const [stories, setStories] = useStoriesContext();
    const [userStory, setUserStory] = useStory();
    const [firstName, setFirstName] = useFirstName();
    const [lastName, setLastName] = useLastName();
    const [location, setLocation] = useLocation();

    const [isModalOpen, setIsModalOpen] = useModal();
    console.log("Modal Status: ", isModalOpen)

    const [thankYou, setThankYou] = useThanks();



    const handleStoryChange = (e) => {
      setUserStory(e.target.value)
    }
    const handleFirstName = (e) => {
      setFirstName(e.target.value)
    }
    const handleLastName = (e) => {
      setLastName(e.target.value)
    }
    const handleLocation = (e) => {
      setLocation(e.target.value)
    }

    const handleThanks = () => {
      setThankYou(!thankYou);
      setIsModalOpen(!isModalOpen)
    }
  
    return(
      <>
        {isModalOpen ? 
          <div className="modal-bg">
            <div className="stories-form">
              <form className="story-class" onSubmit={handleStorySubmit}>
                < span className="x" onClick={()=>setIsModalOpen(!isModalOpen)} >X</span>
                <h2>Share your amazing story!</h2>

                {/* upload user image */}
                <label htmlFor="user-image">Upload your picture</label>
                <input id="user-image" name="user-image"  type="file" placeholder="Choose Image"/><br/><br/>

                {/* nameInput and lastNameInput */}
                <div className="user-name">
                  <div>
                    <label htmlFor="firstName">Firstname</label><br/>
                    <input type="text" id="firstName" name="firstName" 
                    onChange={handleFirstName} placeholder="Enter first name" value={firstName} /> 
                  </div>
                  <div>
                    <label htmlFor="lastName">Lastname</label><br/>
                    <input type="text" id="lastName" name="lastName" 
                    onChange={handleLastName} placeholder="Enter last name" value={lastName} />
                  </div>
                </div><br/>

                {/* Share your story! */}
                <label htmlFor="storyInput">Share your story</label>
                <textarea id="storyInput" 
                  name="storyInput"
                  row="15" column="20"
                  onChange={handleStoryChange} >             
                </textarea>

                <pre>What did you interact with vasiti as?      <input type="radio" id="customer" name="cust-vendor" value="customer" />
                  <label htmlFor="customer">Customer</label>
                  <input type="radio" id="vendor" name="cust-vendor" value="vendor" />
                  <label htmlFor="vendor">Vendor</label>
                </pre>

                <label htmlFor="location">City or Higher Institution(for Students)</label>
                <input type="text" id="location" name="location" onChange={handleLocation} value={location} />

                <div className="story-btn">
                  <Button className="btn" size="large" variant="contained"
                    href="#contained-buttons" 
                    style={{backgroundColor: "#FF5C00",
                    color: "white",
                    margin: '0',
                    width: "50%",
                    float: "right"}}
                    onClick={handleThanks}
                  >
                    Share your story!
                  </Button>
                </div>
              </form>
          </div>
        </div>
         : null}
      </>
    )

}
