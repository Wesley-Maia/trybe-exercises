// npm init -y
// npm install mocha chai sinon -D


// Alterar arquivo package.json:
// "scripts": {
//   "start" : "node index.js",
//   "test": "mocha tests"
// },

const numerosNaturais = (numberTest) => {
  if(numberTest > 0) {
    return 'positivo';
  }

  if(numberTest < 0) {
    return 'negativo';
  }

  if(numberTest == 0) {
    return 'neutro';
  }

  if( typeof numberTest !== 'number') {
    return "o valor deve ser um número";
  }
}
  
module.exports = numerosNaturais;
