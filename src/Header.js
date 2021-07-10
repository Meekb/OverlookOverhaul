import React from 'react';
import './Header.css';

const Header = ({customers, getRandomCustomer}) => {
  const customer = getRandomCustomer(customers);
  console.log(customer)

  return (
    <header className='header'>
      <h1>Welcome to Overlook Hotel</h1>
      <h2 className='greeting'>Welcome back, !</h2>
    </header>
  );
}

export default Header;

