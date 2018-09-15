import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// b.1 Import the Switch, Route from react-router-dom

import PortfolioFixed from './components/PortfolioFixed.js';
import HomeView from './components/HomeView';
import ProjectsView from './components/ProjectsView';
import CvView from './components/CvView';
// b.2 Import the View Component Files

import Nav from './components/Nav';
// b.3 Import the Nav file

class App extends Component {
  render() {
    return (
      <div className="App" id="app-container">
        {/* Configure Nav File */}
        <Nav/>
        <PortfolioFixed/>

        {/* Configure Switch + Route to render View Component files */}

      </div>
    );
  }
}

export default App;
