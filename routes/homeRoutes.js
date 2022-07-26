const showModel = require('../models/Show');

module.exports = app => {
  app.post('/api/addShow', async (req, res) => {
    const show = new showModel(req.body);

    try {
      await show.save();
      res.send(show);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.get('/api/shows', async (req, res) => {
    const shows = await showModel.find({});

    try {
      res.send(shows);
    } catch (err) {
      res.status(500).send(err);
    }
  });
};