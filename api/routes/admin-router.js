const router = require('express').Router();

const { passcode, token } = require('../data/admin-data');

router.post('/', (req, res, next) => {
  try {
    const { pass } = req.body;
    if (pass === passcode) {
      res.json(token);
    } else {
      next({
        message: 'invalid',
      });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
