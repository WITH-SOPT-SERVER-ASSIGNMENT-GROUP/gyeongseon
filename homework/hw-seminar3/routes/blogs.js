var express = require('express');
var router = express.Router();
const BlogController = require('../controllers/blogController');
const ArticleController = require('../controllers/articleController');

router.get('/', BlogController.readAll);
router.post('/', BlogController.write);
router.put('/', BlogController.update);
router.delete('/', BlogController.delete);

router.get('/articles', ArticleController.readAll);
router.get('/:blogIdx/articles', ArticleController.read);
router.post('/:blogIdx/articles', ArticleController.write);
router.put('/:blogIdx/articles', ArticleController.update);
router.delete('/:blogIdx/articles', ArticleController.delete);


module.exports = router;