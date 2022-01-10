// services/users.services.js

const { find, create, findUserByEmail } = require('../models/users.models');

const findAllUsers = async () => {
  const users = await find();

  return users;
};

const createUser = async (name, email, password) => {
  const userExists = await findUserByEmail(email);

  if (userExists) throw { status: 400, message: 'Email already exists' };

  const newUserId = await create(name, email, password);

  const newUser = {
    id: newUserId,
    name,
    email,
    password,
  };

  return newUser;
};

module.exports = {
  findAllUsers,
  createUser,
};
