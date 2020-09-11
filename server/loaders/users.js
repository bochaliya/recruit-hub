const db = require('../config/db.js');
    
async function userlist() {
    try {
        let client = await db.getClient();
        let userlist = (await client.query('select * from candidates.candidates')).rows;;
        return userlist;
    } 
    catch(err) { 
        throw new Error('no user found..' + err.message);
    } 
}
module.exports = {
 userlist
}
