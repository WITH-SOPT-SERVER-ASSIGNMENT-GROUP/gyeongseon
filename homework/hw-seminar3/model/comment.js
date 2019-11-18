const statusCode = require('../module/utils/statusCode');
const resMessage = require('../module/utils/responseMessage');
const util = require('../module/utils/utils');
const pool = require('../module/pool');
const moment = require('moment');
const table = 'comment';

const comment = {
    readAll: () => {
        const query = `SELECT * FROM ${table}`;
        console.log(query);
        return pool.queryParam_None(query)
            .then(async (result) => {
                console.log(result);
                return {
                    code: statusCode.OK,
                    json: util.successTrue(resMessage.COMMENT_READ_ALL_SUCCESS, result)
                };
            })
            .catch(err => {
                console.log(err);
                throw err;
            });
    },
    read: (articleIdx) => {
        const query = `SELECT * FROM ${table} WHERE articleIdx = '${articleIdx}'`;
        console.log(query);
        return pool.queryParam_None(query)
            .then(async (result) => {
                console.log(result);
                return {
                    code: statusCode.OK,
                    json: util.successTrue(resMessage.COMMENT_READ_SUCCESS, result)
                };
            })
            .catch(err => {
                console.log(err);
                throw err;
            });
    },
    write: ({userIdx, articleIdx, content}) => {
        const createdTime = moment().format('YYYY-MM-DD hh:mm:ss');
        const fields = 'userIdx, articleIdx, content, created';
        const questions = `?, ?, ?, ?`;
        const values = [userIdx, articleIdx, content, createdTime];
        return pool.queryParam_Parse(`INSERT INTO ${table}(${fields}) VALUES(${questions})`, values)
            .then(async (result) => {
                console.log('[article.js]  ', result);
                if (!result) {
                    return {
                        code: statusCode.DB_ERROR,
                        json: util.successFalse(resMessage.DB_ERROR)
                    };
                }
                return {
                    code: statusCode.OK,
                    json: util.successTrue(resMessage.COMMENT_CREATE_SUCCESS)
                };
            })
            .catch(err => {
                console.log('[article.js]  ', err);
                throw err;
            });
    }
}

module.exports = comment;