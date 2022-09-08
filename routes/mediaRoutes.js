const MediaImage = require('../models/MediaImage');

module.exports = app => {

    app.get('/api/getMediaImages', async (req, res) => {
        try {
            const images = await MediaImage.find().sort({"name": -1});
            res.status(200).send(images);
        } catch (err) {
            res.status(500).send(err);
        }
    });
    
    app.get('/api/removeMediaImage/:id', async (req, res) => {
        try {
            await MediaImage.findOneAndDelete({_id: req.params.id});
            res.status(200).send('deleted image');
        } catch (err) {
            res.status(500).send(err);
        }
    })
    
    app.post('/api/addMediaImage', async (req, res) => {
        const image = new MediaImage(req.body);
        try {
            await image.save();
            res.status(200).send(image);
        } catch (err) {
            res.status(500).send(err);
        }
    });

}