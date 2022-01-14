// users-manager/middlewares/updateUser.js

const rescue = require('express-rescue');
const UserModel = require('../models/Users');

module.exports = [
  (req, res, next) => {
    // De forma semelhante ao middleware de criação de usuário, começamos validando os dados da request
    const { error } = UserModel.isValid(req.body);

    // Caso um erro de validação seja encontrado, iniciamos o fluxo de erro e encerramos a execução dos nossos middlewares.
    if (error) return next(error);

    // Se não há nenhum problema com os dados, podemos prosseguir para o próximo middleware
    next();
  },
  rescue(async (req, res) => {
    // Extraímos o id do usuário da rota
    const { id } = req.params;
    // Extraímos os dados da request
    const { firstName, lastName, email, password } = req.body;

    // Pedimos que o model altere e nos devolva o usuário alterado
    const updatedUser = await UserModel.updateUser(id, { firstName, lastName, email, password });

    // Caso nenhum usuário seja encontrado
    if (!updatedUser) {
      // Retornamos o status 404 Not Found e uma mensagem de erro
      return res.status(404).json({ error: true, message: 'Usuário não encontrado' });
    }

    // Caso dê tudo certo, retornamos o status 200 OK e os dados do usuário atualizado
    return res.status(200).json(updatedUser);

  }),
];
