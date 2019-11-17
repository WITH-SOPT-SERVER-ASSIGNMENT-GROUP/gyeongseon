const statusCode = require('../module/utils/statusCode');
const resMessage = require('../module/utils/responseMessage');
const util = require('../module/utils/utils');
const pool = require('../module/pool');
const moment = require('moment');
const table = 'article';

const board = {
    readAll: () => {
        const query = `SELECT * FROM ${table}`;
        console.log(query);
        return pool.queryParam_None(query)
            .then(async (result) => {
                console.log(result);
                return {
                    code: statusCode.OK,
                    json: util.successTrue(resMessage.BOARD_READ_ALL_SUCCESS, result)
                };
            })
            .catch(err => {
                console.log(err);
                throw err;
            });
    },
    read: (blogIdx) => {
        const query = `SELECT * FROM ${table} WHERE articleIdx = '${blogIdx}'`;
        console.log(query);
        return pool.queryParam_None(query)
            .then(async (result) => {
                console.log(result);
                return {
                    code: statusCode.OK,
                    json: util.successTrue(resMessage.BOARD_READ_SUCCESS, result)
                };
            })
            .catch(err => {
                console.log(err);
                throw err;
            });
    },
    write: ({userIdx, title, content}) => {
        const createdTime = moment().format('YYYY-MM-DD hh:mm:ss');
        const fields = 'userIdx, title, content, created';
        const questions = `?, ?, ?, ?`;
        const values = [userIdx, title, content, createdTime];
        return pool.queryParam_Parse(`INSERT INTO ${table}(${fields}) VALUES(${questions})`, values)
            .then(async (result) => {
                console.log(result);
                return {
                    code: statusCode.OK,
                    json: util.successTrue(resMessage.BOARD_CREATE_SUCCESS)
                };
            })
            .catch(err => {
                console.log(err);
                throw err;
            });
    }

}

module.exports = board;