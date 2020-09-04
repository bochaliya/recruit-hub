const http = require('http');
const auth = require('./loaders/auth.js');

var server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var url = req.url;
    if(url == '/register') {
        let userDetails = auth.register(req.body);
        res.end();
    }
    else if(url === '/login') {
        let userDetails = auth.login();
        res.end()
    }
    else {
        res.end('Invalid request!');
    }
})
server.listen(3000);

console.log('server running at port 3000');