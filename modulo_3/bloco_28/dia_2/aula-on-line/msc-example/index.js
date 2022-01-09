const express = require('express');
const productController = require('./controllers/productController');
const errorMiddleware = require('./middlewares/errorMiddleware');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/products', productController.getAllProducts);

app.post('/products', productController.createProduct);

app.get('/products/:id', productController.getProductId);

app.use(errorMiddleware);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
