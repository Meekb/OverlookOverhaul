import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import RoomsContainer from './RoomsContainer';
import './Form.css';
import { createEvent } from '@testing-library/react';

export const Form = () => {

  const [checkin, setCheckin] = useState('')
  const [error, setError] = useState(false)

  const formatDate = (date) => {
    let input = date.split('-');
    const formattedDate = `${input[1]}/${input[2]}/${input[0]}`
    checkDateError(formattedDate) 
    return formattedDate;
  }


  const checkDateError = (inputDate) => {
    let today = new Date();
    let dd = today.getDate()
    if (dd < 10) {
      dd = '0' + dd;
    }
    let mm = today.getMonth() + 1;
    if (mm < 10) {
      mm = '0' + mm;
    }
    let yyyy = today.getFullYear()
    today = `${mm}/${dd}/${yyyy}`
    
    let comparison = (inputDate) => {
      const checkinArr = inputDate.split('/')
      console.log('checkinArr', checkinArr)
      const todayArr = today.split('/')
      console.log('todayArr', todayArr)
      if (todayArr[0] > checkinArr[0] || (todayArr[0] === checkinArr[0] && todayArr[1] > checkinArr[1])) {
        setError(true)
        console.log('PUNK ERROR')
      }
    }
    let result = comparison(inputDate);
    return result
  }

    return (
      <main className='main-area' >
        <form>
          <label>
          Check-in Date:
            <input 
              type='date'
              name='checkin'
              className='calendar'
              id='calendar'
              onChange={(event) => setCheckin(formatDate(event.target.value))}
              required
            />
          </label>
          <p>Pick your room type to check availability:</p>
          <section className='room-type-btns'>
            <button >Residential Suite</button>
            <button >Suite</button>
            <button >Junior Suite</button>
            <button>Single Room</button>
          </section>
          {error && <p className='date-error'>Please select a valid check-in date</p>}
        </form>
      </main>
    );
}

Form.propTypes = {
  checkin: PropTypes.string,
  date: PropTypes.string,
}