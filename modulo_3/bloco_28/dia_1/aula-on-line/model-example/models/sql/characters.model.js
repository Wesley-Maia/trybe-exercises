const connection = require('./connectionSQL');

const findAll = async () => {
  try {
    const [rows] = await connection.execute('SELECT * FROM aula_28_1.characters');

    return rows;

  } catch (error) {
    console.error('Internal Error: ', error.message);
    return res.status(500).json({ message: "Error"});
  }
};

const create = async (name, cartoon) => {
  try {
    const [row] = await connection.execute(
      'INSERT INTO aula_28_1.characters (name, cartoon) VALUES (?, ?)', [name, cartoon]);
    
    return row.insertId;
  } catch (error) {
    console.error('Internal Error: ', error.message);
    return res.status(500).json({ message: "Error"});
  }
}

const remove = async (id) => {
  try {
    await connection.execute('DELETE FROM aula_28_1.characters WHERE id = ?',
     [id]);

  } catch (error) {
    console.error('Internal Error: ', error.message);
    return res.status(500).json({ message: "Error"});
  }
}

module.exports = {
  findAll,
  create,
  remove
}