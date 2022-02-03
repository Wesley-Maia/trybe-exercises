const express = require('express');
const { Store } = require('./models')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  Store.findAll()
    .then(dados => {
      res.status(200).json(dados);
    }).catch(e => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado!' });
    })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
