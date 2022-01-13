const sinon = require('sinon');
const { expect } = require('chai');

/*
  Como ainda não temos a implementação, vamos fixar
  um objeto simulando os métodos que iremos desenvolver,
  porém, eles não terão nenhum comportamento
*/
// const MoviesModel = {
//   create: () => {}
// };

/* Vamos importar o módulo responsável para abrir a conexão nos nossos models para poder fazer o seu `double`.*/
const mongoConnection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
  /* Vamos deixar o objeto com o mock da conexão como uma variável global dentro desse describe. */
  let connectionMock;

  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

  /* Esta é uma forma provisória para mockar a função insertOne
      Desta forma ela não vai chamar o banco de verdade para fazer esse teste */
  before(() => {
    const ID_EXAMPLE = '604cb554311d68f491ba5781';
    const insertOne = async () => ({ insertedId: ID_EXAMPLE });
    const collection = async () => ({ insertOne });
    const db = async (databaseName) => ({ collection });
    const getConnectionMock = async () => ({ db });

    connectionMock = getConnectionMock()
      .then((conn) => conn.db('model_example'));

    sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
  });

  /* Restauraremos a função `getConnection` original após os testes. */
  after(() => {
    mongoConnection.getConnection.restore();
  });

  describe('quando é inserido com sucesso', () => {
    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id')
    });
  });
});
