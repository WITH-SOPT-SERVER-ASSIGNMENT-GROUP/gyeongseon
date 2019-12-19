var express = require('express');
var router = express.Router();
const BlogController = require('../../controllers/blogController');

router.get('/', BlogController.readAll);
router.get('/:blogIdx', BlogController.read);
router.post('/', BlogController.write);
router.put('/:blogIdx', BlogController.update);
router.delete('/:blogIdx', BlogController.delete);

router.use('/articles', require('./articles'));

module.exports = router;