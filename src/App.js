import './App.css';
import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="Main">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
