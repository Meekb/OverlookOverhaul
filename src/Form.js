import React, { Component } from 'react';
// import Error from './Error';
import PropTypes from 'prop-types';
// import RoomsContainer from './RoomsContainer';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      checkin: '',
      error: ''
    }
  }

  handleChange = (event) => {
    console.log(this.state); 
    let dateEntered = event.target.value;
    let newFormat = this.formatCheckin(dateEntered);
    // this.setState({ [event.target.name]: newFormat });
    console.log('date entered', dateEntered)
    console.log('newFormat', newFormat)
    console.log(this.state);
    return newFormat;
  }

  formatCheckin(dateToFormat) {
    const formatMonth = Number(dateToFormat.split('-')[1]);
    const formatDate = Number(dateToFormat.split('-')[2]);
    const formatYear = Number(dateToFormat.split('-')[0]);
    const formattedDate = `${formatMonth}/${formatDate}/${formatYear}`
    return formattedDate;
  }

  // checkError = () => {

  //   const calendar = document.getElementById('calendar');
  //   const dateSelected = calendar.value;
    

  //   this.dateSelected < todaysDate ? true : false
  // }

  render() {
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
              onChange={(event) => this.handleChange(event)}
            />
          </label>
          <p>Pick your room type to check availability:</p>
        </form>
        <section className='room-type-btns'>
          <button >Residential Suite</button>
          <button >Suite</button>
          <button >Junior Suite</button>
          <button >Single Room</button>
        </section>
      </main>
    );
  }
  
}

export default Form;

Form.propTypes = {
  checkin: PropTypes.string,
  date: PropTypes.string,
}