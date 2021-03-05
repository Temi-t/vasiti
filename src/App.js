import React, {useState, useEffect, useRef, useContext} from 'react';
import './App.css';
import Nav from './components/Nav';
import Experiences from './components/Experiences';
import Profiles from './components/Profiles';
import ExperienceExtra from './components/ExperienceExtra';
import ProfilesB from './components/ProfilesB';
import Footer from './components/Footer';
import Stories from './components/Stories';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';


function App() {
  const [stories, setStories] = useState([]);
  const storyInput = useRef();

  const rand = () => {
    return Math.floor((Math.random() * 10000) + 1)
  }

  const handleStory = ( ) => {
    const userInput = storyInput.current.value
    if(userInput === "") return
    setStories(prevStories => [
      ...prevStories, {
        id: rand(),
       details: userInput, }
    ])
    storyInput.current.value = null
  }
  return (
    <Router>
          <div className="App">
            <CssBaseline />
            <Nav />
            <Experiences />
            <Profiles />
            <ExperienceExtra />
            <ProfilesB />
            <Footer />
            <div className="story-class">
              <label for="upload">
                Upload picture
              </label>
              <input name="upload" type= "file" placeholder="Choose Image"/>


              <input type="text" ref={storyInput}/>
              <button onClick={handleStory}>Share your story!</button>
            </div>
            <Stories stories={stories} handleStory={handleStory}/>

          </div>
    </Router>
  );
}

export default App;
