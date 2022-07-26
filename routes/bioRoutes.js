const memberModel = require('../models/Member');

module.exports = app => {
  app.post('/api/addMember', async (req, res) => {
    const member = new memberModel(req.body);

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