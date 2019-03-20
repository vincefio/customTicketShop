import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'
import fire from '../config/firebase';

export default class Nav extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, { inDuration: 300, outDuration: 225 });

    }

    signOut = () => {
        console.log('clicked')
        fire.auth().signOut();
    }

  render() {
    if(this.props.user){
        return(
            <div>
              <nav className='nav'>
                  <div className="nav-wrapper">
                      <a className="brand-logo">Custom Ticket Shop</a>

                      <ul id="nav-mobile" className="right ">
    
                    <li className="hide-on-med-and-down"><Link to="/">Home</Link></li> 
                 
                    <li onClick={this.signOut} className="hide-on-med-and-down"><Link to="/">Logout</Link></li>
                
                        <a className='dropdown-trigger hide-on-large-only' href='#' data-target='dropdown1'><i className='material-icons'>dehaze</i></a>
                    </ul>

                    <ul id='dropdown1' className='dropdown-content'>
                        <li className=""><Link to="/">Home</Link></li>
  
                        <li onClick={this.signOut} className=""><Link to="/">Logout</Link></li>
                    </ul>
                  </div>
              </nav>
            </div>
        )
    }else{
        return (
            <div>
              <nav className='nav'>
                  <div className="nav-wrapper">
                      <a className="brand-logo">Custom Ticket Shop</a>
                      <ul id="nav-mobile" className="right ">
    
                    <li className="hide-on-med-and-down"><Link to="/">Home</Link></li> 
                
                    <li onClick={this.signOut} className="hide-on-med-and-down"><Link to="/">Logout</Link></li>

                       
                    </ul>
                  </div>
              </nav>
            </div>
          )
    }

  }
}
