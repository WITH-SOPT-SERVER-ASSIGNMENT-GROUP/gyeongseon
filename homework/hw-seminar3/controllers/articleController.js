const statusCode = require('../module/utils/statusCode');
const resMessage = require('../module/utils/responseMessage');
const util = require('../module/utils/utils');
const Article = require('../model/articleModel');

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
        const articleIdx = req.params.articleIdx;
        Article.read(articleIdx)
        .then(({code, json}) => res.status(code).send(json))
        .catch(err => {
            console.log(err);
            res.status(statusCode.INTERNAL_SERVER_ERROR)
            .send(util.successFalse(resMessage.INTERNAL_SERVER_ERROR));
        });
    },
    write: async (req, res) => {
        const blogIdx = 1;
        const userIdx = req.decoded.idx;
        const {title, content} = req.body;
        if(!blogIdx || !userIdx || !title || !content) {
            const missParameters = Object.entries({blogIdx, userIdx, title, content})
            .filter(it => it[1] == undefined).map(it => it[0]).join(',');
            res.status(statusCode.NO_CONTENT)
            .send(util.successFalse(`${resMessage.NULL_VALUE} ${missParameters}`));
            return;
        }
        const images = req.files;
        console.log(images);
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
        const articleIdx = req.params.articleIdx;
        const {title, content} = req.body;
        console.log(title, content);
        const images = req.files;
        if(!title || !content) {
            return res.status(statusCode.NO_CONTENT).send(util.successFalse(resMessage.NULL_VALUE));
        }
        Article.update({articleIdx, title, content, images})
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
        const articleIdx = req.params.articleIdx;
        Article.delete({articleIdx})
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