var express = require('express');
var router = express.Router();
const BlogController = require('../controllers/blogController');
const ArticleController = require('../controllers/articleController');
const CommentController = require('../controllers/commentController');
const upload = require('../config/multer');

router.get('/', BlogController.readAll);
router.post('/', BlogController.write);
router.put('/', BlogController.update);
router.delete('/', BlogController.delete);

router.get('/articles', ArticleController.readAll);
router.get('/:blogIdx/articles', ArticleController.read);
router.post('/:blogIdx/articles', upload.array('images', 4), ArticleController.write);
router.put('/:blogIdx/articles', ArticleController.update);
router.delete('/:blogIdx/articles', ArticleController.delete);

router.get('/articles/comments', CommentController.readAll);
router.get('/articles/:articleIdx/comments', CommentController.read);
router.post('/articles/:articleIdx/comments', CommentController.write);


module.exports = router;