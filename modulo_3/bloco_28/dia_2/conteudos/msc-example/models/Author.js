// models/Author.js

const { ObjectId } = require('mongodb');
const connection = require('./connection');

// Busca todos os autores do banco.
const getAll = async () => {
  return connection()
    .then((db) => db.collection('authors').find().toArray())
    .then((authors) => {
      return authors.map(({ _id, firstName, middleName, lastName }) => {
        return {
          id: _id,
          firstName,
          middleName,
          lastName,
        }
      });
    });
}

// Busca um autor específico, a partir do seu ID
const findById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const authorData = await connection()
    .then((db) => db.collection('authors').findOne(new ObjectId(id)));

  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData;

  return { 
    id, 
    firstName, 
    middleName, 
    lastName 
  };
};

// Insere um novo autor no BD
const create = async (firstName, middleName, lastName) =>
  connection()
    .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }));

module.exports = {
  getAll,
  findById,
  create,
};
