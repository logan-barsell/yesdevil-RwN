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

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use('/public', express.static(`public`));

require('./routes/homeRoutes')(app);
require('./routes/bioRoutes')(app);


app.get('/', (req, res) => {
  res.send('EXPRESS ===> REACT');
});

if (process.env.NODE_ENV === 'production') {
  // express will serve up production assets like our main.js file or main.css file
  app.use(express.static('client/build'));

  //express will serve up the index.html file if it doesnt recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

