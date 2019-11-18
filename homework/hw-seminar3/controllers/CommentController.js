const statusCode = require('../module/utils/statusCode');
const resMessage = require('../module/utils/responseMessage');
const util = require('../module/utils/utils');
const Comment = require('../model/comment');

module.exports = {
    readAll: async (req, res) => {
        Comment.readAll()
        .then(({code, json}) => res.status(code).send(json))
        .catch(err => {
            console.log(err);
            res.status(statusCode.INTERNAL_SERVER_ERROR)
            .send(util.successFalse(resMessage.INTERNAL_SERVER_ERROR));
        });
    },
    read: async (req, res) => {
        const articleIdx = req.params.articleIdx;
        Comment.read(articleIdx)
        .then(({code, json}) => res.status(code).send(json))
        .catch(err => {
            console.log(err);
            res.status(statusCode.INTERNAL_SERVER_ERROR)
            .send(util.successFalse(resMessage.INTERNAL_SERVER_ERROR));
        });
    },
    write: async (req, res) => {
        const articleIdx = req.params.articleIdx;
        const {userIdx, content} = req.body;
        Comment.write({userIdx, articleIdx, content})
        .then(({code, json}) => 
        {
            res.status(code).send(json);
        })
        .catch(err => {
            res.status(statusCode.INTERNAL_SERVER_ERROR)
            .send(util.successFalse(resMessage.INTERNAL_SERVER_ERROR));
        });
    }
}