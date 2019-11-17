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
        const blogIdx = req.params.id;
        Article.read(blogIdx)
        .then(({code, json}) => res.status(code).send(json))
        .catch(err => {
            console.log(err);
            res.status(statusCode.INTERNAL_SERVER_ERROR)
            .send(util.successFalse(resMessage.INTERNAL_SERVER_ERROR));
        });
    },
    write: async (req, res) => {
        // const blogIdx = req.params.id;
        const {userIdx, title, content} = req.body;
        Article.write({userIdx, title, content})
        .then(({code, json}) => res.status(code).send(json))
        .catch(err => {
            console.log(err);
            res.status(statusCode.INTERNAL_SERVER_ERROR)
            .send(util.successFalse(resMessage.INTERNAL_SERVER_ERROR));
        });
    },
    update: async (req, res) => {
    },
    delete: async (req, res) => {
    },
}