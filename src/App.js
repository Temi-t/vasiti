import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Experiences from './components/Experiences';
import Profiles from './components/Profiles';
import ExperienceExtra from './components/ExperienceExtra';
import ProfilesB from './components/ProfilesB';
import Footer from './components/Footer';
import Stories from './components/Stories';
import ThankYou from './components/ThankYou';
import StoryProvider from './components/StoryContext';

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';


function App() {
  // const [isModalOpen] = useModal();
  // console.log("Modal Status: ", useModal())
  


  return (
    <StoryProvider>
          <div className="App">
            <CssBaseline />
            <Nav />
            <Experiences />
            <Profiles />
            <ExperienceExtra />
            <ProfilesB />
            <Footer />
            <Stories />
            <ThankYou />
          </div>
    </StoryProvider>

  );
}

export default App;