const bcrypt = require('bcrypt');
const db = require('../config/db.js');

async function register(params) {
    try { 
        let salt = await bcrypt.genSalt();
        let hashedPassword = await bcrypt.hash(params.password, salt);
        let userDetails = await db.query('insert into candidates.candidates(name,email_id, password) values($1,$2,$3) retuning *', [params.name, params.email, hashedPassword]);
    }
    catch(err) {
        throw new Error('Can not able to register' + err.message);
    }
    return userDetails;
}

async function login(params) {
    try {
        let userDetails = await db.query('select * from candidates.candidates where email_id = $1', [params.email])[0];
        if(userDetails != null && await bcrypt.compare(params.password, userDetails.password)) {
            return userDetails;
        }
        else {
            return 'User not created';
        }
    }
    catch(err) {
        throw new Error('Can not able to login' + err.message);
    }
}