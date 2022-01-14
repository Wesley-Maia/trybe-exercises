// npm init -y
// npm i axios

// ==================================================================
// Parte 1 - Requisção de 1 pokemon
// const axios = require('axios');

// const getPokemonById = async (id) => {
//     const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
   
//     return response.data;
// }

// async function main() {
//   const pokemon = await getPokemonById(1);
//   console.log(`Pokemon: ${pokemon.name}`);
// }

// main();

// ==================================================================
// Parte 2 - Requisção de 50 pokemons
const axios = require('axios');

const getPokemonById = async (id) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
   
    return response.data;
}

async function main() {
  const promises = [];
  for (let i = 1; i <= 20; i++) {
    const promise = getPokemonById(i);
    promises.push(promise);
  }
  
  console.log("ESTOU AQUI")
    
  const pokemons = await Promise.all(promises);
  pokemons.forEach(
  pokemon => console.log(`Pokemon: ${pokemon.name}`));  
}
  
main();
