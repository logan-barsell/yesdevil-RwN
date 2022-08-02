const multer = require('multer');
const fs = require('fs');
const memberModel = require('../models/Member');


module.exports = app => {

  const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'client/public/images');
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split('/')[1];
      cb(null, `bio-${file.fieldname}-${Date.now()}.${ext}`);
    },
  });

  const multerFilter = (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg, and .jpeg format allowed!'));
    }
  }

  const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
  });


  app.post('/api/addMember', upload.single('bioPic'), async (req, res) => {
    const newMember = {};
    for (let key in req.body) {
      newMember[key] = req.body[key];
    }
    newMember['bioPic'] = `images/${req.file.filename}`;

    const member = new memberModel(newMember);
    try {
      await member.save();
      res.send(member);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.get('/api/deleteMember/:id', async (req, res) => {
    await memberModel.findOneAndDelete({ _id: req.params.id }).then(res => {
      fs.unlink(`client/public/${res.bioPic}`, (err => {
        if (err) {
          console.log(err);
        } else {
          console.log('Deleted image');
        }
      }));
    });
    res.end();
  })

  app.get('/api/members', async (req, res) => {
    const members = await memberModel.find({});
    res.send(members);
  });

  app.post('/api/updateMember/:id', upload.single('bioPic'), async (req, res) => {
    const updatedFile = req.file ? req.file.filename : false;
    const updatedMember = {};
    for (let key in req.body) {
      if (req.body[key] !== '') {
        updatedMember[key] = req.body[key];
      }
    }
    if (updatedFile) {
      updatedMember['bioPic'] = `images/${updatedFile}`;
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