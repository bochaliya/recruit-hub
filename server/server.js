const auth = require('./loaders/auth.js');
const jobs = require('./loaders/jobs.js');
const users = require('./loaders/users.js');
let express = require('express');
let app = express();


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', function (req, res) {
    res.send('recruit-hub App...')
})

app.get('/login', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let userDetails = auth.login();
    res.end()
})

app.get('/register', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let userDetails = auth.register(req.body);
    res.end();
})

app.get('/joblist', async function (req, res) {
    let result = await jobs.joblist();
    res.send(result);
})

app.get('/userlist', async function (req, res) {
    let result = await users.userlist();
    res.send(result);
})

let server = app.listen(3000, async function () {
    console.log('App listening 3000 port:')
})
