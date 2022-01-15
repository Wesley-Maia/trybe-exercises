module.exports = (req, res, next) => {

  const payload = req.user;
  console.log("🚀 ~ file: admin.js ~ line 4 ~ payload", payload);

  if(!payload){
    /* Criamos um objeto de erro */
    const err = new Error('This endpoint requires authentication');
    /* Atribuímos o status `401 Unauthorized` ao erro */
    err.statusCode = 401;
    /* E enviamos o erro para o middleware de erro */
    return next(err);
  }

  /* Caso o usuário não seja admin */
  if (!payload.admin) {
    /* Criamos um novo erro com status `403 Forbidden` */
    const err = new Error('Restricted access');
    err.statusCode = 403;
    /* Enviamos o erro para ser processado no middleware de erros */
    return next(err);
  }

  /* Se nenhuma das condições acima forem verdadeiras, */
  /* a pessoa é admin e podemos continuar com a request */
  return next();
};
