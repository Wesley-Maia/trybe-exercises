// =======================================================================================
// JavaScript ES6 - Higher Order Functions - reduce

/* 1 - Dada uma matriz, transforme em um array. */

const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  const arrayMaster = arrays.reduce((result, array) => {
    //console.log('Result: ',result, 'Array: ', array);
    for(let i = 0; i < array.length; i += 1){
      result.push(array[i]);
    }
    return result;
  });
  return arrayMaster;
}
//console.log(arrays);
//console.log(flatten());

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
