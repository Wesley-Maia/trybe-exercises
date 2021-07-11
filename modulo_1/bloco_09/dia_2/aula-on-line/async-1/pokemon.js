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

const getPokemin = (pokemonName) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`) // promise
    .then((response) => {  // todos os dados da requisicao
      response.json().then((jsonDoPokemon) => {
        appendPokemon(jsonDoPokemon)
      })
    })
};

const fetchPokemon = () => {
  getPokemin('pikachu');
  getPokemin('kakuna');
  getPokemin('squirtle');
}

window.onload = fetchPokemon();
