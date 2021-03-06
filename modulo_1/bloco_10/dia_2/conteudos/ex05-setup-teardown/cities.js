let cities = [];

function getCities() {
  return cities;
}

// Código Síncrono
function retrieveCitiesFromCache() {
  cities.push('Fortaleza');
  cities.push('Belo Horizonte');
  return cities;
}

// Código Assíncrono
function requestCities() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cities.push('Fortaleza');
      cities.push('Belo Horizonte');
      cities.push('São Paulo');
      cities.push('Recife');
      cities.push('Porto Alegre');
      cities.push('Goiânia');
      cities.push('Manaus');
      cities.push('Piauí');
      resolve();
    }, 200);
  });
}

function removeCity(city) {
  const index = cities.indexOf(city);
  if (index > -1) cities.splice(index, 1);
}

function isCity(name) {
  return cities.includes(name);
}

function resetCities() {
  cities = [];
}

module.exports = { resetCities, getCities, removeCity, retrieveCitiesFromCache, requestCities, isCity }; 