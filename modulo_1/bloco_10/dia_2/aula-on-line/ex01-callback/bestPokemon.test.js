const pokeTips = require('./bestPokemon');

test('Retorna o melhor pokemon para começar.', (done) => {
  const callback = (data) => {
    expect(data).toBe('Squirtle é o melhor pokémon para começar.');
    done();
  };

  pokeTips(callback);
});
