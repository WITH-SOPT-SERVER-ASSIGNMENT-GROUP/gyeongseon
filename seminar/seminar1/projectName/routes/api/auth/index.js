var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.send('Not supported');
});

router.use('/signup', require('./signup'))
router.use('/signin', require('./signin'))

module.exports = router;
