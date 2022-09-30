const pgp = require('pg-promise')();

const db = pgp({
    user:'erika',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'pdi_vuetify'
})

module.exports = db;