const http = require('http');

http.createServer((req, res) => {
    console.log('get message')
    res.writeHead(200, {'content-Type': 'text/plain'});
    res.write('hello nodejs');
    res.end();
}).listen(3000);
