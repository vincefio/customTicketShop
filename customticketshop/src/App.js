import React, { Component } from 'react';
import Home from './components/Home.js';
import Nav from './components/Nav.js'
import Login from './components/Login.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import fire from './config/firebase.js'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {},
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({ user });
        console.log('USER')
      }else{
        this.setState({ user: null })
        console.log('NO USER')
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        
        {
          !this.state.user &&
            <Route exact path='/' component={Login} />
            
        }
        {
          this.state.user && 
            <Route exact path='/' component={Home} />
        }
        
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/login" component={Login} />
      </div>
    );
  }
}

export default App;
