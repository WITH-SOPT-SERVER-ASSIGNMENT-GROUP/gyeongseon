const statusCode = require('../module/utils/statusCode');
const resMessage = require('../module/utils/responseMessage');
const util = require('../module/utils/utils');
const pool = require('../module/pool');
const moment = require('moment');
const table = 'article';
const imageTable = 'articleImg';

const article = {
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
        const query = `SELECT * FROM ${table} WHERE blogIdx = '${blogIdx}'`;
        // const imageQuery = `SELECT * FROM ${imageTable} WHERE blogIdx = '${blogIdx}'`;
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
    write: ({
        userIdx,
        title,
        content,
        blogIdx,
        images
    }) => {
        const createdTime = moment().format('YYYY-MM-DD hh:mm:ss');
        var fields = 'userIdx, title, content, created, blogIdx';
        var questions = `?, ?, ?, ?, ?`;
        const values = [userIdx, title, content, createdTime, blogIdx];
        const query = `INSERT INTO ${table}(${fields}) VALUES(${questions})`;
        // const imageQuery = 
        return pool.Transaction(async (connection) => {
                const queryResult = await connection.query(query, values);
                console.log('queryResult  : ', queryResult);
                const articleIdx = queryResult.insertId;
                fields = 'articleIdx, image';
                questions = '?, ?';
                for (i = 0; i < images.length; i++) {
                    console.log('images : ', images)
                    await connection.query(`INSERT INTO ${imageTable} (${fields}) VALUES(${questions})`, [articleIdx, images[i].location]);
                }
            }).then(async (result) => {
                console.log('[article.js]  ', result);
                if (!result) {
                    return {
                        code: statusCode.DB_ERROR,
                        json: util.successFalse(resMessage.DB_ERROR)
                    };
                }
                return {
                    code: statusCode.OK,
                    json: util.successTrue(resMessage.BOARD_CREATE_SUCCESS)
                };
            }).catch(err => {
                console.log('[article.js]  ', err);
                throw err;
            });
    },
    update: ({
        articleIdx,
        title,
        content,
        blogIdx
    }) => {
        const updatedTime = moment().format('YYYY-MM-DD hh:mm:ss');
        const values = [title, content, updatedTime];
        const query = `UPDATE ${table} SET title = ?, content = ?, created = ? WHERE blogIdx = '${blogIdx}' AND articleIdx = '${articleIdx}'`;
        return pool.queryParam_Parse(query, values)
            .then(async (result) => {
                console.log('[article.js]  ', result);
                if (!result) {
                    return {
                        code: statusCode.DB_ERROR,
                        json: util.successFalse(resMessage.DB_ERROR)
                    };
                }
                if (result.changedRows == 0) {
                    return {
                        code: statusCode.DB_ERROR,
                        json: util.successFalse("변경 사항이 없습니다. 입력 값을 확인해 주세요.")
                    };
                }
                return {
                    code: statusCode.OK,
                    json: util.successTrue(resMessage.BOARD_UPDATE_SUCCESS)
                };
            })
            .catch(err => {
                console.log('[article.js]  ', err);
                throw err;
            });
    },
    delete: ({
        articleIdx,
        blogIdx
    }) => {
        const query = `DELETE FROM ${table} WHERE blogIdx = '${blogIdx}' AND articleIdx = '${articleIdx}'`;
        console.log(query);
        return pool.queryParam_None(query)
            .then(async (result) => {
                console.log(result);
                if (!result) {
                    return {
                        code: statusCode.DB_ERROR,
                        json: util.successFalse(resMessage.DB_ERROR)
                    };
                }
                return {
                    code: statusCode.OK,
                    json: util.successTrue(resMessage.BOARD_DELETE_SUCCESS)
                };
            })
            .catch(err => {
                console.log(err);
                throw err;
            });
    }
}

module.exports = article;