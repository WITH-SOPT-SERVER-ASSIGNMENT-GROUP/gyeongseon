var express = require('express');
var router = express.Router();
const BlogController = require('../../controllers/blogController');
const AuthUtil = require('../../module/security/authUtil');

router.use('/articles', require('./articles'));

router.get('/', AuthUtil.checkToken, BlogController.readAll);
router.get('/:blogIdx', AuthUtil.checkToken, BlogController.read);
router.post('/', AuthUtil.checkToken, BlogController.write);
router.put('/:blogIdx', AuthUtil.checkToken, BlogController.update);
router.delete('/:blogIdx', AuthUtil.checkToken, BlogController.delete);
module.exports = router;