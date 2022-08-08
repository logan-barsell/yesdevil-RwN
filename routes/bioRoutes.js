const multer = require('multer');
const fs = require('fs');
const upload = require('../middlewares/fileUpload');
const memberModel = require('../models/Member');


module.exports = app => {

  app.post('/api/addMember', upload().single('bioPic'), async (req, res) => {
    const newMember = {};
    for (let key in req.body) {
      newMember[key] = req.body[key];
    }
    newMember['bioPic'] = `images/bio/${req.file.filename}`;

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
      fs.unlink(`client/public/${response.bioPic}`, (err => {
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
    const updatedFile = req.file ? req.file.filename : false;
    const updatedMember = {};
    for (let key in req.body) {
      if (req.body[key] !== '') {
        updatedMember[key] = req.body[key];
      }
    }
    if (updatedFile) {
      updatedMember['bioPic'] = `images/bio/${updatedFile}`;
    }

    await memberModel.findOneAndUpdate({ _id: updatedMember.id },
      updatedMember
    ).then(res => {
      if (updatedFile) {
        fs.unlink(`client/public/${res.bioPic}`, (err => {
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
};