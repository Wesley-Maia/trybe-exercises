const express = require('express');
const { listUsers, createNewUser } = require('./controllers/users.controllers');
const error = require('./middlewares/errorMiddleware');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/users', listUsers);

app.post('/users', createNewUser);

app.use(error);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
