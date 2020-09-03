const url = require('url');

module.exports = {
    handleRequest(req, res) {
        res.write(200, {
            'Content-Type': 'text/html'
        });
    }
}