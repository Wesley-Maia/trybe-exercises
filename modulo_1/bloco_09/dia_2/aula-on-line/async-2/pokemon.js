// =======================================================================================
// Callbacks

const appendPokemon = (pokemon) => {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  let img = document.createElement('img');

  img.src = pokemon.sprites.other.dream_world.front_default;
  li.innerHTML = `${pokemon.name}</br> ${img.outerHTML}`;
  ul.appendChild(li);
};

const getPokemonPromise = (pokemonName) => {
  return new Promise((resolve, reject) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`) // retorna uma promise
      .then((response) => {  // todos os dados da requisicao
        response.json().then((jsonDoPokemon) => {
          appendPokemon(jsonDoPokemon)
          resolve();
        })
      });
  });
};

const fetchPokemonPromise = async () => {
  try {
    await getPokemonPromise('pikachu');
  await getPokemonPromise('rattata');
  await getPokemonPromise('squirtle');
  await getPokemonPromise('kakuna');
  } catch (error) {
    console.log(error);
  }
  



//  getPokemonPromise('pikachu')
//  .then(() => getPokemonPromise('rattata'))
//  .then(() => getPokemonPromise('squirtle'))
//  .then(() => getPokemonPromise('kakuna'))
}

window.onload = fetchPokemonPromise();
