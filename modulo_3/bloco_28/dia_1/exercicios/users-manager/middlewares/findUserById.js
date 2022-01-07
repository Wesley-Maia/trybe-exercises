// users-manager/middlewares/findUserById.js

const rescue = require('express-rescue');
const User = require('../models/Users');

module.exports = rescue(async (req, res) => {
  // Extraímos o ID do dos parâmetros da rota
  const { id } = req.params;

  // Pedimos para o model buscar o usuário
  const user = await User.findById(id);

  // Caso nenhum usuário seja encontrado
  if (!user) {
    // Retornamos o status 404 Not Found e uma mensagem de erro
    return res.status(404).json({ error: true, message: 'Usuário não encontrado' });
  }

  // Caso o usuário exista, retornamos o status 200 OK e o usuário
  return res.status(200).json(user);
});
