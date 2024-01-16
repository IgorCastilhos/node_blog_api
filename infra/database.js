const pgp = require('pg-promise')();
const db = pgp({
  "user": "postgres",
  "password": "9953",
  "host": "localhost",
  "port": 5432,
  "schema": "blog"
});

module.exports = db;
