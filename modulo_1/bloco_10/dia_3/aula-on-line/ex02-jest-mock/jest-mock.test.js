const libStats = require('./jest-mock');

jest.mock('./jest-mock');

test('Testa a função saúde, quantidade de vezes, parâmetros e retornos.', () => {
  libStats.saude.mockImplementation((num) => num * 8);
  const result = libStats.saude(5);

  expect(libStats.saude).toHaveBeenCalled();
  expect(libStats.saude).toHaveBeenCalledTimes(1);
  expect(libStats.saude).toHaveBeenCalledWith(5);
  expect(result).toBe(40);
});
