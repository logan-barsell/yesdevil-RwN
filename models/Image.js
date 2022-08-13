const mongoose = require('mongoose');
const { Schema } = mongoose;

const ImageSchema = new Schema({
    img: { data: Buffer, contentType: String }
});

const Image = mongoose.model("Images", ImageSchema);

module.exports = Image;