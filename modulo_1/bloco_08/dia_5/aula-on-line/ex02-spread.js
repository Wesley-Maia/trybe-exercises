// =======================================================================================
const assert = require('assert');

const horrorBooks = ['It', 'The Shining'];
const scifiBooks = ['I, Robot', 'Caves of Steel', 'The End of Eternity'];

// UTILIZANDO FOR
let awesomeBooks = [];

for (let index = 0; index < horrorBooks.length; index += 1) {
  awesomeBooks.push(horrorBooks[index]);
}

for (let index = 0; index < scifiBooks.length; index += 1) {
  awesomeBooks.push(scifiBooks[index]);
}

//console.log(awesomeBooks);

//===================

// UTILIZANDO O SPREAD OPERATOR

const books = [...horrorBooks, ...scifiBooks];

console.log(books);


//TESTES
const expectedValue = ['It', 'The Shining', 'I, Robot', 'Caves of Steel', 'The End of Eternity'];
assert.deepStrictEqual(awesomeBooks, expectedValue);
assert.deepStrictEqual(books, expectedValue);
