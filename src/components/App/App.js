import React, { useState, useEffect } from 'react';
import { Form } from '../Form/Form';
// import RoomsContainer from './RoomsContainer';
import PropTypes from 'prop-types';
// import { fetchCustomers, fetchRooms, fetchBookins } from '../apiCalls.js';
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
      setCustomers(customers)
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
      setRooms(rooms)
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
      setBookings(bookings)
    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    getBookings()
  }, []);
  

  return (
      <div className='app'>
        <header className='header'>
          <h1>Welcome to Overlook Hotel</h1>
          <h2 className='greeting'>Welcome back, USER!</h2>
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