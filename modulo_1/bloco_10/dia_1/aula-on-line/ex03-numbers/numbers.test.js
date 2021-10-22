const numbers = require('./numbers');

test('se a função recebe [1, 2, 3, 4, 5] e retorna true', () => {
  expect(numbers([1, 2, 3, 4, 5])).toEqual(true);
});
