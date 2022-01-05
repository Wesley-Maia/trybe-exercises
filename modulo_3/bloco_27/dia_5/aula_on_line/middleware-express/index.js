// npm init -y
// npm install express
// npm install nodemon -D
// npm i body-parser

// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "start": "node index.js",
//     "dev": "nodemon index.js"
// },

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
// app.use(express.json());
app.use(bodyParser.json());

// const dummyMiddleware = require('./middlewares/dummy');
const productRegister = require('./middlewares/productRegister')
const error = require('./middlewares/error');
const auth = require('./middlewares/auth');
const productList = require('./middlewares/productList');

// app.use(dummyMiddleware);

app.get('/', (req, res) => {
  return res.status(200).json({message: "Boas vindas!"});
});

app.post('/product', auth, productRegister);

app.get('/product/:id', productList);

app.use(error)

// app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));