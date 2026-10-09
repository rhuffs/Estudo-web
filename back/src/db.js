const pgp = require('pg-promise')();
const db = pgp('postgres://rhuan:123@localhost:5432/banco');

module.exports = db;
