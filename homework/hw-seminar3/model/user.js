const statusCode = require('../module/utils/statusCode');
const resMessage = require('../module/utils/responseMessage');
const encrypt = require('../module/encryption');
const util = require('../module/utils/utils');
const pool = require('../module/pool');
const table = 'user';

const user = {
    signin: (id, password) => {
        const query = `SELECT * FROM ${table} WHERE id = '${id}'`;
        console.log(query);
        return pool.queryParam_None(query)
            .then(async (userResult) => {
                console.log(userResult);
                if (userResult.length == 0) {
                    return {
                        code: statusCode.BAD_REQUEST,
                        json: util.successFalse(resMessage.NO_USER)
                    };
                }
                const user = userResult[0];
                const { salt, hashed } = await encrypt.encryptWithSalt(password, user.salt);
                console.log('salt :', salt);
                console.log('user.salt  :', user.salt);
                console.log('hashed : ', hashed);
                if (user.password != hashed) {
                    return {
                        code: statusCode.BAD_REQUEST,
                        json: util.successFalse(resMessage.MISS_MATCH_PW)
                    };
                }
                return {
                    code: statusCode.OK,
                    json: util.successTrue(resMessage.SIGN_IN_SUCCESS)
                };
            })
            .catch(err => {
                console.log(err);
                throw err;
            });
    },
    signup: (id, name, password, salt, email, phone) => {
        const fields = 'id, name, password, salt, email, phone';
        const questions = `?, ?, ?, ?, ?, ?`;
        const values = [id, name, password, salt, email, phone];
        return pool.queryParam_Parse(`INSERT INTO ${table}(${fields}) VALUES(${questions})`, values)
            .then(result => {
                if (result.code && result.json) return result;
                const userId = result.insertId;
                return {
                    code: statusCode.OK,
                    json: util.successTrue(resMessage.SIGN_UP_SUCCESS, userId)
                };
            })
            .catch(err => {
                if (err.errno == 1062) {
                    console.log(err.errno, err.code);
                    return {
                        code: statusCode.BAD_REQUEST,
                        json: util.successFalse(resMessage.ALREADY_ID)
                    };
                }
                console.log(err);
                throw err;
            });
    }
}

module.exports = user;