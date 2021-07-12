import React, { Component } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';
// import RoomsContainer from './RoomsContainer';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      checkin: '',
      error: false
    }
  }

  handleChange(event) {
    console.log(this.state); 
    let dateEntered = event.target.value;
    let formattedDate = this.formatCheckin(dateEntered);
    this.setState({ [event.target.name]: formattedDate });
    this.checkDateError(formattedDate);
    return formattedDate;
  }

  formatCheckin(dateToFormat) {
    const formatMonth = Number(dateToFormat.split('-')[1]);
    const formatDate = Number(dateToFormat.split('-')[2]);
    const formatYear = Number(dateToFormat.split('-')[0]);
    const formattedDate = `${formatMonth}/${formatDate}/${formatYear}`
    return formattedDate;
  }

  determineMonthNum(monthString) {
    const monthObj = {
      'Jan': 1,
      'Feb': 2,
      'Mar': 3,
      'Apr': 4,
      'May': 5,
      'Jun': 6,
      'Jul': 7,
      'Aug': 8,
      'Sep': 9,
      'Oct': 10,
      'Nov': 11,
      'Dec': 12
    }
    let monthNum = monthObj[monthString];
    return monthNum
  }

  checkDateError = (formattedDate) => {
    const dateCompareFormat = formattedDate.split('/')
    const checkinMonth = parseInt(dateCompareFormat[0]);
    const checkinDate = parseInt(dateCompareFormat[1]);
    const checkinYear = parseInt(dateCompareFormat[2]);
    const today = new Date().toDateString();
    const monthToConvert = today.split(' ')[1]
    const monthNow = this.determineMonthNum(monthToConvert);
    const dateNow = today.split(' ')[2]
    const yearNow = today.split(' ')[3]
    const compareData = [monthNow, parseInt(dateNow), parseInt(yearNow)]
    if ( (checkinMonth < compareData[0]) || (checkinMonth === compareData[0] && checkinDate < compareData[1]) )  {
      this.setState( {error: true} )
    }
  }

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
              required
            />
          </label>
          <p>Pick your room type to check availability:</p>
          <section className='room-type-btns'>
            <button >Residential Suite</button>
            <button >Suite</button>
            <button >Junior Suite</button>
            <button onClick={(e) => console.log(this.state)} >Single Room</button>
          </section>
          {this.state.error && <Error />}
        </form>
      </main>
    );
  }
  
}

export default Form;

Form.propTypes = {
  checkin: PropTypes.string,
  date: PropTypes.string,
}