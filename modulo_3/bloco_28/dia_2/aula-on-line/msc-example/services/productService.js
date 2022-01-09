// services/productservices.js

const { ObjectId } = require('mongodb');

const ERROR_400 = 400;

const productModel = require('../model/productModel');

const getAll = async () => {
  const allProducts = await productModel.getAllProducts();

  return allProducts;
}

const create = async (sku, name, price) => {
  // Fazer validação
  if (!name || !sku || !price) throw { status: ERROR_400, message: 'All fields required' };

  const productExist = await productModel.getProductBySKU(sku);

  if (productExist) throw { status: ERROR_400, message: 'Product already exists' };

  const newProductId = await productModel.create(sku, name, price);

  return {
    id: newProductId,
    sku, 
    name,
    price
  };
}

const getProduct = async (id) => {
  // if (!ObjectId(id)) throw { status: 404, message: 'Id not found' };
  // console.log('aqui: ', new ObjectId(id)); // Por que new?
  if (id.length !== 24) throw { status: 404, message: 'Id not found' };
  const product = await productModel.getProduct(id);

  return product;
};

module.exports = {
  getAll,
  create,
  getProduct,
}
