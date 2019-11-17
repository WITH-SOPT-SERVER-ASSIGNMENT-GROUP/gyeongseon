const encrypt = require('../module/encryption');
const statusCode = require('../module/utils/statusCode');
const resMessage = require('../module/utils/responseMessage');
const util = require('../module/utils/utils');
const User = require('../model/user');

module.exports = {
    login: async (req, res) => {
        const { id, password } = req.body;
        console.log(id, password);
    
        if(!id || !password) {
            res.status(statusCode.BAD_REQUEST).send(util.successFalse(resMessage.NULL_VALUE));
            return;
        }
        User.signin(id, password)
        .then(({code, json}) => { res.status(code).send(json);
        }).catch(err => {
            res.status(statusCode.INTERNAL_SERVER_ERROR).send(authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR));
        });
    },
    signup: async (req, res) => {
        const {id, password, name, email, phone} = req.body;
        if(!id || !password || !name || !email || !phone) {
            const missParameters = Object.entries({id, password, name, email, phone})
            .filter(it => it[1] == undefined).map(it => it[0]).join(',');
            res.status(statusCode.BAD_REQUEST)
            .send(util.successFalse(`${resMessage.NULL_VALUE} ${missParameters}`));
            return;
        }
        encrypt.encrypt(password)
        .then(({salt, hashed}) => User.signup(id, name, hashed, salt, email, phone))
        .then(({code, json}) => res.status(code).send(json))
        .catch(err => {
            console.log(err);
            res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.successFalse(resMessage.INTERNAL_SERVER_ERROR));
        }); 
    }
}