const statusCode = require('../module/utils/statusCode');
const resMessage = require('../module/utils/responseMessage');
const util = require('../module/utils/utils');
const Blog = require('../model/blogModel');

module.exports = {
    readAll: async (req, res) => {
        Blog.readAll()
        .then(({code, json}) => res.status(code).send(json))
        .catch(err => {
            console.log(err);
            res.status(statusCode.INTERNAL_SERVER_ERROR)
            .send(util.successFalse(resMessage.INTERNAL_SERVER_ERROR));
        });
    },
    read: async (req, res) => {
        const blogIdx = req.params.blogIdx;
        Blog.read(blogIdx)
        .then(({code, json}) => res.status(code).send(json))
        .catch(err => {
            console.log(err);
            res.status(statusCode.INTERNAL_SERVER_ERROR)
            .send(util.successFalse(resMessage.INTERNAL_SERVER_ERROR));
        });
    },
    write: async (req, res) => {
        const {blogName, owner} = req.body;
        Blog.write({blogName, owner})
        .then(({code, json}) => res.status(code).send(json))
        .catch(err => {
            console.log(err);
            res.status(statusCode.INTERNAL_SERVER_ERROR)
            .send(util.successFalse(resMessage.INTERNAL_SERVER_ERROR));
        });
    },
    update: async (req, res) => {
        const blogIdx = req.params.blogIdx;
        const {blogName} = req.body;
        if(!blogIdx || !blogName){
            return res.status(statusCode.NO_CONTENT)
            .send(util.successFalse(resMessage.NULL_VALUE));
        }
        Blog.update({blogIdx, blogName})
        .then(({code, json}) => res.status(code).send(json))
        .catch(err => {
            console.log(err);
            res.status(statusCode.INTERNAL_SERVER_ERROR)
            .send(util.successFalse(resMessage.INTERNAL_SERVER_ERROR));
        });
    },
    delete: async (req, res) => {
        const blogIdx = req.params.blogIdx;
        console.log(blogIdx);
        if(!blogIdx){
            return res.status(statusCode.NO_CONTENT)
            .send(util.successFalse(resMessage.NULL_VALUE));
        }
        Blog.delete(blogIdx)
        .then(({code, json}) => res.status(code).send(json))
        .catch(err => {
            console.log(err);
            res.status(statusCode.INTERNAL_SERVER_ERROR)
            .send(util.successFalse(resMessage.INTERNAL_SERVER_ERROR));
        });
    },
}