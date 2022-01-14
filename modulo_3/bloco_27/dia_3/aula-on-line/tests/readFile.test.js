const readfile = require('../readFile');
const fs = require('fs/promises');
const sinon = require("sinon");
const { expect } = require( 'chai' );

// describe('Descrição', () => {});

describe('Ler um arquivo', () => {
  describe('o output', () => {

    before(() => {
      sinon.stub(fs, 'readFile').resolves('Harry Potter');
    });

    after(() => {
      fs.readFile.restore();
    });

    it('é uma string', async () => {
      const result = await readfile('testes.txt');
      expect(result).to.be.a('string');
    });

    it('o resultado é igual ao texto do arquivo', async () => {
      const result = await readfile('testes.txt');
      expect(result).to.be.equal("Harry Potter");
    });
  });

  describe('erro na leitura do arquivo', () => {

    before(() => {
      sinon.stub(fs, 'readFile').rejects('Erro de leitura do arquivo');
    });

    after(() => {
      fs.readFile.restore();
    });

    describe('o output', () => {
      it('é null', async () => {
        const result = await readfile('testes.txt');
        expect(result).to.be.a.null;
      });
    });
  });
});