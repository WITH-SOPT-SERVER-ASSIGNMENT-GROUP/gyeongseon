const json2csv = require('json2csv');

const jsonArray = [
{id: 'admin', pw: 'admin', name: '박경선'},
{id: 'heesung', pw: '1q2w3e4r', name: '윤희성'},
{id: 'starbucks', pw: 'jadmfsdfk', name: '스타벅스'}
];

const resultCsv = json2csv.parse(jsonArray);
console.log(resultCsv);