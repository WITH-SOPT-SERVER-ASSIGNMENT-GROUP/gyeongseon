var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// base : localhost:3000
// localhost:3000/board
router.use('/api', require('./api'));

module.exports = router;
