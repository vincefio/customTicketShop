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
        <h4>Create Your Tickets</h4>
        <form>
            <div class="input-field col s6">
                <input id="event_name" type="text" class="validate"></input>
                <label for="event_name">Event Name</label>
            </div>
            <div class="input-field col s6">
                <input id="venue_name" type="text" class="validate"></input>
                <label for="venue_name">Name of Venue</label>
            </div>
            <div class="input-field col s6">
                <input id="ticket_price" type="text" class="validate"></input>
                <label for="ticket_price">Single Ticket Price</label>
            </div>
            <div class="input-field col s6">
                <input id="number_of_ticets" type="text" class="validate"></input>
                <label for="number_of_ticets">How Many Tickets</label>
            </div>
        </form>
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
