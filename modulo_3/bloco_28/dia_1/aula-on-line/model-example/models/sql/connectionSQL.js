const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'trybe',
  password: 'trybe2021',
  database: 'aula_28_1'
});

module.exports = connection;
