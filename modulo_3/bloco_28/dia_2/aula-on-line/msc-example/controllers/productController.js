// controllers/productController.js

const productService = require('../services/productService')

// Middlewares
const getAllProducts = async (req, res, next) => {
  const allProducts = await productService.getAll();

  return res.status(200).json(allProducts);
};

const createProduct = async (req, res, next) => {
  try {
    const { sku, name, price } = req.body;

    const newProduct = await productService.create(sku, name, price);

    return res.status(200).json(newProduct);
  } catch (err) {
    console.log("🚀 ~ file: productController.js ~ line 20 ~ createProduct ~ err", err.message);
    return next(err);
  }
};

const getProductId = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await productService.getProduct(id);

    return res.status(200).json(product);
  } catch (err) {
    console.log("🚀 ~ file: productController.js ~ line 20 ~ createProduct ~ err", err.message);
    return next(err);
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  getProductId,
}
