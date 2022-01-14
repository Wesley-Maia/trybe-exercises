// index.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const Author = require('./controllers/Authors');

app.use(bodyParser.json());

app.get('/authors', Author.getAll);

// http://localhost:3000/authors/1
app.get('/authors/:id', Author.findById);

app.post('/authors', Author.create);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
