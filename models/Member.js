const mongoose = require('mongoose');
const { Schema } = mongoose;

const MemberSchema = new Schema({
  name: String,
  role: String,
  facebook: String,
  instagram: String,
  snapchat: String,
  pic: String
});

const Member = mongoose.model('Members', MemberSchema);

module.exports = Member;