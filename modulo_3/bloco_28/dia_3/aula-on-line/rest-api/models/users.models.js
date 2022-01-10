// models/users.models.js

const connect = require('./connection');

const find = async () => {
  const conn = await connect();
  const query = await conn.collection('users_2').find({}).toArray();

  return query;
};

const create = async (name, email, password) => {
  const conn = await connect();
  const { insertedId } = await conn.collection('users_2').insertOne({ name, email, password });

  return insertedId;
};

const findUserByEmail = async (email) => {
  const conn = await connect();
  const query = await conn.collection('users_2').findOne({ email });

  return query;
};

module.exports = {
  find,
  create,
  findUserByEmail,
};
