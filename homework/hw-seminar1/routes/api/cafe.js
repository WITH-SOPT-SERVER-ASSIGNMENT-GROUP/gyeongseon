var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('이거슨 카페 ~ ');
  });

module.exports = router;
