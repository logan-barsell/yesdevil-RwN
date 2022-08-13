const multer = require('multer');
const fs = require('fs');
const upload = require('../middlewares/fileUpload');
const memberModel = require('../models/Member');

const filePath = process.env.NODE_ENV === 'production' ? 'client/build/' : 'client/public/';

module.exports = app => {

  app.post('/api/addMember', upload().single('bioPic'), async (req, res) => {
    var img = fs.readFileSync(req.file.path);
    var encode_img = img.toString('base64');
    var final_img = {
        contentType: req.file.mimetype,
        image: new Buffer.from(encode_img, 'base64')
    };
    const newMember = {};
    for (let key in req.body) {
      newMember[key] = req.body[key];
    }
    // newMember['bioPic'] = `images/${req.file.filename}`;
    newMember['bioPic'] = final_img;

    const member = new memberModel(newMember);
    try {
      await member.save();
      res.send(member);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.get('/api/deleteMember/:id', async (req, res) => {
    try {
      console.log(req.params);
      const response = await memberModel.findOneAndDelete({ _id: req.params.id });
      console.log(response);
      fs.unlink(`${filePath}${response.bioPic}`, (err => {
        if (err) {
          console.log(err);
        } else {
          console.log('Deleted image');
        }
      }));
    } catch (err) {
      console.log(err);
    }
    res.end();
  });

  app.get('/api/members', async (req, res) => {
    const members = await memberModel.find({});
    res.send(members);
  });

  app.post('/api/updateMember/:id', upload().single('bioPic'), async (req, res) => {
    console.log("REQUEST", req.body);
    const updatedFile = req.file ? req.file.filename : false;
    const updatedMember = {};
    for (let key in req.body) {
      if (req.body[key] !== '') {
        updatedMember[key] = req.body[key];
      }
    }
    console.log('updated Member:', updatedMember);
    if (updatedFile) {
      updatedMember['bioPic'] = `images/${updatedFile}`;
    }

    await memberModel.findOneAndUpdate({ _id: updatedMember.id },
      updatedMember
    ).then(res => {
      if (updatedFile) {
        fs.unlink(`${filePath}${res.bioPic}`, (err => {
          if (err) {
            console.log(err);
          } else {
            console.log('Deleted previous image');
          }
        }));
      }
    }).catch(err => console.log('HERE IS THE ERROR',err));
    res.end();
  });
};