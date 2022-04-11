const router = require("express").Router();

const { passcode, token } = require("../data/admin-data");
const { upload } = require("../middleware/upload-middleware");
const Admin = require("../models/admin-model");

router.post("/", (req, res, next) => {
  const { pass } = req.body;

  if (pass === passcode) {
    res.json(token);
  } else {
    next({
      message: "invalid",
    });
  }
});

router.put("/items/:id", (req, res, next) => {
  const { id } = req.params;

  Admin.updateItem(id, req.body)
    .then((item) => {
      res.json({ updated: item });
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/upload/:id", upload.single("image"), (req, res, next) => {
  const { id } = req.params;
  const image = {
    pic: req.file,
    // image: req.file.filename,
  };

  Admin.insertImage(id, image)
    .then((res) => {
      res.json({ updated: res });
    })
    .catch((err) => {
      res.sendFile(req.file);
      next(err);
    });
});

module.exports = router;
