import React, { Component } from 'react';
import Form from './Form';
// import RoomsContainer from './RoomsContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      customers: [],
      rooms: [],
      bookings: [],
      error: ''
    }
  }

  componentDidMount() {
    
    fetch(`http://localhost:3001/api/v1/customers`)
    .then(data => data.json())
    .then(
      (customersData) => {
        this.setState({
          customers: customersData.customers
      });
    },
  )
  .catch(() => this.setState({ error: 'Something went wrong'}));

    fetch(`http://localhost:3001/api/v1/rooms`)
    .then(data => data.json())
    .then(
      (roomsData) => {
        this.setState({
          rooms: roomsData.rooms
        });
      },
    )
    .catch(() => this.setState({error: 'Something went wrong'}));
    
    fetch(`http://localhost:3001/api/v1/bookings`)
    .then(data => data.json())
    .then(
      (bookingsData) => {
        this.setState({
          bookings: bookingsData.bookings
        })
      },
    )
    .catch(() => this.setState({error: 'Something went wrong'}));  
  }

  showRooms = () => {
    
  }

  render() {
    return (
      <main>
        <h1>Overlook Hotel</h1>
        {!this.state.customers.length && <p>Loading content...</p>}
        <Form />
        {/* <RoomsContainer rooms={this.state.rooms} /> */}
      </main>
    );
  }

}

export default App;
