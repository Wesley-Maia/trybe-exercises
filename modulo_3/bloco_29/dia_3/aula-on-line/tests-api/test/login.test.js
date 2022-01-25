const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

// Importar o servidor index.js
// Colocar "module.exports = app;" no final do arquivo index.js
const server  = require('../index');

// Importar MongoDB
const { getConnection } = require('./connectionMock');
const { MongoClient } = require('mongodb');

const jwt = require('jsonwebtoken');

describe('POST /api/login', () => {
  let connectionMock;

  before( async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after( () => {
    MongoClient.connect.restore();
  });


  describe('Quando usuário e/ou senha não são informados', () => {
    let response;
    
    // Antes de testar, faz uma requisição no server utilizando POST
    // e enviando um objeto vazio
    before(async () => {
      response = await chai.request(server)
        .post('/api/login')
        .send({});
      // console.log("🚀 ~ file: login.test.js ~ line 41 ~ before ~ response", response);
    });  

    it('retorna código de status "401"', () => {
      expect(response).to.have.status(401);
    });

    it('retorna um objeto no body', () => {
      expect(response.body).to.be.an('object');
    });

    it('objeto de resposta possui a propriedade "message"', () => {
      expect(response.body).to.have.property('message');
    });

    it('a propriedade "message" tem o valor "É necessário pessoa usuária e senha para fazer login"', () => {
      expect(response.body.message).to.be.equals('É necessário pessoa usuária e senha para fazer login');
    });

  });

  // describe('Quando pessoa usuária não existe ou senha é inválida', () => {
  //   let response;

  //   before(async () => {			
  //     /**
  //      * Precisamos passar na requisição um "username" e "password"
  //      * para que não caia no cenário anterior, porém,
  //      * pode ser passado qualquer valor.
  //      */
  //     response = await chai.request(server)
  //       .post('/api/login')
  //       .send({
  //           username: 'user-fake',
  //           password: 'senha-fake'
  //       });
  //   });

  //   it('retorna código de status "401"', () => {
  //     expect(response).to.have.status(401);
  //   });

  //   it('retorna um objeto no body', () => {
  //     expect(response.body).to.be.an('object');
  //   });

  //   it('objeto de resposta possui a propriedade "message"', () => {
  //     expect(response.body).to.have.property('message');
  //   });

  //   it('a propriedade "message" tem o valor "Pessoa usuária não existe ou senha inválida"', () => {
  //     expect(response.body.message).to.be.equals('Pessoa usuária não existe ou senha inválida');
  //   });
  // });

  // describe('Quando login é feito com sucesso', () => {
  //   let response;
    
  //   before(async () => {
  //     /**
  //      * Aqui um detalhe importante: precisamos que nossa aplicação
  //      * encontre a pessoa usuária no banco com os dados passados.
  //      * Para isso, iremos inserir no MongoDB em memória um registro
  //      * da maneira que desejamos que exista
  //      * O nome do BD e da collection tem que ser igual ao configurado
  //      * na camada de model.
  //      */

  //     const usersCollection = connectionMock.db('jwt_exercise').collection('users');

  //     await usersCollection.insertOne({
  //       username: 'user-ok',
  //       password: 'senha-ok'
  //     });      

  //     response = await chai.request(server)
  //     .post('/api/login')
  //     .send({
  //       username: 'user-ok',
  //       password: 'senha-ok'
  //     });
  //   });

  // it('retorna código de status "200"', () => {
  //   expect(response).to.have.status(200);
  // });

  // it('retorna um objeto no body', () => {
  //   expect(response.body).to.be.an('object');
  // });

  // it('objeto de resposta possui a propriedade "message"', () => {
  //   expect(response.body).to.have.property('message');
  // });

  // it('a propriedade "message" deve conter um token JWT com o username usado no login no seu payload', () => {
  //   const token = response.body.message; // HJ2G1I4IU1G4.J5I1UH98FHNJVJLOAH.J3H4U1O4UO1HG4O
  //   const payload = jwt.decode(token); // { username: 'user-ok' }

  //   expect(payload.data.username).to.be.equals('user-ok')
  // });
  // });

});