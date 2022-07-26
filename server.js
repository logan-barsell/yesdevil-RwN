const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://logan:Nm6B7w6ZHSGHBtXq@cluster0.1sntm53.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log('connected successfully');
});

const app = express();
app.use(express.json());

require('./routes/homeRoutes')(app);
require('./routes/bioRoutes')(app);


app.get('/', (req, res) => {
  res.send('EXPRESS ===> REACT');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

