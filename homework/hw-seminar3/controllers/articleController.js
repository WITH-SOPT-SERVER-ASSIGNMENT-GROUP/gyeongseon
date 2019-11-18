const statusCode = require('../module/utils/statusCode');
const resMessage = require('../module/utils/responseMessage');
const util = require('../module/utils/utils');
const Article = require('../model/article');

module.exports = {
    readAll: async (req, res) => {
        Article.readAll()
        .then(({code, json}) => res.status(code).send(json))
        .catch(err => {
            console.log(err);
            res.status(statusCode.INTERNAL_SERVER_ERROR)
            .send(util.successFalse(resMessage.INTERNAL_SERVER_ERROR));
        });
    },
    read: async (req, res) => {
        const blogIdx = req.params.blogIdx;
        Article.read(blogIdx)
        .then(({code, json}) => res.status(code).send(json))
        .catch(err => {
            console.log(err);
            res.status(statusCode.INTERNAL_SERVER_ERROR)
            .send(util.successFalse(resMessage.INTERNAL_SERVER_ERROR));
        });
    },
    write: async (req, res) => {
        const blogIdx = req.params.blogIdx;
        const {userIdx, title, content} = req.body;
        const images = req.files;
        Article.write({userIdx, title, content, blogIdx, images})
        .then(({code, json}) => 
        {
            res.status(code).send(json);
        })
        .catch(err => {
            res.status(statusCode.INTERNAL_SERVER_ERROR)
            .send(util.successFalse(resMessage.INTERNAL_SERVER_ERROR));
        });
    },
    update: async (req, res) => {
        const blogIdx = req.params.blogIdx;
        const {articleIdx, title, content} = req.body;
        Article.update({articleIdx, title, content, blogIdx})
        .then(({code, json}) => 
        {
            res.status(code).send(json);
        })
        .catch(err => {
            res.status(statusCode.INTERNAL_SERVER_ERROR)
            .send(util.successFalse(resMessage.INTERNAL_SERVER_ERROR));
        });
    },
    delete: async (req, res) => {
        const blogIdx = req.params.blogIdx;
        const articleIdx = req.body.articleIdx;
        Article.delete({articleIdx, blogIdx})
        .then(({code, json}) => 
        {
            res.status(code).send(json);
        })
        .catch(err => {
            res.status(statusCode.INTERNAL_SERVER_ERROR)
            .send(util.successFalse(resMessage.INTERNAL_SERVER_ERROR));
        });
    },
}