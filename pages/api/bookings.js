const bookings = require('../../sf_booking_cancellation_report');
// console.log(bookings.bookings.attributes);

export default (req, res) => {
  res.status(200).json(bookings.bookings.data)
}
