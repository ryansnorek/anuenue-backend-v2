const router = require("express").Router();

const { passcode, token } = require("../data/admin-data");
// const { upload } = require("../middleware/upload-middleware");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const Admin = require("../models/admin-model");

router.post("/", (req, res, next) => {
  const { pass } = req.body;

  if (pass === passcode) {
    res.json(token);
  } else {
    res.json({
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
const fs = require("fs");

router.post("/upload/:id", upload.single("image"), async (req, res, next) => {
  const { id } = req.params;
  console.log(req.file);
  // const bitmap = fs.readFileSync(req.file.filename);

  // const base64 = new Buffer(bitmap).toString('base64');
  // console.log(bitmap, "bitmapppppp-==--=-=")
  // console.log(base64);

  // const image = {
  //   image: req.file.filename,
  // };

  // Admin.insertImage(id, {image: base64})
  //   .then((res) => {
  //     res.json({ updated: res });
  //   })
  //   .catch((err) => {
  //     next(err);
  //   });
});

router.delete("/items/:id", async (req, res, next) => {
  Admin.deleteItem(req.params.id)
    .then((res) => {
      res.json(res.data);
    })
    .catch((err) => next(err));
});

module.exports = router;
