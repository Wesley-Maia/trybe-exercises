const Joi = require('joi');
const connection = require('./connection');

// Vamos utilizar o ObjectId para validar e converter o id recebido como parâmetro mais pra frente.
const { ObjectId } = require('mongodb');

function formatUser(document) {
  const {
    _id,
    password,
    ...user
  } = document;

  const formattedResult = {
    id: _id,
    ...user,
  };

  return formattedResult;
}

// function isValid({ firstName, lastName, email, password }) {
//   // Regex que valida strings de 6 ou mais caracteres alfanuméricos
//   const PASSWORD_REGEX = /[a-z0-9]{6,}/ig;
//   // Criamos um array para poder verificar com facilidade cada campo
//   const fields = [firstName, lastName, email, password];

//   // Se algum dos itens do array for `unfined`, `null`, ou uma string vazia, retornamos `false`
//   if (fields.includes(undefined) || fields.includes(null) || fields.includes('')) {
//     return false;
//   }

//   // Por último, só precisamos garantir que `password` passa no regex.
//   // Caso passe, retornaremos `true`. Caso constrário, retornaremos `false`
//   return PASSWORD_REGEX.test(password);
// }

const userSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

// Criamos um método para verificar se os dados do usuário são válidos
function isValid(userData) {
  return userSchema.validate(userData);
}

function create({ firstName, lastName, email, password }) {
  return connection().then((db) => db
    .collection('users')
    .insertOne({ firstName, lastName, email, password }))
    // Depois de criar o usuário, obtermos o ID gerado pelo banco e retornamos num objeto juntamente
    // com os demais dados do usuário recém-criado
    .then((result) => ({ id: result.insertedId, firstName, lastName, email }));
}

function findAll() {
  return connection()
    // Utilizamos o `find` para buscar todos os documentos da collection `users`.
    // O `toArray` aqui é importante pois ele busca **todos** os registros, e transforma o resultado
    // em um array, como o próprio nome diz 😄
    .then((db) => db.collection('users').find().toArray())
    .then((results) => results.map(formatUser));
}

async function findById(id) {
  // Verificamos que o id que recebemos é válido
  if (!ObjectId.isValid(id)) {
    // Caso não seja um id válido, retornamos `null`
    return null;
  }

  // Buscamos o usuário no banco
  const user = await connection()
    // É importante lembrar de converter o parâmetro `id` para um `ObjectId` do MongoDB
    // utilizando `new ObjectId(id)`.
    .then((db) => db.collection('users').findOne(new ObjectId(id)));

  // Se nenhum usuário for encontrado, retornamos `null`
  if (!user) return null;

  // Caso encontremos um usuário retornamos seus dados formatados
  return formatUser(user);
}

async function updateUser(id, { firstName, lastName, email, password }) {
  // Verificamos se o id é válido. Se não for, retornamos `null`
  if (!ObjectId.isValid(id)) return null;

  // Atualizamos o documento no banco utilizando os novos dados
  const updatedUser = await connection()
    .then((db) => {
      const userId = new ObjectId(id);
      const newData = { firstName, lastName, email, password };
      // Repare no uso da opção `returnDocument: after`. Ela faz com que o documento retornado
      // já contenha os dados atualizados.
      return db.collection('users')
        .findOneAndUpdate({ _id: userId }, { $set: newData })
        // Obtemos apenas o valor de retorno do banco, que é o usuário atualizado
        .then((result) => result.value);
    });

  // Caso nenhum usuário seja encontrado, retornamos `null`
  if (!updatedUser) return null;

  // Por fim, retornamos o usuário com os campos já formatados
  return formatUser(updatedUser);
}

module.exports = {
  isValid,
  create,
  findAll,
  findById,
  updateUser,
};
