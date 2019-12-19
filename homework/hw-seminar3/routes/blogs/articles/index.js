var express = require('express');
var router = express.Router();

const ArticleController = require('../../../controllers/articleController');
const upload = require('../../../config/multer');

router.get('/', ArticleController.readAll);
router.get('/:articleIdx', ArticleController.read);
router.post('/', upload.array('images', 4), ArticleController.write);
router.put('/:articleIdx',upload.array('images', 4), ArticleController.update);
router.delete('/:articleIdx', ArticleController.delete);

module.exports = router;