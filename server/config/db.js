const {Pool} = require('pg');

dbConfigs = {
    host: 'localhost',
    user: 'postgres',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
}

const pool = new Pool(dbConfigs);

async function getClient() {
    const client = await pool.connect();
    console.log(client);
    return client;
}

getClient();
module.exports = {
    getClient
}