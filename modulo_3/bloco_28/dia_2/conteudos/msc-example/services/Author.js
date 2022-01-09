// service/Author.js

const Author = require('../models/Author');

const getNewAuthor = ({ id, firstName, middleName, lastName}) => {
  const fullName = [firstName, middleName, lastName].filter((name) => name).join(' ');
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName
  }
}

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

// Busca autores na camada models
const getAll = async () => {
  const authors = await Author.getAll();
  // console.log("🚀 ~ file: Author.js ~ line 26 ~ getAll ~ authors", authors)

  return authors.map(getNewAuthor);
}

// Busca um autor específico na camada models
const findById = async (id) => {
  const author = await Author.findById(id);

  return getNewAuthor(author);
}

// Envia um autor específico para a camada models
const create = async (firstName, middleName, lastName) => {
  const authorValid = isValid(firstName, middleName, lastName);

  if(!authorValid) return false;

  const {insertedId} = await Author.create(firstName, middleName, lastName);

  return getNewAuthor({
    id: insertedId,
    firstName,
    middleName,
    lastName
  });
}

module.exports = {
  getAll,
  findById,
  create,
};
