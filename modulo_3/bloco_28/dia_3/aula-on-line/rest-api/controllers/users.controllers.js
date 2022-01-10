// controllers/users.controllers.js

const { findAllUsers, createUser } = require('../services/users.services');

const listUsers = async (req, res, next) => {
  try {
    const users = await findAllUsers();

    return res.status(200).json(users);
  } catch (error) {
    console.error(error.message);
    return next(error);
  }
};

const createNewUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    // console.log("🚀 ~ file: users.controllers.js ~ line 19 ~ createNewUser ~ email", email)
    // console.log("🚀 ~ file: users.controllers.js ~ line 19 ~ createNewUser ~ name", name)

    const newUser = await createUser(name, email, password);

    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error.message);
    return next(error);
  }
};

module.exports = {
  listUsers,
  createNewUser,
}