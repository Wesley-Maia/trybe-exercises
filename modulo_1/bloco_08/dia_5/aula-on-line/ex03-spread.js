// =======================================================================================
const assert = require('assert');

const point = [1.0, 2.2, -6.6];
const otherPoint = [0.1, 3.5, -99.6];

printPointCoordinates = (x, y, z) => `Point coordinates are x = ${x}, y = ${y} and z = ${z}`;

console.log(printPointCoordinates(...point));

//TESTES
const expectedValuesPoint = 'Point coordinates are x = 1, y = 2.2 and z = -6.6';
assert.strictEqual(printPointCoordinates(...point), expectedValuesPoint);
// SPREAD, espalha os elementos de um Array, quando usamos uma função já existente

const expectedValuesOtherPoint = 'Point coordinates are x = 0.1, y = 3.5 and z = -99.6';
assert.strictEqual(printPointCoordinates(...otherPoint), expectedValuesOtherPoint);
