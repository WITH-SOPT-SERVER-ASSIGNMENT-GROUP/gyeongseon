var express = require('express');
var router = express.Router();

const ArticleController = require('../../../controllers/articleController');
const CommentController = require('../../../controllers/commentController');
const upload = require('../../../config/multer');

router.get('/comments', CommentController.readAll);
router.get('/:articleIdx/comments', CommentController.read);
router.post('/:articleIdx/comments', CommentController.write);

module.exports = router;