const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log('connected successfully');
});

const app = express();
// app.use(express.json());

app.use(bodyParser.urlencoded({
  extended: true,
}));

require('./routes/homeRoutes')(app);
require('./routes/bioRoutes')(app);


app.get('/', (req, res) => {
  res.send('EXPRESS ===> REACT');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

