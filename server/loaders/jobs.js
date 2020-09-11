const db = require('../config/db.js');

async function joblist() {
    try {
        let client = await db.getClient();
        let joblist = (await client.query('select * from jobs.jobs')).rows;
        return joblist;
    }
    catch(err) {
        throw new Error('no job found..' + err.message);
    }
}
module.exports = {
   joblist
}

