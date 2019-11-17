var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('이거슨 뉴스페이지를 좋아요한 페이지 ~ ');
  });

module.exports = router;
