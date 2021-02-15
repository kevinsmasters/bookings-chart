const numbers = require('../../sf_booking_cancellation_report');

export default (req, res) => {
  res.status(200).json(numbers)
}
