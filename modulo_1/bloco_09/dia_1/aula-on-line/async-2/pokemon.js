// =======================================================================================
// Callbacks

// Simulando um servidor respondendo…
// const requestPokemonFromServer = (callback) => {
//   const pokemons = ['Squirtle', 'Kakuna', 'Rattata', 'Pikachu'];
//   const randomIndex = Math.floor(Math.random() * pokemons.length);
//   const randomPokemon = pokemons[randomIndex];

//   const randomTimeResponse = Math.random() * 5000;

//   setTimeout(() => {
//     callback(`${randomPokemon} was received in ${randomTimeResponse} milliseconds`);
//   }, randomTimeResponse);
// };

const appendPokemon = (pokemon) => {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  let img = document.createElement('img');

  img.src = pokemon.sprites.other.dream_world.front_default;
  li.innerHTML = `${pokemon.name}</br> ${img.outerHTML}`;
  ul.appendChild(li);
};

const fetchPokemon = () => {
  //  requestPokemonFromServer((pokemon) => {
  //   appendPokemon(pokemon);
  //  });
  fetch('https://pokeapi.co/api/v2/pokemon/squirtle') // promise
    .then((response) => {  // todos os dados da requisicao
      response.json().then((jsonDoPokemon) => {
        appendPokemon(jsonDoPokemon)

        fetch('https://pokeapi.co/api/v2/pokemon/kakuna') // promise
        .then((response) => {  // todos os dados da requisicao
          response.json().then((jsonDoPokemon) => {
            appendPokemon(jsonDoPokemon)

            fetch('https://pokeapi.co/api/v2/pokemon/rattata') // promise
            .then((response) => {  // todos os dados da requisicao
              response.json().then((jsonDoPokemon) => {
                appendPokemon(jsonDoPokemon)

                fetch('https://pokeapi.co/api/v2/pokemon/pikachu') // promise
                .then((response) => {  // todos os dados da requisicao
                  response.json().then((jsonDoPokemon) => {
                    appendPokemon(jsonDoPokemon)
                  })
                })

              })
            })

          })
        })

      })
    })
};


window.onload = fetchPokemon();

// JSON - JavaScript Object Notation
// Callback Hell
