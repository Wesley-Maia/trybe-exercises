// =======================================================================================
// JavaScript ES6 - Higher Order Functions - reduce

const assert = require('assert');

const epic = ['A', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away...'];

const epicPhrase = epic.reduce((accumulator, currentValue) => {
  return `${accumulator} ${currentValue}`;
});

console.log(epicPhrase)

// Testes
const expectedValue = 'A long time ago in a galaxy far far away...';
assert.strictEqual(epicPhrase, expectedValue);
