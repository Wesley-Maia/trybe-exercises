const express = require('express');
const bodyParser = require('body-parser');
const middlewares = require('./middlewares');
const app = express();
const port = 3000;

// app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/user', middlewares.createUser);

app.get('/user', middlewares.getAllUsers);

app.get('/user/:id', middlewares.findUserById);

app.put('/user/:id', middlewares.updateUser);

app.use(middlewares.error);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
