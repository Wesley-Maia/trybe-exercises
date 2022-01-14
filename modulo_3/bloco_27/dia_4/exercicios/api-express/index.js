//============================================================================
// npm init -y
// npm install express
// npm install nodemon -D
// npm install express-rescue

// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "start": "node index.js",
//     "dev": "nodemon index.js"
// },

const express = require('express');
const app = express();
const port = 3000;

const rescue = require('express-rescue');
const simpsonsUtils = require('./fs-utils');

app.use(express.json());

//============================================================================
// Exercício 1
const middleware1 = (req, res, next) => {
  return res.status(200).json({message: "pong"});
}

app.get('/ping', middleware1);
//============================================================================
// Exercício 2
app.post('/hello', (req, res, next) => {
  const { name } = req.body;

  return res.status(200).json({message: `Hello, ${name}!`});
});

//============================================================================
// Exercício 3
app.post('/greetings', (req, res, next) => {
  const { name, age } = req.body;

  // console.log(`${name} - ${age}`);

  if(parseInt(age, 10)> 17) {
    return res.status(200).json({message: `Hello, ${name}!`});
  }

  return res.status(401).json({message: "Unauthorized"});
});

//============================================================================
// Exercício 4
// http://localhost:3000/users/Wesley/28
app.put('/users/:name/:age', (req, res, next) => {
  const { name, age } = req.params;

  return res.status(200).json({message: `Seu nome é ${name} e você tem ${age} anos de idade`});
});

//============================================================================
// Exercício 5
// http://localhost:3000/users/Wesley/28
app.get('/simpsons', rescue(async (req, res) => {
  const simpsons = await simpsonsUtils.getSimpsons();

  res.status(200).json(simpsons);
}))

app.get('/simpsons/:id',
  rescue(async (req, res) => {
    const simpsons = await simpsonsUtils.getSimpsons();

    const simpson = simpsons.find(({ id }) => id === req.params.id);

    if (!simpson) {
      return res.status(404).json({ message: 'simpson not found' });
    }

    return res.status(202).json(simpson);
  })
);

app.post('/simpsons',
  rescue(async (req, res) => {
    const { id, name } = req.body;

    const simpsons = await simpsonsUtils.getSimpsons();

    if (simpsons.map(({ id }) => id).includes(id)) {
      return res.status(409).json({ message: 'id already exists' });
    }

    simpsons.push({ id, name });

    await simpsonsUtils.setSimpsons(simpsons);

    res.status(204).end();
  })
);

//============================================================================
app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

