// =======================================================================================
// Jest - Testes Assíncronos

const pokeTips = (callback) => {
  setTimeout(() => {
    callback('Squirtle é o melhor pokémon para começar.');
  }, 2000);
};

//pokeTips(console.log);

module.exports = pokeTips;
