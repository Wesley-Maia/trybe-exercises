const libStats = require('./jest-spy-on');

test('(spyOn)Testa a função, quantidade de vezes, parâmetros e retornos.', () => {
  const spyDestreza = jest.spyOn(libStats, 'destreza');

  spyDestreza(5);

  expect(spyDestreza).toHaveBeenCalled();
  expect(spyDestreza).toHaveBeenCalledTimes(1);
  expect(spyDestreza).toHaveBeenCalledWith(5);

  expect(spyDestreza(5)).toBe(10);
  expect(spyDestreza).toHaveBeenCalledTimes(2);
});
