const knex = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost:5432',
    user : 'john',
    password : 'doe',
    database : 'postgres'
  },
});

module.exports = knex;