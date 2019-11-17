const crypto = require('crypto');
const fs = require('fs');

const password = 'password';
crypto.randomBytes(32, (err, salt)=> {
    if(err) throw err;
    crypto.pbkdf2(password, salt, 1, 32, 'sha512', (err, derivedKey)=> {
        if (err) throw err;
        fs.writeFile('password.txt', derivedKey.toString('hex'), (err) => {
            if (err) throw err;
            console.log('complete write password');
        });
    });
});

// 해싱된 비밀번호의 값은 866208fa7524b6d1d4dd02eea84496251fe3a7d7117a00de6e0d7d8c461d8555 이런 식으로 출력됨
