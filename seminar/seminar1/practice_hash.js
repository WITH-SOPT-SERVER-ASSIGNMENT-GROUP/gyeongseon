var crypto = require('crypto');

var shasum = crypto.createHash('sha512');
shasum.update('암호화 할 문자열');
// 9dba3465a53d423b7fb2d29a9204f9330610f0ab6973870ab7b1f8725d6530e273f864f3bbb09bcb7107407b1d74bc7da6a6a174af76b43471b831b0eda81f30
// 이런식으로 해싱됨~,~
var output = shasum.digest('hex');

console.log(output);

