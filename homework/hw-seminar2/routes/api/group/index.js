var express = require('express');
const csv = require('csvtojson');
var router = express.Router();
const groupUtil = require('../../../module/groupUtil');
const statusCode = require('../../../module/statusCode');
const csvManager = require('../../../module/csvManager');
const groupMixer = require('../../../module/groupMixer');

// 그룹 전체 조회
router.get('/', async (req, res) => {
    try {
        const groupArray = await csvManager.read('group.csv');
        const memberArray = await csvManager.read('member.csv');
        const groupMap = {};
        groupArray.forEach(grp => {
            groupMap[grp.groupIdx] = grp.groupName;
        });
        res.status(statusCode.OK)
            .send(groupUtil.successTrue('조 전체 조회 성공',
                memberArray.map(it => `${it.name}:${groupMap[it.groupIdx]}`)));
    } catch (err) {
        console.log(err);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send();
    }
});

// mixer 1~6조까지 재배정
router.get('/mixCheck', async (req, res) => {
    try {
        const groupArray = await csvManager.read('group.csv');
        const memberArray = await csvManager.read('member.csv');
        var groupName = "";
        var array = await groupMixer.mix(memberArray);
        console.log(array);
        res.status(statusCode.OK)
            .send(groupUtil.successTrue('조원 조회 성공', array));
    } catch (err) {
        console.log(err);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send();
    }
});


// 그룹 세부 조회
router.get('/:groupIdx', async (req, res) => {
    try {
        const groupArray = await csvManager.read('group.csv');
        const memberArray = await csvManager.read('member.csv');
        var groupName = ""
        var array = memberArray.filter(it => it.groupIdx == req.params.groupIdx);
        groupArray.forEach(grp => {
            if (grp.groupIdx == req.params.groupIdx) {
                groupName = grp.groupName;
            }
        });
        res.status(statusCode.OK)
            .send(groupUtil.successTrue('조원 조회 성공',
                array.map(it => `${it.name}:${groupName}`)));
    } catch (err) {
        console.log(err);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send();
    }
});


module.exports = router;
