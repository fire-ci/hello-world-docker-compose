const db = require('.');
const schema = db.schema;

console.log(`Creating tables ...`);

schema
  .createTable('users', function (table) {
    table.string('id').unsigned().notNullable().primary();
    table.string('firstname').notNullable();
    table.string('lastname').notNullable();
    table.timestamps(true, true);
  })
  .then(() => {
    console.log(`Tables created succesfully`);
  }).catch(err => {
    console.log(`Unable to init tables : ${err}`);
  });