// Exercício 1
// -Estruture os testes utilizando mocha e chai para um função que irá dizer se um número é "positivo", "negativo" ou "neutro":
// -Essa função irá receber um número como parâmetro e retornar uma string como resposta;
// -Quando o número passado for maior que 0 deverá retornar "positivo", quando for menor que 0 deverá retornar "negativo" e quando igual a 0 deverá retornar "neutro";
// -Descreva todos os cenários de teste utilizando describes ;
// -Descreva todos os testes que serão feitos utilizando its ;
// -Crie as asserções validando se os retornos de cada cenário tem o tipo e o valor esperado.


// describe('Descrição', () => {});
// it('Descrição', () => {});

const { expect } = require( 'chai' );

const numFunction = require('../numerosNaturais');

describe('Executar função numFunction()', () => {
  describe('Num > 0', () => {
    it('é uma string', () => {
      const result = numFunction(10);
      expect(result).to.be.a('string');
    });

    it('é positivo', () => {
      const result = numFunction(10);
      expect(result).to.be.equals('positivo');
    });
  });

  describe('Num < 0', () => {
    it('é uma string', () => {
      const result = numFunction(-5);
      expect(result).to.be.a('string');
    });

    it('é negativo', () => {
      const result = numFunction(-5);
      expect(result).to.be.equals('negativo');
    });
  });

  describe('Num == 0', () => {
    it('é uma string', () => {
      const result = numFunction(0);
      expect(result).to.be.a('string');
    });

    it('é neutro', () => {
      const result = numFunction(0);
      expect(result).to.be.equals('neutro');
    });
  });


});