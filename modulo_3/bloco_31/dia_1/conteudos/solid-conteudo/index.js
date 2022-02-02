// // const {default: axios} = require('axios');
// const axios = require('axios').default;

// async function validaeconsultaCEP() {
//   const cep = '46.860-000';

//   const regexCEP = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;

//   const valida = regexCEP.test(cep);

//   let cepTratado;

//   if (valida) {
//     cepTratado = cep.replace(/[^\d]+/g, "");
//     console.log("Retira traço e ponto do CEP: ", cepTratado);

//     const URL = `https://brasilapi.com.br/api/cep/v1/${cepTratado}`;

//     // const URL = "https://brasilapi.com.br/api/cep/v1/46680000"
//     const request = await axios.get(URL);
//     console.log('Result: ', request.data);
//   }
// }

// validaeconsultaCEP();


// =========================================================================
// const {default: axios} = require('axios');
const axios = require('axios').default;

const CIDADES = {
  iacu: {
    cep: '46.860-000',
  },
  itaberaba: {
    cep: '46.880-000'
  }
}

function validaCEP(cep) {
  const regexCEP = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;

  return regexCEP.test(cep);
}

async function brasilAPI(cep) {
  const URL = `https://brasilapi.com.br/api/cep/v1/${cep}`;

  const request = await axios.get(URL);

  console.log('Result: ', request.data);
}

async function viaCEP(cep) {
  const URL = `https://viacep.com.br/ws/${cep}/json/`;

  const request = await axios.get(URL);

  console.log('Result: ', request.data);
}

async function consultaCEP(cidade, service) {
  // Ex: iacu. Consulta em CIDADES o índice iacu e retorna o CEP
  const { cep } = CIDADES[`${cidade}`];

  const valida = validaCEP(cep);

  let cepTratado;

  if (valida) {
    cepTratado = cep.replace(/[^\d]+/g, "");
    console.log("Retira traço e ponto do CEP: ", cepTratado);

    service(cepTratado);   
  }
}

consultaCEP('iacu', viaCEP);
