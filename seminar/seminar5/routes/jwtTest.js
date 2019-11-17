const express = require('express');
const router = express.Router();
const jwt = require('../module/jwt');
const {LoggedIn} = require('../module/util/authUtil');
// const LoggedIn = require('../module/util/authUtil').LoggedIn;

router.post('/publish', (req, res) => {
    const {idx, grade, name} = req.body;
    if(!idx || !grade || !name) {
        res.send(`wrong ㅜ`);
        return;
    }
    const result = jwt.sign({idx, grade, name});
    res.json(result);
});

router.post('/verify', (req, res) => {
    const {token} = req.headers;
    // const result = jwt.verify(token);
    // if(result == -1) {
    //     return res.status(statusCode.UNAUTHORIZED).send(util.successFalse(resMessage.EXPIRED_TOKEN));
    // }
    // if(result == -2) {
    //     return res.status(statusCode.UNAUTHORIZED)
    //     .send(util.successFalse(resMessage.INVALID_TOKEN));
    // }
    res.json(result);
});

router.post('/refresh', (req, res) => {
    const refreshToken = req.headers.refreshToken;
    const selectUser = {
        idx: 1,
        grade: 1,
        id: 'gngsn',
        name: 'gngsn'
    };
    const newAccessToken = jwt.refresh(selectUser);
    res.status(statusCode.OK).send(util.successTrue(resMessage.REFRESH_TOKEN, newAccessToken));
});

router.use('/middleware', LoggedIn);
router.post('/middleware', (req, res) => {
    console.log(req.decode);
    res.json(req.decoded);
});

module.exports = router;