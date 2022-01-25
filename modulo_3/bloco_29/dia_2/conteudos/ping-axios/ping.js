const axios = require('axios');

/* Faz uma requisição do tipo GET */
axios
  .get('http://localhost:3000/ping/')
  .then((response) => {
    console.log(response.data);
    console.log(response.status);
  })
  .catch((error) => {
    console.log(error);
  });

// Você pode usar métodos async também
const getUser = async () => {
  try {
    const response = await axios.get('http://localhost:3000/ping/');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
getUser();
