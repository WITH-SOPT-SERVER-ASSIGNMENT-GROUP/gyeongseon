var express = require('express');
var router = express.Router();

router.use('/blogs', require('./blogs'));
router.use('/users', require('./users'));

module.exports = router;
