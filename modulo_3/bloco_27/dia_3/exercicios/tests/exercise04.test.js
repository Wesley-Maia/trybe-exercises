// Exercício 4
// - Crie testes para uma função que escreverá um conteúdo em um arquivo específico.
// - Essa função deverá receber dois parâmetros: o nome do arquivo e o conteúdo desse arquivo.
// - Após concluir a escrita do arquivo ela deverá retornar um ok .
// - Descreva todos os cenários de teste utilizando describes ;
// - Descreva todos os testes que serão feitos utilizando its ;
// - Crie as asserções validando se o retorno da função possui o valor e tipo esperado.

// describe('Descrição', () => {});
// it('Descrição', () => {});

const fs = require('fs');
const sinon = require('sinon');
const { expect } = require( 'chai' );

const fileContent = require('../fileContent');

describe('Executa função fileContent()', () => {

  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  it('Verifica se é uma string', () => {
    const result = fileContent('file.txt', 'conteúdo de teste');
    expect(result).to.be.a('string');
  });

  it('Conteúdo igual a "ok"', () => {
    const result = fileContent('file.txt', 'conteúdo de teste');
    expect(result).to.be.equals('ok');
  });
});
