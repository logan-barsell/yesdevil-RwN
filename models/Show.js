const mongoose = require('mongoose');
const { Schema } = mongoose;

const ShowSchema = new Schema({
  poster: String,
  venue: String,
  city: String,
  date: Date,
  doors: String,
  showtime: String,
  price: String,
  tixlink: String
});

const Show = mongoose.model('Shows', ShowSchema);

module.exports = Show;