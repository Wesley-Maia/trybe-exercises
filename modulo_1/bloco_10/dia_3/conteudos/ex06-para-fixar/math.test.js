// ============================================================================================
const math = require('./math');
jest.mock("./math");

/* 1- Faça o mock da funcão subtrair e teste sua chamada. */
describe('Exercício 1', () => {
  it('mock da funcão subtrair', () => {
    math.subtrair.mockImplementation((a, b) => a - b);
    math.subtrair(2, 1);

    expect(math.subtrair).toHaveBeenCalled();
    expect(math.subtrair).toHaveBeenCalledTimes(1);
    expect(math.subtrair).toHaveBeenCalledWith(2, 1);
    expect(math.subtrair(4, 1)).toBe(3);
  });
});

/* 2- Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a
chamada e o retorno. */
describe('Exercício 2', () => {
  it('mock da funcão multiplicar ', () => {
    math.multiplicar.mockImplementation((a, b) => 10);
    math.multiplicar(2, 1);

    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar).toHaveBeenCalledTimes(1);
    expect(math.multiplicar).toHaveBeenCalledWith(2, 1);
    expect(math.multiplicar(4, 1)).toBe(10);
  });
});

/* 3- Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua
soma. Teste a chamada, o retorno e os parâmetros passados. */
describe('Exercício 3', () => {
  it('mock da funcão somar', () => {
    math.somar.mockImplementation((a, b) => a + b);
    math.somar(2, 1);

    expect(math.somar).toHaveBeenCalled();
    expect(math.somar).toHaveBeenCalledTimes(1);
    expect(math.somar).toHaveBeenCalledWith(2, 1);
    expect(math.somar(4, 1)).toBe(5);
  });
});

/* 4- Faça o mock da função dividir e implemente um retorno padrão com o valor '15'. Implemente
também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o
retorno, os parâmetros e quantas vezes a função foi chamada. */
describe('Exercício 4', () => {
  it('mock da funcão multiplicar ', () => {
    math.dividir.mockImplementation((a, b) => 15);
    math.dividir(2, 5);

    expect(math.dividir).toHaveBeenCalled();
    expect(math.dividir).toHaveBeenCalledTimes(1);
    expect(math.dividir).toHaveBeenCalledWith(2, 5);
    expect(math.dividir(2, 5)).toBe(15);
  });
});

/* 5- Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação
original. Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno.
Restaure a implementação original da função e teste sua execução. */


// Conflito com do Exercício 1
// Expected number of calls: 1
// Received number of calls: 2


/* describe('Exercício 5', () => {
  const mockSubtrair = jest.spyOn(math, "subtrair");
  mockSubtrair.mockImplementation((a, b) => a * b);
  mockSubtrair.mockReturnValue(20);

  expect(mockSubtrair(10, 2)).toBe(20);
  expect(mockSubtrair).toHaveBeenCalled();
  expect(mockSubtrair).toHaveBeenCalledTimes(1);
  expect(mockSubtrair).toHaveBeenCalledWith(10, 2);

  mockSubtrair.mockRestore();
  mockSubtrair.mockReturnValue(8);

  expect(mockSubtrair(10, 2)).toBe(8);
  expect(mockSubtrair).toHaveBeenCalled();
  expect(mockSubtrair).toHaveBeenCalledTimes(1);
  expect(mockSubtrair).toHaveBeenCalledWith(10, 2);
}); */
