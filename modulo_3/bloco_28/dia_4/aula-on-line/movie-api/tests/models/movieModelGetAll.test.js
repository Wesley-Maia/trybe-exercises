// Busca todos os filmes no BD
// |__ quando não existe nenhum filme criado
// |____ retorna um array
// |____ o array está vazio
// |__ quando existem filmes criados
// |____ retorna um array
// |____ o array não está vazio

const { expect} = require('chai');
const sinon = require('sinon');

// const MovieModel = {
//   getAll: ()=> {
//     return [];
//   }
// }

const MovieModel = require('../../models/movieModel');
const { MongoClient, ObjectId } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoConnection = require('../../models/connection');

describe('Busca todos os filmes no BD', () => {

  // Criando um MongoDB Fack
  // Criando instância do Mongo Memory Server
  let DBServer = new MongoMemoryServer();
  // Definindo o Mock de conexão
	let connectionMock;

  before(async () => {
    // Utiliza o objeto DBServer para pegar a URL
    const URLMock = await DBServer.getUri();
    // Utiliza essa URL para dedinir o MongoClient.connect
    connectionMock = await MongoClient.connect(URLMock, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
    .then((conn) => conn.db('model_example'));
		
    // Feita a conexão, agora é criado o STUB (o dublê)
    // Assim, onde tiver 'getConnection', vai utilizar o connectionMock
		sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
  });

  after(async () => {
    await mongoConnection.getConnection.restore();
  });

  describe('Quando não existe nenhum filme criado', () => {
    before(async () => {
      // Apaga o DB - garante que o DB tem nada
      connectionMock.collection('movies').drop();
      // ou
      // connectionMock.collection('movies').deleteMany({});
    });

    it('Retorna um array', async () => {
      const movies = await MovieModel.getAll();

      expect(movies).to.be.a('array');
    });

    it('O array está vazio', async () => {
      const movies = await MovieModel.getAll();

      expect(movies).to.be.empty;
    });
  });

  describe('Quando existe cadastrados', () => {
    before(async () => {
      // Cadastrando filme para fazer o teste
      connectionMock.collection('movies').insertOne({
        title: 'Spider-Man: No Way Home',
        year: 2021
      });
    })

    it('Retorna um array', async () => {
      const movies = await MovieModel.getAll();

      expect(movies).to.be.a('array');
    });

    it('O array não está vazio', async () => {
      const movies = await MovieModel.getAll();

      expect(movies).to.be.not.empty;
    });

    it('deve ter o filme cadastrado', async () => {
      const movies = await MovieModel.getAll();

      // Desestrutura o único filme cadastrado
      const [movie] = movies;

      expect(movie.title).to.be.eq('Spider-Man: No Way Home');
    });

  });

});

// describe('Busca todos os filmes no BD', () => {
//   describe('Quando não existe nenhum filme criado', () => {
//     it('Retorna um array', () => {
      
//     })
//   });
// });
