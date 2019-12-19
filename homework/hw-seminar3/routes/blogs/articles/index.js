var express = require('express');
var router = express.Router();
const ArticleController = require('../../../controllers/articleController');
const AuthUtil = require('../../../module/security/authUtil');
const upload = require('../../../config/multer');

router.get('/', AuthUtil.checkToken, ArticleController.readAll);
router.get('/:articleIdx', AuthUtil.checkToken, ArticleController.read);
router.post('/', AuthUtil.checkToken, upload.array('images', 4), ArticleController.write);
router.put('/:articleIdx', AuthUtil.checkToken, upload.array('images', 4), ArticleController.update);
router.delete('/:articleIdx', AuthUtil.checkToken, ArticleController.delete);

module.exports = router;