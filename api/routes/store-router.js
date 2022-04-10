const router = require("express").Router();

const Store = require("../data/store-model");

router.get("/", (req, res, next) => {
  const storeItems = Store.getAllItems();
  res.json(storeItems);
});

module.exports = router;
