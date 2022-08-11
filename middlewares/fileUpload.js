module.exports = () => {
  const multer = require('multer');

  // if(process.env.NODE_ENV === 'production') {
  //   uploadPath = 'client/build/images';
  // } else {
  //   uploadPath = 'client/public/images';
  // }
  const uploadPath = process.env.NODE_ENV === 'production' ? 'client/build/images' : 'client/public/images';
  console.log('upload path:', uploadPath, process.env.NODE_ENV, 'production');

  const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      // if (process.env.NODE_ENV === 'production') {
        cb(null, uploadPath);
      // } else {
      //   cb(null, 'client/public/images');
      //   
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
  };

  const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
  });

  return upload;

}



