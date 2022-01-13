const { expect } = require('chai');
const sinon = require('sinon');

// const MovieService = {
//   getAll: ()=> {
//     return [];
//   }
// }

const MovieService = require('../../services/movieService');
const MovieModel = require('../../models/movieModel');

describe('Busca todos os filmes no BD', () => {

  describe('Quando não existe nenhum filme criado', () => {

    before(async () => {
      // Finge que executa MovieModel.getAll e retorna []
      sinon.stub(MovieModel, 'getAll').resolves([]);
    });
  
    after(() => {
      MovieModel.getAll.restore();
    });

    it('retorna uma array', async () => {
      const movies = await MovieService.getAll();

      expect(movies).to.be.an('array');
    });

    it('o array está vazio', async () => {
      const movies = await MovieService.getAll();

      expect(movies).to.be.empty;
    });
  });

  describe('quando existem filmes cadastrados', () => {
    before(async () => {
      // Finge que executa MovieModel.getAll e retorna o filme
      sinon.stub(MovieModel, 'getAll').resolves([{
        title: 'Spider-Man: No Way Home',
        year: 2021
      }]);
    });

    after(() => {
      MovieModel.getAll.restore();
    });

    it('retorna uma array', async () => {
      const movies = await MovieService.getAll();

      expect(movies).to.be.an('array');
    });

    it('não é uma array vazia', async () => {
      const movies = await MovieService.getAll();

      expect(movies).to.be.not.empty;
    });

    it('deve ter o filme cadastrado', async () => {
      const movies = await MovieService.getAll();

      const [movie] = movies;

      expect(movie.title).to.be.eq('Spider-Man: No Way Home');
    });
  });
  
});
