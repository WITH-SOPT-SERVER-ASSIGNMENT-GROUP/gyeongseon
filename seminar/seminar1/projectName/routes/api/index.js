var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.send('api');
});

// base : localhost:3000
// localhost:3000/board
router.use('/board', require('./board'));

// localhost:3000/auth
// localhost:3000/auth/signup
// localhost:3000/auth/signin
router.use('/auth', require('./auth'));
// 원래 './auth/index로 해야하지만 index는 생략 가능하다.

module.exports = router;
