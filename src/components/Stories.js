import React from 'react';
import { useStory, useFirstName, useImageUrl,
  useStoriesContext, useLastName, useCustVendor, 
  useLocation, useModal, useThanks, useVendor, useCustomer} from './StoryContext';
import Button from '@material-ui/core/Button';


export default function Stories () {
    const [ stories, setStories] = useStoriesContext();
    const [userStory, setUserStory] = useStory();
    const [firstName, setFirstName] = useFirstName();
    const [lastName, setLastName] = useLastName();
    const [location, setLocation] = useLocation();
    const [customer, setCustomer] = useCustomer();
    const [vendor, setVendor] = useVendor();
    const [custVendor, setCustVendor] = useCustVendor();
    const [imageUrl, setImageUrl] = useImageUrl();
    const [isModalOpen, setIsModalOpen] = useModal();
    const [thankYou, setThankYou] = useThanks();


    const handleUserImage = (e) =>{
      const myFile = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(myFile)

      reader.onload=(e)=>{
        // console.log("Image-data: ", e.target.result)
        setImageUrl(reader.result)
      }
    }

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
  // customer
  const handleCustomer = () => {
    setCustVendor("Customer")
    setCustomer(true)
    setVendor(false)
  }
//vendor
const handleVendor = () => {
  setCustVendor("Vendor")
  setVendor(true)
  setCustomer(false)
}


    const rand = () => {
      return Math.floor((Math.random() * 10000) + 1)
    }
    const addStory = (story) => {
      const newStory = {id:rand(), ...story};
      setStories(prevStories => [...prevStories, newStory])
      console.log(story)
    }


    const handleSubmit = (e) =>{
      e.preventDefault()
      addStory({ firstName, lastName, userStory, 
        vendor, customer, custVendor, location, imageUrl})

      setFirstName('');
      setLastName('');
      setUserStory('');
      setLocation('');
      setVendor(false);
      setCustomer(false);
      setImageUrl(null);
      handleThanks();
    }
    
    return(
      <>
        {isModalOpen ? 
          <div className="modal-bg">
            <div className="stories-form">
             <form className="story-class" onSubmit={handleSubmit} autoComplete="none"  >

                < span className="x" onClick={()=>setIsModalOpen(!isModalOpen)} >X</span>
                <h2>Share your amazing story!</h2>
                {/* upload user image */}
                <label htmlFor="user-image">Upload your picture</label>
                <input id="user-image" 
                  name="user-image"  
                  type="file"
                  onChange={handleUserImage} 
                  placeholder="Choose Image"
                /> <br/><br/>
                {/* nameInput and lastNameInput */}
                <div className="user-name">
                  <div>
                    <label htmlFor="firstName">Firstname</label><br/>
                    <input type="text" 
                      autoComplete="none"
                      id="firstName"
                      name="firstName" 
                      onChange={handleFirstName} 
                      placeholder="Enter first name" 
                      value={firstName} 
                    /> 
                  </div>
                  <div>
                    <label htmlFor="lastName">Lastname</label><br/>
                    <input type="text" id="lastName"
                      autoComplete="none" 
                      name="lastName" 
                      onChange={handleLastName} 
                      placeholder="Enter last name" 
                      value={lastName} 
                    />
                  </div>
                </div><br/>

                {/* Share your story! */}
                <label htmlFor="storyInput">Share your story</label>
                <textarea id="storyInput" 
                  name="storyInput"
                  row="15" column="20"
                  value={userStory}
                  onChange={handleStoryChange} >             
                </textarea>

                {/* radio buttons */}
                <pre>What did you interact with vasiti as?      <input type="radio"
                  id="customer" 
                  name="cust-vendor"
                  //  name="customer" 
                  //  onChange={(e)=>{setCustomer(e.currentTarget.checked)
                  //  setVendor(false)}}
                  onChange={handleCustomer}
                  value= {false}   
                 />
                  <label htmlFor="customer">Customer</label>
                  <input type="radio" 
                    id="vendor" 
                    name="cust-vendor" 
                    // name="vendor"
                    // onChange={(e)=>{setVendor(e.currentTarget.checked) 
                    // setCustomer(false)}}
                    onChange={handleVendor}   
                    value={false}
                  />
                  <label htmlFor="vendor">Vendor</label>
                </pre>

                {/* user location */}
                <label htmlFor="location">City or Higher Institution(for Students)</label>
                <input type="text"
                  autoComplete="none" 
                  id="location" 
                  name="location"
                  onChange={handleLocation} value={location} 
                />

                <div className="story-btn">
                  {/* <Button  
                    type="submit"
                    className="btn" 
                    // className={classes.button}
                    size="large" 
                    variant="contained"
                    href="#contained-buttons" 
                    style={{backgroundColor: "#FF5C00",
                    color: "white",
                    margin: '0',
                    width: "50%",
                    float: "right"}}
                    onClick={handleThanks}

                  >Share your story!
                  </Button> */}
                  <button type='submit'>
                    Share your story!</button>
                </div>
              </form>
          </div>
        </div>
         : null}
      </>
    )
}
