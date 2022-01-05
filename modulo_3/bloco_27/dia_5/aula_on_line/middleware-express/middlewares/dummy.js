const dummyMiddleware = (req, res, next) => {
  console.log("Olá mundo!");
  return res.status(400).json({message: "Quebrou"});
  //next();
}

module.exports = dummyMiddleware;
