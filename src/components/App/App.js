import React, { useState, useEffect } from 'react';
import { Form } from '../Form/Form';
// import RoomsContainer from './RoomsContainer';
import PropTypes from 'prop-types';
import './App.css';


const App = () => {

  const [customers, setCustomers] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');

  const getCustomers = async () => {
    const url = 'http://localhost:3001/api/v1/customers'
    setError('')

    try {
      const response = await fetch(url)
      const customers = await response.json()
      setCustomers(customers.customers)
    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    getCustomers()
  }, []);

  const getRooms = async () => {
    const url = 'http://localhost:3001/api/v1/rooms'
    setError('')

    try {
      const response = await fetch(url)
      const rooms = await response.json()
      setRooms(rooms.rooms)
    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    getRooms()
  }, []); 

  const getBookings = async () => {
    const url = 'http://localhost:3001/api/v1/bookings'
    setError('')

    try {
      const response = await fetch(url)
      const bookings = await response.json()
      setBookings(bookings.bookings)
    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    getBookings()
  }, []);

  const getRandomCustomer = (customers) => {
    const randomCust = ~~(Math.random() * customers.length);
    console.log(randomCust)
    return randomCust
  }

  const [randomCustomer, setRandomCustomer] = useState({})

  useEffect(() => {
    setRandomCustomer(customers[getRandomCustomer(customers)])
    console.log(randomCustomer)
    return randomCustomer
  })
  

  return (
      <div className='app'>
        <header className='header'>
          <h1>Welcome to Overlook Hotel</h1>
          <h2 className='greeting'>Welcome back, {randomCustomer.name}!</h2>
        </header>
        <main>
          <Form />
        </main> 
      </div>
  ) 

}

export default App;

App.propTypes = {
  customers: PropTypes.array,
  rooms: PropTypes.array,
  bookings: PropTypes.array,
  error: PropTypes.string
}