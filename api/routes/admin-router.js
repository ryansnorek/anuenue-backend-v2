const router = require("express").Router();

const { passcode, token } = require("../data/admin-data");
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

module.exports = router;
