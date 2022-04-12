const multer = require("multer");
const path = require("path");

const fileFilter = (req, file, cb) => {
  console.log(file)
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = {
  storage,
  upload,
};
