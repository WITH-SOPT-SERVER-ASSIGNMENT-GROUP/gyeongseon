var express = require('express');
var router = express.Router();

//localhost:3000/board
router.get('/', (req, res) => {
    res.send('게시판입니다.');
});

module.exports = router;
