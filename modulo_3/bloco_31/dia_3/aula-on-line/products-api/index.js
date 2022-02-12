const express = require('express');
const bodyParser = require('body-parser');
const productController = require("./controller/productController");
const usersController = require('./controller/usersController');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products/', productController);
app.use('/users', usersController);

app.listen(3000, () => {
  console.log('App ouvindo a porta 3000!');
});
