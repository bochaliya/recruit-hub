const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const db = require('../config/db.js');


app.use(express.json())

app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const user = { name: req.body.name, password: hashedPassword }
        res.status(201).send()
    } catch {
        res.status(500).send()
    } 
})

app.post('/users/login', async(req, res) => {
    const user = 'something';
    if(user == null) {
        return res.status(400).send('Can not find user');
    }
    try {
        if(await bcrypt.compare(res.body.password, user.password)) {
            res.status(201).send('Success');
        } 
        else {
            res.send('User not created');
        }

    } catch {
        res.status(500).send()
    }
})

app.listen(3000, 'localhost')