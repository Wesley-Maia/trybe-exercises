// model/productModel.js

const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAllProducts = async () => {
  const conn = await connection();
  const query = await conn.collection('products').find().toArray();

  return query;
}

const getProductBySKU = async (sku) => {
  const conn = await connection();
  const query = await conn.collection('products').findOne({ sku });

  return query;
};

const create = async (sku, name, price) => {
  const conn = await connection();
  const { insertedId } = await conn.collection('products').insertOne({ sku, name, price });

  return insertedId;
};

const getProduct = async (id) => {
  // if (!ObjectId(id)) throw { status: 404, message: 'Id not found' };
  // if (id.length !== 24) throw { status: 404, message: 'Id not found' };

  const conn = await connection();
  const query = await conn.collection('products').findOne({ _id: ObjectId(id) });

  return query;
};

module.exports = {
  getAllProducts,
  getProductBySKU,
  create,
  getProduct,
}
