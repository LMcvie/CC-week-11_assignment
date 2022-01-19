const baseURL = 'http://localhost:5000/api/bookings/';

const BookingService =  {
  getBookings() {
    return fetch(baseURL)
      .then(res => res.json());
  },

  addBooking(booking) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(booking),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  updateBooking(booking) {
    const updatedBooking = (({name,email,checked_in}) =>({name,email,checked_in}))(booking);
    return fetch(baseURL + booking._id, {
       method: 'PUT',
      body: JSON.stringify(updatedBooking),
       headers: {
        'Content-Type': 'application/json'
       }
    })
      .then(res => res.json());
  },

  deleteBooking(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    });
  }
};

export default BookingService;