// controllers/login.js

const Joi = require('joi');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const loginSchema = Joi.object({
  username: Joi.string().min(5).alphanum().required(),
  password: Joi.string().min(5).required()
});

module.exports = (req, res, next) => {
  const { username, password } = req.body;

  const { error } = loginSchema.validate({ username, password });
  console.log("🚀 ~ file: login.js ~ line 12 ~ error", error);

  if (error) return next(error);

  if (username === 'admin' && password !== 's3nh4S3gur4???') {
    /* Criamos um novo objeto de erro */
    const err = new Error('Invalid username or password');
    /* Adicionamos o status `401 Unauthorized` ao erro */
    err.statusCode = 401;
    /* Passmos o erro para o express, para que seja tratado pelo middleware de erro */
    return next(err);
  }

  if (username === 'admin' && password === 's3nh4S3gur4???') {
    const payload = {
      username,
      admin: true,
    };

    const JWT_CONFIG = {
      expiresIn: '1h',
      algorithm: 'HS256'
    };

    const token = jwt.sign(payload, JWT_SECRET, JWT_CONFIG);

    return res.status(200).json({ token });
  }

  const payload = {
    username,
    admin: false,
  }

  const JWT_CONFIG = {
    expiresIn: '1h',
    algorithm: 'HS256'
  };

  const token = jwt.sign(payload, JWT_SECRET, JWT_CONFIG);

  return res.status(200).json({ token });
};