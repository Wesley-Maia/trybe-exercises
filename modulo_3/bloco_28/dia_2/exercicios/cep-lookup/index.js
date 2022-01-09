// index.js

require('dotenv').config(); // Carregando variáveis de ambiente
const express = require('express');
const bodyParser = require('body-parser');
const Cep = require('./controllers/Cep');
const errorMiddleware = require('./middlewares/error.js');

const app = express();
// const port = 3000;
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/ping', (req, res) => {
    res.status(200).json({message: 'pong!'});
});

app.get('/cep/:cep', Cep.findAddressByCep);

app.post('/cep', Cep.create);

app.use(errorMiddleware);

// Ler a porta da variável de ambiente ou usa 3000
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
