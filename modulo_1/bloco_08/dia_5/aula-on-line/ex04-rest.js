// =======================================================================================
const assert = require('assert');

// PARAMETRO REST: Permite que a passagem de parâmetro seja feita em um único parâmetro.

// Com array
const sumAll = (values) => {
  let sum = 0;
  values.forEach(value => {
    sum += value;
  });

  return sum;
};

//======

// const sumAllParams = (...params) => {  // criando um função (REST / Juntar os elementos -> array)
//   let sum = 0;
//   params.forEach(value => {
//     sum += value;
//   });

//   return sum;
// }

const sumAllParams = (...params) => {  // criando um função (REST / Juntar os elementos -> array)
  return params.reduce((accumulator, currentValue) => accumulator + currentValue);
}

//TESTES
assert.strictEqual(sumAll([1, 2]), 3); // 1 parâmetro: array
assert.strictEqual(sumAll([1, 2, 3]), 6);
assert.strictEqual(sumAll([1, 2, 3, 4, 5]), 15);

assert.strictEqual(sumAllParams(1, 2), 3);
assert.strictEqual(sumAllParams(1, 2, 3), 6);
assert.strictEqual(sumAllParams(1, 2, 3, 4, 5), 15);
