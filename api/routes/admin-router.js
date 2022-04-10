const router = require("express").Router();

const passcode = require("../data/admin-data");

router.post("/", (req, res, next) => {
  try {
    const { pass } = req.body;
    res.json(pass === passcode);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
