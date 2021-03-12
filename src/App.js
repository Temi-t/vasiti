import React, {useState, useEffect, useRef, useContext} from 'react';
import './App.css';
import Nav from './components/Nav';

import Experiences from './components/Experiences';
import Profiles from './components/Profiles';
import ExperienceExtra from './components/ExperienceExtra';
import ProfilesB from './components/ProfilesB';
import Footer from './components/Footer';

import Stories from './components/Stories';
import StoryProvider from './components/StoryContext';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';


function App() {
  // const [stories, setStories] = useState([]);
  // const storyInput = useRef();

  // const rand = () => {
  //   return Math.floor((Math.random() * 10000) + 1)
  // }

  // const handleStory = ( ) => {
  //   const userInput = storyInput.current.value
  //   if(userInput === "") return
  //   setStories(prevStories => [
  //     ...prevStories, {
  //       id: rand(),
  //      details: userInput, }
  //   ])
  //   storyInput.current.value = null
  // }
  return (
    <StoryProvider>
      <Router>
          <div className="App">
            <CssBaseline />
            <Nav />
            <Switch>
              <Route path="/" exact>
                <Experiences />
                <Profiles />
                <ExperienceExtra />
                <ProfilesB />
                <Footer />
              </Route>
              <Route path="/stories" component={Stories} />
            </Switch>
          </div>
      </Router>
    </StoryProvider>

  );
}

export default App;