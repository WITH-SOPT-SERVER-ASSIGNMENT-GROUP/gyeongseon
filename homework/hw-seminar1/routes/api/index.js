var express = require('express');
var router = express.Router();

router.use('/cafe', require('./cafe'));
router.use('/blog', require('./blog'));
router.use('/news', require('./news'));

module.exports = router;
