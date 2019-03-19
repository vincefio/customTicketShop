import React, { Component } from 'react'
import M from 'materialize-css'

export default class Nav extends Component {

    componentDidMount() {
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, { inDuration: 300, outDuration: 225 });

    }

  render() {
    return (
      <div>
        <nav className='nav'>
            <div className="nav-wrapper">
                <a className="brand-logo">Custom Ticket Shop</a>
            </div>
        </nav>
      </div>
    )
  }
}
