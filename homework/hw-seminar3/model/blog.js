const statusCode = require('../module/utils/statusCode');
const resMessage = require('../module/utils/responseMessage');
const util = require('../module/utils/utils');
const pool = require('../module/pool');
const moment = require('moment');
const table = 'blog';

const blog = {
    readAll: () => {
        const query = `SELECT * FROM ${table}`;
        console.log(query);
        return pool.queryParam_None(query)
            .then(async (result) => {
                console.log(result);
                return {
                    code: statusCode.OK,
                    json: util.successTrue(resMessage.BLOG_READ_SUCCESS, result)
                };
            })
            .catch(err => {
                console.log(err);
                throw err;
            });
    },
    write: ({blogName, owner}) => {
        const fields = 'blogName, userIdx';
        const questions = `?, ?`;
        const values = [blogName, owner];
        return pool.queryParam_Parse(`INSERT INTO ${table}(${fields}) VALUES(${questions})`, values)
            .then(async (result) => {
                console.log(result);
                return {
                    code: statusCode.OK,
                    json: util.successTrue(resMessage.BLOG_CREATE_SUCCESS)
                };
            })
            .catch(err => {
                console.log(err);
                throw err;
            });
    },
    update: ({blogIdx, blogName}) => {
        return pool.queryParam_Parse(`UPDATE ${table} SET blogName = ? WHERE blogIdx = '${blogIdx}'`, blogName)
            .then(async (result) => {
                console.log(result);
                return {
                    code: statusCode.OK,
                    json: util.successTrue(resMessage.BLOG_UPDATE_SUCCESS)
                };
            })
            .catch(err => {
                console.log(err);
                throw err;
            });
    },
    delete: (blogIdx) => {
        const query = `DELETE FROM ${table} WHERE blogIdx = '${blogIdx}'`;
        console.log(query);
        return pool.queryParam_Parse(query)
            .then(async (result) => {
                console.log(result);
                return {
                    code: statusCode.OK,
                    json: util.successTrue(resMessage.BLOG_DELETE_SUCCESS)
                };
            })
            .catch(err => {
                console.log(err);
                throw err;
            });
    },

}

module.exports = blog;