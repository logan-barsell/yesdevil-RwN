const mongoose = require('mongoose');
const { Schema } = mongoose;

const MemberSchema = new Schema({
  name: String,
  role: String,
  fbLink: String,
  instaTag: String,
  snapName: String,
  bioPic: String
});

const Member = mongoose.model('Members', MemberSchema);

module.exports = Member;