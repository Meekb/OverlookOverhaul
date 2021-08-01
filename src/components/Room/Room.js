import React from 'react';
import './Room.css';

const Room = ({type, number}) => {
  // return (
  //   <div>
  //     <h2>Residential Suite</h2>
  //     <button>Select</button>
  //     <h2>Suite</h2>
  //     <button>Select</button>
  //     <h2>Junior Suite</h2>
  //     <button>Select</button>
  //     <h2>Single Room</h2>
  //     <button>Select</button>
  //   </div>
  // );
  return (
    <div>
      <h2>{type}</h2>
      <p>{number}</p>
    </div>
  );
}

export default Room;
