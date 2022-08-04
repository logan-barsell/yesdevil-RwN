const upload = require('../middlewares/fileUpload');
const showModel = require('../models/Show');

module.exports = app => {

  app.post('/api/addShow', upload().single('poster'), async (req, res) => {
    const newShow = {};
    for (let key in req.body) {
      newShow[key] = req.body[key];
    }
    newShow['poster'] = `images/${req.file.filename}`;
    console.log(newShow);
    const show = new showModel(newShow);

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