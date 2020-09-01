const http = require('http');

var server = http.createServer((req, res) => {
    if(req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    }
    else {
        res.end('Invalid request!');
    }
})
server.listen(3000);

console.log('server running at port 3000');