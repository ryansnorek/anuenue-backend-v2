const router = require("express").Router();

const store = require("../data/store-data");

router.get("/", (req, res, next) => {
  res.json(store);
});

module.exports = router;
