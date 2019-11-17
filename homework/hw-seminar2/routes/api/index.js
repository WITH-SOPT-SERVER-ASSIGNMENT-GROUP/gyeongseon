var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res) {});
router.use('/group', require('./group'));

module.exports = router;
