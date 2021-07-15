const sum = require('./ex01');
const myRemove = require('./ex02');
const myRemoveWithoutCopy = require('./ex03');
const myFizzBuzz = require('./ex04');
const {obj1, obj2, obj3} = require('./ex05');

describe('Exercício 1', () => {
  it('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(9).toBe(sum(4, 5));
  });

  it('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(0).toBe(sum(0, 0));
  });

  it('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
    expect(() => { sum() }).toThrow();
  });

  it('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
    expect(() => { sum() }).toThrow(new Error('parameters must be numbers'));
  });
});

describe('Exercício 2', () => {
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
  });

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect([1, 2, 3, 4]).not.toEqual(myRemove([1, 2, 3, 4], 3));
  });

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    const myList = [5, 6, 7, 8];
    myRemove(myList, 5);
    expect([5, 6, 7, 8]).toEqual(myList);
  });

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5));
  });
});

describe('Exercício 3', () => {
  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect([1, 2, 4]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3));
  });

  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect([1, 2, 3, 4]).not.toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3));
  });

  it('Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
    const myList = [1, 2, 3, 4];
    myRemoveWithoutCopy(myList, 1);
    expect([1, 2, 3, 4]).not.toEqual(myList);
  });

  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect([1, 2, 3, 4]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5));
  });
});

describe('Exercício 4', () => {
  it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect('fizzbuzz').toBe(myFizzBuzz(15));
  });

  it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect('fizz').toBe(myFizzBuzz(6));
  });

  it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect('buzz').toBe(myFizzBuzz(5));
  });

  it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    expect(7).toBe(myFizzBuzz(7));
  });

  it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(false).toBe(myFizzBuzz('this_is_not_a_number'));
  });
});

describe('Exercício 5', () => {
  it('Compare dois objetos', () => {
    expect(obj1).toEqual(obj2);
  });

  it('Compare dois objetos', () => {
    expect(obj1).not.toEqual(obj3);
  });
});
