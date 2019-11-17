const express = require('express')
const router = express.Router();
const multer = require('multer');
const upload = require('../config/multer'); // 저장 경로

router.post('/single', upload.single('image'), (req, res) => {
    console.log(req.file);
    console.log(req.body);
    res.send({file: req.file, body: req.body});
});

//하나의 키 값으로 얼마나 받을 것인지. 4 -> 네 개를 만들 수 있다.
router.post('/array', upload.array('photos', 6), (req, res) => {
    console.log(req.files);
    console.log(req.body);
    res.send({file: req.files, body: req.body});
});

var cpUpload = upload.fields([{name: 'thumbnail', maxCount: 2}, {name: 'images', maxCount: 5}])
router.post('/fields', cpUpload, (req, res) => {
    console.log(req.files);
    console.log(req.body);
    res.send({file: req.files, body: req.body});
});


module.exports = router;