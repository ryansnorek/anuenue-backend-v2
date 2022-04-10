const router = require("express").Router();

const Store = require("../models/store-model");

router.get("/", (req, res, next) => {
  Store.getAllItems()
    .then((items) => {
      res.json(items);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
