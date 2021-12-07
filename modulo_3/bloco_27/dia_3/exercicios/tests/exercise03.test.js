// Exercício 3
// - Adicione à função um tratamento para casos em que o parâmetro informado não seja do tipo number .
// - Adicione o cenário em seu arquivo de testes, passando um valor de tipo diferente a number para a função;
// - Adicione uma asserção para esperar que o valor retornado para esse caso seja igual uma string "o valor deve ser um número";
// - Implemente em sua função tal validação para que o teste passe.

// describe('Descrição', () => {});
// it('Descrição', () => {});

const { expect } = require( 'chai' );

const numFunction = require('../numerosNaturais');

describe('Quando parâmetro não é number', () => {
  it('Descrição', () => {
    const result = numFunction('ab');
    expect(result).to.be.a('string');
  });

  it('Mensagem', () => {
    const result = numFunction('ab');
    expect(result).to.be.equals("o valor deve ser um número");
  });
});