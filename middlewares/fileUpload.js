module.exports = () => {
  const multer = require('multer');

  const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      if (file.fieldname === 'bioPic') {
        cb(null, 'client/public/images/bio');
      } else if (file.fieldname === 'poster') {
        cb(null, 'client/public/images/shows');
      }
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split('/')[1];
      cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
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

  return upload;

}



