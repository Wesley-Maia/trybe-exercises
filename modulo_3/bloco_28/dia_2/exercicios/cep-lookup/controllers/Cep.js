// controllers/Cep.js

const rescue = require('express-rescue');
const service = require('../services/Cep');
const Joi = require('joi');

const findAddressByCep = rescue(async (req, res, next) => {
  const { cep } = req.params;

  const address = await service.findAddressByCep(cep);
  console.log("🚀 ~ file: Cep.js ~ line 10 ~ findAddressByCep ~ address", address)

  if (address.error) {
    return next(address.error);
  }

  return res.status(200).json(address);
});


const create = rescue(async (req, res, next) => {
  const requiredNonEmptyString = Joi.string().not().empty().required();

  const { error } = Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
    logradouro: requiredNonEmptyString,
    bairro: requiredNonEmptyString,
    localidade: requiredNonEmptyString,
    uf: requiredNonEmptyString.length(2),
  }).validate(req.body);

  if (error) return next(error);

  const newCep = await service.create(req.body);

  // Caso o service nos retorne um erro
  if (newCep.error) {
    // Iniciamos o fluxo de erro
    return next(newCep.error);
  }

  res.status(201).json(newCep);
});


module.exports = {
  findAddressByCep,
  create,
};
