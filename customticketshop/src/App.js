import React, { Component } from 'react';
import Home from './components/Home.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="">


        <Route exact path="/" component={Home} />
      </div>
    );
  }
}

export default App;
