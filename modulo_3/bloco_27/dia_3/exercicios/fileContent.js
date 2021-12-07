// Exercício 5
// - implemente a função descrita no exercício 4.
// - Crie a função descrita no exercício 4 utilizando o módulo fs do Node.
// - Adapte os testes adicionando stub ao módulo utilizado do fs , isolando assim o teste.
// - Garanta que todos os testes escritos no exercício 4 irão passar com sucesso.


// npm init -y
// npm install mocha chai sinon -D


// Alterar arquivo package.json:
// "scripts": {
//   "start" : "node index.js",
//   "test": "mocha tests"
// },

const { ok } = require('assert');
const fs = require('fs');

const fileContent = (nomeArquivo, conteudoArquivo) => {
  fs.writeFileSync(`${__dirname}/${nomeArquivo}`, conteudoArquivo);

  return 'ok';
}
    
module.exports = fileContent;
