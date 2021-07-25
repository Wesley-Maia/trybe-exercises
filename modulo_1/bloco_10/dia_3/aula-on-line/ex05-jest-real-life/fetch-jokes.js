const fetch = require('node-fetch');
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJokePromise = (term) => (  // retorna uma promise
  fetch(API_URL, { headers: { Accept: 'application/json' } })
    .then((response) => response.json())
);

/* fetchJokePromise()
  .then((data) => console.log(data.joke)); */

module.exports = fetchJokePromise;
