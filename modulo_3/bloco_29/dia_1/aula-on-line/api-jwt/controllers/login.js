const { findUserService } = require('../services/users');

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // buscar no banco.
    const result = await findUserService(username, password); 
    
    return res.status(200).json({ message: result });
  } catch (e) {
    console.log(e.message)
    return res.status(500).json({ message: 'Erro interno', error: e });
  }
}

module.exports = { login };
