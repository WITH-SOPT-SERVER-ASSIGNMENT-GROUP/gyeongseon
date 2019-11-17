var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('이거슨 뉴스페이지 ~ ');
  });

router.use('/like', require('./like'));

module.exports = router;
