const router = require('express').Router();

router.post('/', (req, res) => {
    res.json('POST admin')
})

module.exports = router;