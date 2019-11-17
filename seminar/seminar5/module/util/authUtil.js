const jwt = require('../jwt');
const resMessage = require('./responseMessage');
const statusCode = require('./statusCode');
const util = require('./utils');

const authUtil = {
    LoggedIn: async(req, res, next) => {
        var token = req.headers.token;
        // 1. token이 존재하는 지 확인
        if ( !token ) {
            return res.status(statusCode.BAD_REQUEST).send(util.successFalse(resMessage.EMPTY_TOKEN));
        }
        // 2. token 유효한지 확인 
        const result = jwt.verify(token);
        if(result == -1) {
            return res.status(statusCode.UNAUTHORIZED).send(util.successFalse(resMessage.EXPIRED_TOKEN));
        }
        if(result == -2) {
            return res.status(statusCode.UNAUTHORIZED).send(util.successFalse(resMessage.INVALID_TOKEN));
        }
        const userIdx = result.idx;
        if( !userIdx ){
            return res.status(statusCode.BAD_REQUEST).send(util.successFalse(resMessage.NULL_VALUE));
        }
        req.decoded = userIdx;
        next();
    }
}
module.exports = authUtil;