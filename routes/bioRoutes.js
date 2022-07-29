const multer = require('multer');
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

  app.get('/api/members', async (req, res) => {
    const members = await memberModel.find({});

    try {
      res.send(members);
    } catch (err) {
      res.status(500).send(err);
    }
  });
};