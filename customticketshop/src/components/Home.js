import React, { Component } from 'react'
import M from 'materialize-css'

export default class Home extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount = () => {
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, {});
    }

  render() {

    var modal =  
    <div id="modal1" class="modal">
      <div class="modal-content">
        <h4>Confirm this order</h4>
        <p>Are you sure you want to make this delivery?</p>
      </div>
      <div class="modal-footer">
        <a onClick={this.handleSubmit} href="#!" class="modal-close waves-effect waves-green btn-flat">Confirm</a>
      </div>
    </div>

    return (
      <div className="homeWrap">
        
        <h2>Welcome To Custom Ticket Shop</h2>
        <h4>Event Ticketing in 5 minutes time</h4>

        <button className="btn modal-trigger" href="#modal1">Create Event</button>

        { modal }
      </div>
    )
  }
}
