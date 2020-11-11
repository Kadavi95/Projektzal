
import React from 'react';
import  './sass/reset.scss'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';

import appointment from './components/pages/appointment';
import findUs from './components/pages/findUs';
import contactUs from './components/pages/contactUs';
import aboutUs from './components/pages/aboutUs';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/appointment' component={appointment} />
        <Route path='/findUs' component={findUs} />
        <Route path='/contactUs' component={contactUs} />
        <Route path='/aboutUs' component={aboutUs} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;