// =======================================================================================
// Praticando a implementação de testes com Jest - Parte 1

/* 
5- Compare dois objetos para verificar se são idênticos ou não
*/

// const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

/* 
// implemente seus testes aqui
assert.deepStrictEqual(obj1, obj2);
assert.deepStrictEqual(obj1, obj3);
*/

module.exports = {obj1, obj2, obj3};
