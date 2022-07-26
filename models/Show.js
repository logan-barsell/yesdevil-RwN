const mongoose = require('mongoose');
const { Schema } = mongoose;

const ShowSchema = new Schema({
  venue: String,
  city: String,
  date: Date,
  time: String,
  price: String,
  link: String,
  poster: String
});

const Show = mongoose.model('Shows', ShowSchema);

module.exports = Show;