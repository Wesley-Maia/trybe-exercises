// REST no Express

//========================================================================
// index.js

const express = require('express');

const userController = require('./controllers/UsersControllers);
const productController = require('./controllers/ProductsControllers);

const app = express();
const port = 3000;

app.use(express.json());

app.get('/usuarios', userController.listAll);

app.get('/produtos', productController.listAll);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//========================================================================
// controllers/ProductsController.js

const productModel = require('../models/Products);
						  
const listAll = (req, res) => {
	try{
		const data = productModel.getAll();
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json({message: 'Algo deu ruim...'});
	};
};

module.exports = {
	listAll,
};

//========================================================================
// controllers/UsersController.js

const userModel = require('../models/Users);
						  
const listAll = (req, res) => {
	try{
		const data = userModel.getAll();
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json({message: 'Algo deu ruim...'});
	};
};

module.exports = {
	listAll,
};

//========================================================================
// models/Products.js

// Simulando um Banco de Dados
const products = require('../data/products.json');

const getAll = () => {
	return products;
}

module.exports = {
	getAll,
};

//========================================================================
// models/Users.js

// Simulando um Banco de Dados
const users = require('../data/users.json');

const getAll = () => {
	return users;
}

module.exports = {
	getAll,
};