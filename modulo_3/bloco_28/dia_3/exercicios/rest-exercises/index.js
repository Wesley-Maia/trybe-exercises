const express = require('express');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/products', require('./controllers/productController'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
