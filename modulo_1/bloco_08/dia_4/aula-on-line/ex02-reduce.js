// =======================================================================================
// JavaScript ES6 - Higher Order Functions - reduce

const assert = require('assert');
const numbers = [2, 3, 4, 6, 8, 12, 24];

/* const sumEvenNumbers = numbers.reduce((accumulator, currentValue) => {
  console.log(`Acc: ${accumulator}`)
  console.log(`Current: ${currentValue}`)
  
  if(currentValue % 2 === 0) {
      return accumulator + currentValue;
  }
  return accumulator;
}, 0);

console.log(`Resultado: ${sumEvenNumbers}`); */

const evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
});

console.log(evenNumbers)

const sumEvenNumbers = evenNumbers.reduce((accumulator,currentValue) => {
    return accumulator + currentValue;
});

console.log(sumEvenNumbers)

// Testes
const expectedValue = 56;
assert.strictEqual(sumEvenNumbers, expectedValue);
