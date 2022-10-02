const pgp = require('pg-promise')();

const db = pgp({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DB_NAME
})

module.exports = db;