var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('이거슨 블로그 ~ ');
  });

module.exports = router;
