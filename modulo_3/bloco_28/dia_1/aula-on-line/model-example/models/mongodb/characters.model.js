const connection = require('./connectionMONGO'); 

const findAll = async () => {
  try {
    const connect = await connection();
    const query = await connect.collection('characters').find().toArray();
    
    // connection().then((db) => db.collection('dbName').function())

    return query;

  } catch (error) {
    console.error('Internal Error: ', error.message);
    return 'erro';
  }
};

const create = async (name, cartoon) => {
  try {
    const connect = await connection();
    const { insertedId } = await connect.collection('characters').insertOne({ name, cartoon });

    return insertedId;
    
  } catch (error) {
    console.error('Internal Error: ', error.message);
   
  }
}

module.exports = {
  findAll,
  create
}
