// =======================================================================================
// 

const API_URL = 'https://icanhazdadjoke.com/';

function phrase (msg) {
    const idJoke = document.getElementById('jokeContainer');

  idJoke.innerText = msg;
  console.log(msg);
  console.log(idJoke);
}

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  fetch(API_URL, myObject)
  .then(response => response.json())
  //.then(data => console.log(data.joke));
  .then(data => phrase(data.joke));
};

window.onload = () => fetchJoke();
