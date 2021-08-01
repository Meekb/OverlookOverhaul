
function fetchCustomers() {
  fetch(`http://localhost:3001/api/v1/customers`)
    .then(data => data.json())
}

  function fetchRooms() {
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
  }
    
  function fetchBookings() {
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


export { fetchCustomers, fetchRooms, fetchBookings }