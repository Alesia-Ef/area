import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
//import News from './Components/News/News';
//import Music from './Components/Music/Music';
//import Settings from './Components/Settings/Settings';

import { Route } from 'react-router-dom';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
      <Route path="/profile" 
        render={ () => <Profile 
          profilePage={props.state.profilePage} 
          dispatch={props.dispatch} 
          newPostText={props.newPostText} 
          /> } />
      <Route path="/dialogs" render={ () => <Dialogs state={props.state.dialogsPage} /> } />
      {/* <Route path="/news" component={News} />
      <Route path="/music" component={Music} />
      <Route path="/settings" component={Settings} /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
