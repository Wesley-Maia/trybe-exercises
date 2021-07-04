// =======================================================================================
// JavaScript ES6 - Higher Order Functions - reduce

const assert = require('assert');
const numbers = [2, 3, 4, 6, 8, 12, 24];

const sumWithReduce = numbers.reduce((accumulator, currentValue) => {
  console.log(`Acc: ${accumulator}`)
  console.log(`Current: ${currentValue}`)
  return accumulator + currentValue;
}, 0);

console.log(`Resultado: ${sumWithReduce}`);

// Testes
const expectedValue = 59;
assert.strictEqual(sumWithReduce, expectedValue);
