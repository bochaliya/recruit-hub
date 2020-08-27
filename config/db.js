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
    return client;
}

exports = module.exports = {
    getClient
}