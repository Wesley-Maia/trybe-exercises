// npm init -y
// npm install express
// npm install nodemon -D

// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "start": "node index.js",
//     "dev": "nodemon index.js"
// },

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const tokenValidate = (request, response, next) => {
  console.log(request.headers);
  // const token = request.headers.token;
  const {token, password } = request.headers;

  // if(!token) {
  //   return response.status(401).json({message: "VOCÊ NÃO TEM AUTORIZAÇÃO"});
  // }

  // Erro
  if(!token) next("ERRO");

  next();
}

const middlewareFinal = (req, res, next) => {
  return res.status(200).json({message: "Bem vindo"});
}

app.post('/login', (req, res, next) => {
  const { email, senha } = req.body;

  if(email !== 'Wesley' || senha !== 'abc') next('VOCE NAO TEM AUTORIZAÇÃO'); 

  return res.status(200).json({message: `Boas vindas: ${email}`});
});

const errorMiddlewar = (err, _req, res, _next) => {
  return res.status(500).json({message: `Algo deu ruim: ${err}`});
}

app.get('/', tokenValidate, middlewareFinal);

app.use(errorMiddlewar);

app.listen(port, () => console.log(`Servidor executando na porta ${port}!`));