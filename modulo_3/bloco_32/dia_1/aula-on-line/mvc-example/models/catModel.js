const mysql = require('mysql2/promise'); 

const connection = mysql.createPool({
  host: 'localhost',
  user: 'trybe',
  password: 'trybe2021',
  database: 'mvc_example'
});

const getAll = async () => {
  const [cats] = await connection.execute('SELECT name, age FROM mvc_example.cats');
  return cats;
}

const add = async (name, age) => connection.execute(
  'INSERT INTO mvc_example.cats (name, age) VALUES (?,?)',
  [name, age],
);

const getCatById = async (id) => {
  const [cat] = await connection.execute(
    'SELECT name, age FROM mvc_example.cats WHERE id = ?',
    [id],
  );
  return cat;
}

module.exports = {
  getAll,
  add,
  getCatById
}