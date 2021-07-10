import React, { Component } from 'react';
import Form from './Form';
import Header from './Header';
// import RoomsContainer from './RoomsContainer';
import PropTypes from 'prop-types';
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

  getRandomCustomer(customersArr) {
    let index = Math.floor(Math.random() * customersArr.length);
    let customer = customersArr[index];
    return customer
  }

  render() {
    const customers = this.state.customers;

    return (
      <main>
        <Header customers={this.state.customers} getRandomCustomer={this.getRandomCustomer} />
        <Form />
      </main>
    );
  }

}

export default App;

App.propTypes = {
  customers: PropTypes.array,
  rooms: PropTypes.array,
  bookings: PropTypes.array,
  error: PropTypes.string
}