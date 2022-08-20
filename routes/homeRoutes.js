const fs = require('fs');
const upload = require('../middlewares/fileUpload');
const showModel = require('../models/Show');

const filePath = process.env.NODE_ENV === 'production' ? 'client/build/' : 'client/public/';

module.exports = app => {

  app.post('/api/addShow', upload().single('poster'), async (req, res) => {
    const img = fs.readFileSync(req.file.path);
    const encode_img = img.toString('base64');
    const final_img = {
        contentType: req.file.mimetype,
        image: new Buffer.from(encode_img, 'base64')
    };
    const newShow = {};
    for (let key in req.body) {
      newShow[key] = req.body[key];
    }
    newShow['poster'] = {img: final_img};
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

  app.post('/api/updateShow/:id', upload().single('poster'), async (req, res) => {
    const updatedFile = req.file ? req.file.filename : false;
    const updatedShow = {};
    for (let key in req.body) {
      if (req.body[key] !== '') {
        updatedShow[key] = req.body[key];
      }
    }
    if (updatedFile) {
      const img = fs.readFileSync(req.file.path);
      const encode_img = img.toString('base64');
      const final_img = {
          contentType: req.file.mimetype,
          image: new Buffer.from(encode_img, 'base64')
      };
      updatedShow['poster'] = { img: final_img };
    }

    await showModel.findOneAndUpdate({ _id: updatedShow.id },
      updatedShow
    ).then(res => {
      if (updatedFile) {
        fs.unlink(`${filePath}${res.poster}`, (err => {
          if (err) {
            console.log(err);
          } else {
            console.log('Deleted image');
          }
        }));
      }
    });
    res.end();
  });

  app.get('/api/deleteShow/:id', async (req, res) => {
    await showModel.findOneAndDelete({ _id: req.params.id }).then(res => {
      fs.unlink(`${filePath}${res.poster}`, (err => {
        if (err) {
          console.log(err);
        } else {
          console.log('Deleted image');
        }
      }));
    });
    res.end();
  })
};