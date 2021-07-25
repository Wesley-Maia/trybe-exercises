const libStats = require('./jest-mock-restore');

test('(SpyOn) mockImplementation e mockRestore', () => {
  //implementação original e sem mock
  expect(libStats.saude(5)).toBe(60);

  //implementação mockada
  let spySaude = jest.spyOn(libStats, 'saude')
    .mockImplementation((num1, num2) => num1 + num2);

  expect(spySaude(8, 3)).toBe(11);
  expect(spySaude).toHaveBeenCalled();
  expect(spySaude).toHaveBeenCalledTimes(1);
  expect(spySaude).toHaveBeenCalledWith(8, 3);

  // retorno a função original
  spySaude.mockRestore();
  spySaude = jest.spyOn(libStats, 'saude');
  expect(spySaude(5)).toBe(60);
  expect(spySaude).toHaveBeenCalledWith(5);
  expect(spySaude).toHaveBeenCalledTimes(1);
});
